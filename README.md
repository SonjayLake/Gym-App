# Overview
  WorkoutApp is a MERN stack application that enables users to effortlessly track and manage their workouts. With an intuitive user interface, users can easily add and delete specific workouts, allowing them to maintain a personalized exercise routine. This app simplifies the process of organizing and monitoring workout progress, helping users stay motivated and achieve their fitness goals.

## Demo


https://github.com/SonjayLake/Gym-App/assets/113541904/e8ca7cd1-e3a3-4360-9653-559d25bf799b



### How to use:

  This is a dynamic webpage created using the MERN stack and create-react app. Make sure
  that you have npm (or another dependency manager) installed. Download the files, navigate
  to the root directory, and run the command which installs the dependencies for the package.json
  file. For npm, run `npm install` or `npm i`.

  Once done, open two terminals. Navigate to the frontend folder in one terminal, and the backend 
  folder in the other. In the frontend terminal, run `npm run start`. In the backend folder,
  run `npm run dev`. This will get the server and clientside for the project running.

### Built with

- [MongoDB](https://www.mongodb.com/) - Document Database
- [ExpressJS](https://expressjs.com/) - Server side web framework
- [React](https://react.dev/) - Frontend framework
- [NodeJS](https://nodejs.org/en) - JavaScript runtime environment
- [Mongoose](https://mongoosejs.com/) - Object modeling for NodeJS

### What I learned
  This project allowed me to gain experience with the MERN stack. It is
  my first full stack application, and taught me a lot about the logistics
  of connecting the frontend and backend in a practical way. 

  I gained useful experience with React useContext (similar to Redux),
  Express server applications, and accessing the MongoDB atlas database
  using mongoose.



This short snipped uses an async function 
and mongoose to send a GET request to the MongoDB databse
```js
async function getWorkout(req, res) {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such workout" });
  }
  let workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "Invalid Workout Id" });
  }
  console.log(workout);
  res.status(200).json(workout);
}
```

This snippet utilizes the React's 
useReducer and useContext functions to make the workout
variable globally accessible by all components in the App
and avoid the need for prop drilling.
```jsx
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  //dispatch({type: ? , payload: [{data},{data}])
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
//action : tag, payload
//state reliable state
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS": {
      return {
        workouts: action.payload,
      };
    }

    case "CREATE_WORKOUTS": {
      return {
        workouts: [action.payload, ...state.workouts],
      };
    }
    case "DELETE_WORKOUT": {
      return {
        workouts: state.workouts.filter((e) => e._id !== action.payload._id),
      };
    }

    default: {
      return {
        state,
      };
    }
  }
};
```

### Continued development

In the future, I plan to add authentication to this app.
This would mean allowing users to signup and log in so that
they can save the added workouts and access them at a later date.

I also plan to incorporate JSON web tokens in order to ensure that
the data inputted by users is secure.
### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/) - The MDN Docs were incredibly useful for information on JavaScript debugging. A classic source.
- [StackOverFlow](https://stackoverflow.com/) - A useful forum for debugging 

## Author

- Linkedin - [Sonjay Lake](https://www.linkedin.com/in/sonjay-l-24a4a0126/)
- Twitter - [@Sonjay_Lake](https://twitter.com/Sonjay_Lake)



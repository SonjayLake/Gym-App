function WorkoutTemplate({ workout }) {
  let { title, reps, load, createdAt } = workout;

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>Load (lbs): {load} </p>
      <p>Reps: {reps}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default WorkoutTemplate;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages and components
import Home from "./pages/Home";

const home = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={home} />
    </div>
  );
}

export default App;

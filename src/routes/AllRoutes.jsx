import {
    createBrowserRouter,
  } from "react-router-dom";

  import Home from "../pages/home";
  import Login from "../pages/login";
  import SignUp from "../pages/signup";

  

 const Router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>

    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {
        path : "/login",
        element : <Login />
    }

])
export default Router
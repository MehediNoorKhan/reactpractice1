import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";



export const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children: [
    {   index: true,
         path: "/", 
         Component: Home
        
    },
   ]
  },
  {
    path:"/",
    Component: AuthLayout,
    children:
    [
      { 
        path:"login",
        Component: Login
      }, 
    ]   
  } 
]);
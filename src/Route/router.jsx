import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import VerifyCode from "../Pages/Authentication/VerifyCode";
import ResetPassword from "../Pages/Authentication/ResetPassword";



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
      { 
        path:"register",
        Component: Registration
      },
      {
        path:"forgot-password",
        Component: ForgotPassword
      },
      {
        path:"verify-code",
        Component: VerifyCode
      },
      {
        path:"reset-password",
        Component: ResetPassword
      }
    ]   
  } 
]);
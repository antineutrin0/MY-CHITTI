import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Homebody from "./pages/Homebody";
import Mychar from "./pages/Mychar";
import News from "./pages/News";
import NewsChat from "./pages/NewsChat";
import Weather from "./pages/Weather";
import Diary from "./pages/Diary";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Features from "./pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Homebody></Homebody>

      },
      {
        path:'/mychar',
        element:<Mychar></Mychar>
      },
      {
        path:'/news',
        element:<News></News>
      },
      {
        path:'/newschat',
        element:<NewsChat></NewsChat>
      },
      {
        path:'/weather',
        element:<Weather></Weather>
      },
      {
        path:'/diary',
        element:<Diary></Diary>
      },
      {
        path:'/pricing',
        element:<Pricing></Pricing>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
           path:'/signup',
           element:<Signup></Signup>
      },
      {
        path:'/features',
        element:<Features></Features>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
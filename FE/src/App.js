import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from "../src/Components/Auth/Signup.tsx"
import Login from "../src/Components/Auth/Login.jsx"
import Appointments from "./Components/Appointments.jsx"
import Bookappointments from "./Components/Bookappointments.jsx"
import useStore from './Components/Store/store.jsx';
import Home from './Components/Home.jsx';


const App = () => {
      const router = createBrowserRouter([
          {
              path: "/",
              element: <Signup/>,
          },
          {
              path: "/login",
              element: <Login/>,
          },
          {
              path: "/home",
              element: <Home/>,  
              children: [
                {
                   path: "/home/bookings",
                   element: <Bookappointments/>
                },
                {
                   path: "/home/allappointments",
                   element: <Appointments/>
                }
             ]
          },

          
      ]);
      return <RouterProvider router={router}/>
}

export default App;

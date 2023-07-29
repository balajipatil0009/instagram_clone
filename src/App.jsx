import React from 'react';
import Home from "./componunts/Home";
import AddPost from "./componunts/AddPosts";
import Login from "./componunts/Login"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Resister from "./componunts/Resister";
import Dprofile from './componunts/Dprofile';
import { Provider } from 'react';


import './App.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/login",
    element:<Login/>
  },
  {
    path:"/addPost",
    element:<AddPost/>
  },
  {
    path:"/resister",
    element:<Resister/>
  },
  {
    path:"/Dprofile",
    element:<Dprofile/>
  },
 
])


function App() {
  return (
    <> 
          
         <RouterProvider router={router}/>
    </>
  );
}

export default App;
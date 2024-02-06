import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from "./pages.jsx/Home";
import About from "./pages.jsx/About";

const router = createBrowserRouter([
  {path: "/Home", element :<Home/>},
  {path:"/about",element: <About/>},

]);
function App(){
  return <RouterProvider route = {router} />

}
  

export default App;
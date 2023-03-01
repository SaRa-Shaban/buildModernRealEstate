import React from 'react'
import Layout from './../Layout/Layout';
import Home from './../Home/Home'
import About from "./../About/About";
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Notfound from "./../Notfound/Notfound";
import Services from "./../Services/Services";
import Blog from "./../Blog/Blog";
import Pricing from "./../Pricing/Pricing";
import Contact from "./../Contact/Contact";



export default function App() {
  let routes = createHashRouter([{
    path: "/", element: <Layout/>, errorElement: <Notfound/>, children: [
      { index: '/', element: <Home/> },
      { path: 'about', element: <About/> } ,
      { path: 'services', element: <Services/> } ,
      { path: 'blog', element: <Blog/> } ,
      { path: 'pricing', element: <Pricing/> } ,
      { path: 'contact', element: <Contact/> } ,
    ]
  }])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

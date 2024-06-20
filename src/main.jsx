import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import SignIn from './auth/SignIn/SignIn.jsx'
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignIn/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

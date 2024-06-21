import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import SignInPage from './auth/SignIn/SignInPage.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
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
    element: <SignInPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>    
  </React.StrictMode>,
)

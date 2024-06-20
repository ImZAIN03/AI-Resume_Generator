import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'
import { Home } from 'lucide-react'

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App

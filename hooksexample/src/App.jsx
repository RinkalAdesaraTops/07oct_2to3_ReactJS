import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userefexample from './Userefexample'
import Usecontextexample from './Usecontextexample'

function App() {
  let name="Abcd"
  return (
    <>
      <div>
          <h3>Hooks Example</h3>
          <Userefexample />
          <Usecontextexample name={name}/>
      </div>
    </>
  )
}

export default App

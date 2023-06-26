import { useState } from 'react'
import './App.css'
import Start from './Start'
import Quiz from './Quiz'


function App() {

  return (
    <div className="main-container">
      <img className="logo" src="https://cprchicks.com/wp-content/uploads/2020/01/CPR-Chicks-San-Diego-CPR-Classes-favicon.png" alt="cartoon of 2 women making fists"/>
      <Start />
    </div>
  )
}

export default App

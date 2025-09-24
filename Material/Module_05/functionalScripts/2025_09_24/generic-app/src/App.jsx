import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greets from './components/Greets'
import JSX from './components/JSX'

// function App() {
//   return (
//     <Greets />
//   )
// }

class App extends Component {
  render () {
    return (
      <>
        {/* <Greets /> */}
        <JSX />
      </>
    )
  }
}

export default App

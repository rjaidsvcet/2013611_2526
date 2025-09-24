import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greets from './components/Greets'
import JSX from './components/JSX'
import Props from './components/Props'
import State from './components/State'

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
        {/* <JSX /> */}
        {/* <Props name="Peter Parker"/>
        <Props name="Tony Stark"/>
        <Props name="Bruce Banner" />
        <Props name="Steve Rogers" /> */}
        <State />
      </>
    )
  }
}

export default App

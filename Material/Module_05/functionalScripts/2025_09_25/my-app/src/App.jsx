import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetState from './components/SetState'
import Destruct from './components/Destruct'
import EventHandling from './components/EventHandling'
import EventBinding from './components/EventBinding'

class App extends Component {
  render () {
    return (
      // <h1>Hello</h1>
      // <SetState />
      // <Destruct name="Bruce Wayne" heroName="Batman" />
      // <EventHandling />
      <EventBinding />
    )
  }
}

export default App

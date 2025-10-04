import { Component, useState } from 'react'
import './App.css'
import LifecycleA from './components/mounting/LifecycleA'
import UpdateLifecycle from './components/updating/UpdateLifecycle'
import GetData from './components/axiosGet/GetData'

class App extends Component {
  render () {
    return (
      <>
        <GetData />
      </>
    )
  }
}

export default App

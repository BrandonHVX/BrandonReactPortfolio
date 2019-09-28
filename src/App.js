import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import Content from './components/content/Content'
import { BrowserRouter as Router } from 'react-router-dom'

export default () => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Router>
      <div className="App wrapper">
        <div className="side">
          <SideBar toggle={toggle} isOpen={isOpen} />
        </div>
        <div className="text">
          <Content toggle={toggle} isOpen={isOpen} />
        </div>
      </div>
    </Router>
  )
}

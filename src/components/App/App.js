import React from 'react'
import { Route, BrowserRouter as Router, Link } from 'module'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

export default function App() {
  return (
    <main>
      <Home />
      <About />
    </main>
  )
}

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import "./index.css";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Main />
      </Router>
      <Cart />
    </>
  )
}

export default App

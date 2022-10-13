import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.js'
import '../styles/Home.css'

function Accueil() {
  return (
    <div className="home">
      <NavBar />
      <div className="linkUser">
        <Link to="user/12">User 1</Link>
        <Link to="user/18">User 2</Link>
      </div>
    </div>
  )
}

export default Accueil

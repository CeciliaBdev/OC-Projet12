import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Accueil() {
  return (
    <div className="linkUser">
      <Link to="user/12">User 1</Link>
      <Link to="user/18">User 2</Link>
    </div>
  )
}

export default Accueil

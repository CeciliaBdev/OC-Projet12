import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.js'
import '../styles/Home.css'
import avatar_homme from '../assets/avatar_homme.jpeg'
import avatar_femme from '../assets/avatar_femme.jpeg'

function Accueil() {
  return (
    <div className="home">
      <NavBar />
      <div className="linkUser">
        <div className="user">
          <img src={avatar_homme} alt="" />
          <Link to="user/12">Karl</Link>
        </div>
        <div className="user">
          <img src={avatar_femme} alt="" />
          <Link to="user/18">Cécilia</Link>
        </div>
      </div>
    </div>
  )
}

export default Accueil

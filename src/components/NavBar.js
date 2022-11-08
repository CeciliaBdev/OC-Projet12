import logo from '../assets/logo.svg'
import icon_muscu from '../assets/icon_muscu.svg'
import icon_bike from '../assets/icon_bike.svg'
import icon_swim from '../assets/icon_swim.svg'
import icon_yoga from '../assets/icon_yoga.svg'
import copyright from '../assets/copyright.png'

import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="" />
        <Link to="/">Accueil</Link>
        {/* <a href="#Accueil">Accueil</a> */}
        <a href="#Profil">Profil</a>
        <a href="#Reglage">Réglage</a>
        <a href="#Commu">Communauté</a>
      </div>
      {/* <nav className="navbar">
        <img src={logo} alt="" />
        <p>Accueil</p>
        <p>Profil</p>
        <p>Réglage</p>
        <p>Communauté</p>
      </nav> */}
      <div className="sidebar">
        <div className="icons_sport">
          <img src={icon_yoga} alt="" />
          <img src={icon_swim} alt="" />
          <img src={icon_bike} alt="" />
          <img src={icon_muscu} alt="" />
        </div>
        <img
          src={copyright}
          alt=""
          style={{
            position: 'absolute',
            bottom: '-70px',
            left: '25px',
          }}
        />
      </div>
    </div>
  )
}

export default NavBar

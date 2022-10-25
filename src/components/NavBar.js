import logo from '../assets/logo.svg'
import icon_muscu from '../assets/icon_muscu.svg'
import icon_bike from '../assets/icon_bike.svg'
import icon_swim from '../assets/icon_swim.svg'
import icon_yoga from '../assets/icon_yoga.svg'

import '../styles/NavBar.css'

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="" />
        <a href="">Accueil</a>
        <a href="">Profil</a>
        <a href="">Réglage</a>
        <a href="">Communauté</a>
      </div>
      <div className="sidebar">
        <div className="icons_sport">
          <img src={icon_yoga} alt="" />
          <img src={icon_swim} alt="" />
          <img src={icon_bike} alt="" />
          <img src={icon_muscu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar

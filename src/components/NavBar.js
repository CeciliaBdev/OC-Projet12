import logo from '../assets/logo.svg'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <a href="">Accueil</a>
      <a href="">Profil</a>
      <a href="">Réglage</a>
      <a href="">Communauté</a>
    </div>
  )
}

export default NavBar

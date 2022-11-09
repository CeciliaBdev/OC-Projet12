import NavBar from '../components/NavBar.js'
import '../styles/Error.css'

/**
 * @name Error
 * @description error 404 page
 * @returns {JSX.Element}
 */
function Error() {
  return (
    <div>
      <NavBar />
      <div className="error_container ">
        <div className="content">
          <h1>Erreur 404</h1>
          <h2>Oups! La page que vous demandez n'existe pas</h2>
        </div>
      </div>
    </div>
  )
}
export default Error

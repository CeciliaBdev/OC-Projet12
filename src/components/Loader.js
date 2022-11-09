import '../styles/Loader.css'

/**
 * @name Loader
 * @description page loading when the datas are not arrived yet
 * @returns {JSX.Element}
 */
function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  )
}
export default Loader

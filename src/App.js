import { Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Home.js'
import Profil from './Pages/ProfilPage.js'
import '../src/styles/App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/user/:id" element={<Profil />} />
      </Routes>
    </div>
  )
}

export default App

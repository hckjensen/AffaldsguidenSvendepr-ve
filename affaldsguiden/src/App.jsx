import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import FrontPage from './pages/FrontPage'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/sorteringsguide" element={<FrontPage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

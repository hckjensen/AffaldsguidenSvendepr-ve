import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import FrontPage from './pages/FrontPage'
import SectionPage from './pages/SectionPage'
import CategoryList from './components/Sorting/CategoryList'
import SectionList from './components/Sorting/SectionList'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/sortering" element={<SectionPage />} >
            <Route index element={<SectionList />} />
            <Route path=":sectionName" element={<CategoryList />} />
          </Route>
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

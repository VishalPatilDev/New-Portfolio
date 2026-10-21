import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Certifications from './pages/Certifications'
import Resume from './pages/Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  )
}

export default App

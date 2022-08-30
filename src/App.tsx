import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar"
import { Projects } from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
        <Container className = "mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </Container>
      
    </>
  )
}

export default App

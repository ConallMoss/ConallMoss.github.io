import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
        <Container className = "mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      
    </>
  )
}

export default App

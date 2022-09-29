import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Navbar() {

    return (
        <NavbarBs sticky="top" className="shadow-sm mb-3" style={{backgroundColor:"#281d6b"}} >
            <Container style={{width:"auto", margin:"auto"}}>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} style={{fontSize:"25px", color:"white", marginRight:"20px", fontFamily:"monospace"}}>
                        Home
                    </Nav.Link>

                    <Nav.Link to="/about" as={NavLink} style={{fontSize:"25px", color:"white", marginRight:"20px", fontFamily:"monospace"}}>
                        About
                    </Nav.Link>

                    <Nav.Link to="/project" as={NavLink} style={{fontSize:"25px", color:"white", fontFamily:"monospace"}}>
                        Projects/Experience
                    </Nav.Link>

                
                    
                </Nav>
            </Container>
        </NavbarBs>
    )
}
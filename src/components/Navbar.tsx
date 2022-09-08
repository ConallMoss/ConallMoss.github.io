import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Navbar() {

    return (
        <NavbarBs sticky="top" className="shadow-sm mb-3" style={{backgroundColor:"lightsteelblue"}} >
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} style={{fontSize:"20px"}}>
                        Home
                    </Nav.Link>

                    <Nav.Link to="/about" as={NavLink} style={{fontSize:"20px"}}>
                        About
                    </Nav.Link>

                    <Nav.Link to="/project" as={NavLink} style={{fontSize:"20px"}}>
                        Projects/Experience
                    </Nav.Link>

                
                    
                </Nav>
            </Container>
        </NavbarBs>
    )
}
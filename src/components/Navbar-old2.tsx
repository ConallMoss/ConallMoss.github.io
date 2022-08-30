import { Container, Navbar as NavbarBS} from "react-bootstrap";

export function Navbar() {
    return (
        <NavbarBS className="bg-white shadow-sm mb-3" sticky="top">
            <Container>Nav</Container>
        </NavbarBS>
    )
}
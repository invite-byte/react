import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Photo2 from "./assets/logo.jpeg"
import {Link} from "react-router-dom"
function Navsection() {
  return (
    <div >
    <Navbar collapseOnSelect expand="lg" className="fixed-top" style={{background:"rgb(251, 250, 250)"}}>
      <Container>
        <Navbar.Brand href="#home"><img src={Photo2} height="50px" width='200px'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="rides">Rides</Nav.Link>
            <Nav.Link as={Link} to="about">About us</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            <button style={{backgroundColor:"rgb(133, 255, 85)",}}><Nav.Link as={Link} to="ticket">Booking Ticket</Nav.Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navsection;


 
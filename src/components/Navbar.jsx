import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
function NavbarApp() {
    return (
        <div>
           <Navbar bg="warning" expand="lg">
  <Container>
    <Navbar.Brand href="https://www.linkedin.com/in/balivadasairohit/" target="_blank">Rohit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       <Nav.Link href="https://drive.google.com/drive/folders/1_kEmQTyQslJyUV7KBqK1hh8Mr4NTkhrq"  target="_blank">Experiences</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1irUJG_005LCJdgBHNLAHbMuN8wpURk7M/view?usp=sharing"  target="_blank">Resume</Nav.Link> 
        
        <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
   
          <NavDropdown.Item href="https://video-call-meta.web.app/" target="_blank">VIDEO CONFERENCING APPLICATION</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://right-events.herokuapp.com/" target="_blank">EVENT MANAGEMENT SYSTEM</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://nimble-project.netlify.app/" target="_blank">ECOMMERCE WEBSITE</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://sportsrohit.herokuapp.com/"target="_blank">SportsBooking</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarApp

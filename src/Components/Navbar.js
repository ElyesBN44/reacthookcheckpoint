import React from "react"
import { Navbar, Nav} from "react-bootstrap";

export default function Navbarr() {
  return (
  
      <Navbar bg="dark" data-bs-theme="dark">

      <Navbar.Brand href="#home">Cinéma</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Movies</Nav.Link>
        <Nav.Link href="#features">Shows</Nav.Link>
        <Nav.Link href="#pricing">ShortMovies</Nav.Link>
      </Nav>
      </Navbar>
      )}
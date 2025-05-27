'use client';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import './pokeNavBarComp.css'; 

export default function PokeNavBarComp() {
  return (
    <Navbar className="pokebar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="pokebar-brand">
          🔍 Pokédex
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="pokebar-link">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}



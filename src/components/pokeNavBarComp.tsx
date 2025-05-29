'use client';

import { usePathname } from 'next/navigation';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import './pokeNavBarComp.css';

type Props = {
  types?: string[];
  selectedType?: string;
  onTypeChange?: (type: string) => void;
};

export default function PokeNavBarComp({
  types = [],
  selectedType = '',
  onTypeChange = () => {},
}: Props) {
  const pathname = usePathname();

  return (
    <Navbar className="pokebar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="pokebar-brand">
          🔍 Pokédex
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="pokebar-link">
            Home
          </Nav.Link>

          {/* only show the type-filter when on “/” */}
          {pathname === '/' && (
            <NavDropdown
              title={selectedType === '' ? 'All Types' : selectedType}
              id="type-filter-dropdown"
              className="pokebar-link"
            >
              <NavDropdown.Item onClick={() => onTypeChange('')}>
                All Types
              </NavDropdown.Item>
              {types.map((type) => (
                <NavDropdown.Item
                  key={type}
                  active={type === selectedType}
                  onClick={() => onTypeChange(type)}
                >
                  {type}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

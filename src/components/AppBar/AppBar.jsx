import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/tranding', text: 'Популярні' },
  { href: '/search', text: 'Пошук' },
];

export default function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Головна
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navItems.map(({ href, text }) => (
              <Nav.Link key={href} as={NavLink} to={href}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <ButtonGroup aria-label="Basic example">
              <Button variant="light">light</Button>
              <Button variant="outline-light">dark</Button>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

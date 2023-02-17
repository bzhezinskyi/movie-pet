import { Container, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Фільми' },
  { href: '/movie', text: 'Пошук' },
];

export default function Layout() {
  return (
    <Container>
      <header>
        <Nav variant="tabs">
          {navItems.map(({ href, text }) => (
            <Nav.Item key={href}>
              <Nav.Link as={NavLink} to={href}>
                {text}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

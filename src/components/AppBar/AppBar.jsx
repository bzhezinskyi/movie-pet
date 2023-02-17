import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectThema } from 'redux/thema/thema.selector';
import { queryThemaValue } from 'redux/thema/thema.slise';

const navItems = [
  { href: '/tranding', text: 'Популярні' },
  { href: '/search', text: 'Пошук' },
];

export default function AppBar() {
  const thema = useSelector(selectThema);
  const dispatch = useDispatch();

  const handleThema = value => {
    dispatch(queryThemaValue(value));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg={thema === 'dark' ? 'dark' : 'primary'}
      variant="dark"
    >
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
              <Button
                variant="outline-light"
                onClick={() => handleThema('light')}
              >
                light
              </Button>
              <Button variant="light" onClick={() => handleThema('dark')}>
                dark
              </Button>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

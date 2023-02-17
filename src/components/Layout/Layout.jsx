import AppBar from 'components/AppBar/AppBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

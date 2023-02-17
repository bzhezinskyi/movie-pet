import AppBar from 'components/AppBar/AppBar';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectThema } from 'redux/thema/thema.selector';

export default function Layout() {
  const thema = useSelector(selectThema);

  return (
    <>
      <header>
        <AppBar />
      </header>
      <main
        style={{
          backgroundColor: thema === 'dark' ? '#343a40' : '#fff',
          minHeight: '100p',
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

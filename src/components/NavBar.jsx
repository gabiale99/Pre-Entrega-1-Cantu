import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" className="container-fluid" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GabiShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Turismos</Nav.Link>
            <Nav.Link href="#features">Monoplasas</Nav.Link>
            <Nav.Link href="#pricing">Circuitos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

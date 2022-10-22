import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from './CarWidget';
import './navBar.css'


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">G-SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes Somos?</Nav.Link>
            <NavDropdown title="Categorias Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Almacen
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Libreria</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Ver Lista completa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='ContIconCarrito'>
        <CarWidget/>
          </div>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
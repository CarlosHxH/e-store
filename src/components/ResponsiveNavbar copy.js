import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ResponsiveNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {setExpanded(!expanded)};

  return (
    <Navbar className='fixed-top' expanded={expanded} expand="lg" bg="primary" variant="dark">
      <Image src={'/icon.jpg'} alt={'Aguas&Cia'} className={'rounded-pill ml-2 p-1'} width={50} height={50}/>
      <Navbar.Brand href="/" className='ml-4'>
        E-Store
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-4">
          <Nav.Link href="/">Página Inicial</Nav.Link>
          <Nav.Link href="/produtos">Produtos</Nav.Link>
          <NavDropdown title="Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item href="/servico-1">Serviço 1</NavDropdown.Item>
            <NavDropdown.Item href="/servico-2">Serviço 2</NavDropdown.Item>
            <NavDropdown.Item href="/servico-3">Serviço 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <NavDropdown className='mr-2 ml-auto align-items-center' title={
        <Image className='p-2' roundedCircle thumbnail src={'/user.jpg'} alt={'user'} width={40} height={40} />
      } drop={'down'} id="user-nav-dropdown" align="end">
        <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sair">Sair</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
    </Navbar>
  );
};

export default ResponsiveNavbar;

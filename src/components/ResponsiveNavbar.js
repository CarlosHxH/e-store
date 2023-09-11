"use client"
import React, { useState } from 'react';
import Auth from "@/components/Auth";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { BiLogoWhatsapp } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import { signOut, useSession } from "next-auth/react";

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">E-Store</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Produtos</Nav.Link>
            <Nav.Link href="#pricing">Categorias</Nav.Link>
            <NavDropdown title="Atendimento" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Endereço</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sobre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://wa.me/5565992969922">
                <BiLogoWhatsapp className={"inline text-success"} /> Whatsapp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {user ? (
            <Nav>
              <NavDropdown style={{ height: "2rem" }} title={
                  <Image roundedCircle thumbnail src={user?.image||"/user.jpg"} alt={"user"} width={40} height={40} />
                } drop={"down"} id="user-nav-dropdown" align="end">
                <NavDropdown.Item href="/profile">{user?.name}</NavDropdown.Item>
                <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>signOut()}>Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={()=>setOpen(true)}>Login | Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      <Auth open={open} onClose={()=>setOpen(false)}/>
    </Navbar>
  );
}

export default ResponsiveNavbar;

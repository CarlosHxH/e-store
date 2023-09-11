"use client"
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { useCart } from "react-use-cart";
import Link from "next/link";

import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme('light')

  const toggle = ()=>{setTheme(theme=="light"?"dark":"light"),console.log(theme)}

  const { isEmpty, totalItems } = useCart();

  const CustomLink = (props) => (
    <Link {...props} className={`nav-link ${theme ? "text-dark-primary" : "text-light-primary"} text-muted`}/>
  )

  return (
    <Navbar collapseOnSelect expand="md" variant={theme ? "dark" : "light"}
      className={(theme=="light") ? "bg-light-black border-bottom" : "bg-light border-bottom"}
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container>
        <Link href="/" className={`no-underline`}>
          <Navbar.Brand className={`nav-link font-bold ${theme=='dark' ? "text-dark" : "text-primary"}`}>
            <b>E-commerce</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink href="login">
              Entrar
            </CustomLink>
            <Nav.Link className={theme=='dark' ? "text-dark-primary" : "text-light-primary"} onClick={()=>toggle()}>
              {theme==='light' ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
              <button onClick={() => setTheme('light')}>Light</button>
              <button onClick={() => setTheme('dark')}>Dark</button>
            <CustomLink href="/cart" className={`d-flex align-items-center`}>
              <BiCart size="2rem" />
              {!isEmpty && ( <span style={{ position: "relative", left: "-21px", top: "-18px" }} > {totalItems} </span>)}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>Carrinho</span>
            </CustomLink>
            <CustomLink href="profile">
              <VscAccount size="1.8rem" />
              Minha conta
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

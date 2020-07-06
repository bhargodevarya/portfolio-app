import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

const RBNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" id="myNavbar">
      <Navbar.Brand href="/"><img src="/logo_lpb_black_small.png"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="myNavItem">
          <Nav.Link href="/" id="myNavItem">Home</Nav.Link>
          <Nav.Link href="contact" id= "myNavItem">Contact</Nav.Link>
          <Nav.Link href="about" id= "myNavItem">About</Nav.Link>
          <Nav.Link href="book" id= "myNavItem">Books</Nav.Link>
          <Nav.Link href="portfolio" id= "myNavItem">Portfolio</Nav.Link>
          <Nav.Link href="this" id= "myNavItem">This</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RBNavBar;

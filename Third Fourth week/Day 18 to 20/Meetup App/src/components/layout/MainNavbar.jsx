import React from "react";
import { NavLink as Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import 'main.css'
import classes from "./MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand Link="home" className={classes.logo}>Meetup App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.link}>
            <Nav.Link className={classes.link} as={Link} to="/">
              All Meetup
            </Nav.Link>
            <Nav.Link className={classes.link} as={Link} to="/favourites">
              Favourites
            </Nav.Link>
            <Nav.Link className={classes.link} as={Link} to="/new-meetup">
              New Meetup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MainNavbar;

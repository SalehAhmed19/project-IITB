import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <div>
      <div className="p-2 d-md-block d-none">
        <img
          className="d-block mx-auto"
          style={{ width: "150px" }}
          src={logo}
          alt=""
        />
      </div>
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img style={{ width: "50px" }} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <NavDropdown title="Technology" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/diploma-in-engineering">
                    Diploma in Engineering
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/diploma-in-textile">
                    Diploma in Textile
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/teachers">
                  Teachers
                </Nav.Link>
                <Nav.Link as={Link} to="/academic">
                  Academic
                </Nav.Link>
                <Nav.Link as={Link} to="/admission">
                  Admission
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;

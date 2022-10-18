import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        navbar.style.boxShadow = "0px 0px 15px 0px rgba(0, 0, 0, 0.25)";
      } else {
        navbar.style.boxShadow = "none";
      }
    });
  }, []);

  return (
    <Navbar
      bg="white"
      variant="light"
      expand="lg"
      fixed="top"
      expanded={toggle}
    >
      <Container>
        <Navbar.Brand href="/" className="logo">
          Brand
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="menu"
          onClick={() => {
            setToggle(toggle ? false : true);
          }}
        />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            {["Home", "Features", "Pricing", "About Us", "Contact Us"].map(
              (link, index) => (
                <NavLink
                  key={link + index}
                  onClick={() => {
                    setToggle(false);
                  }}
                  to={
                    link === "Home"
                      ? "/"
                      : `${link.toLowerCase().replace(" ", "-")}`
                  }
                  className="nav-link"
                  end={link === "Home" ? true : false}
                >
                  {link}
                </NavLink>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

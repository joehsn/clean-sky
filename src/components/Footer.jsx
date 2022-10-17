import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="page-footer dark">
      <Container>
        <Row>
          {[
            { h5: "Get started", l1: "Home", l2: "Sign up", l3: "Downloads" },
            {
              h5: "About us",
              l1: "Company Information",
              l2: "Contact us",
              l3: "Reviews",
            },
            {
              h5: "Support",
              l1: "FAQ",
              l2: "Help desk",
              l3: "Forums",
            },
            {
              h5: "Legal",
              l1: "Terms of Service",
              l2: "Terms of Use",
              l3: "Privacy Policy",
            },
          ].map((list, index) => (
            <Col sm={3} key={index}>
              <h5>{list.h5}</h5>
              <ul>
                <li>
                  <a href={`${list.l1.toLowerCase().replace(" ", "-")}`}>
                    {list.l1}
                  </a>
                </li>
                <li>
                  <a href={`${list.l2.toLowerCase().replace(" ", "-")}`}>
                    {list.l2}
                  </a>
                </li>
                <li>
                  <a href={`${list.l3.toLowerCase().replace(" ", "-")}`}>
                    {list.l3}
                  </a>
                </li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="footer-copyright">
        <p>© 2022 Copyright Text</p>
      </div>
    </footer>
  );
}

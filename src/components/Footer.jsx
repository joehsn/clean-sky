import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

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
            <Col sm={3} key={index} className="d-none d-md-block">
              <h5>{list.h5}</h5>
              <ul>
                <li>
                  <a
                    href={`${
                      list.l1 === "Home"
                        ? "/"
                        : list.l1.toLowerCase().replace(/ /g, "-")
                    }`}
                  >
                    {list.l1}
                  </a>
                </li>
                <li>
                  <a href={`${list.l2.toLowerCase().replace(/ /g, "-")}`}>
                    {list.l2}
                  </a>
                </li>
                <li>
                  <a href={`${list.l3.toLowerCase().replace(/ /g, "-")}`}>
                    {list.l3}
                  </a>
                </li>
              </ul>
            </Col>
          ))}
          <Accordion flush className="d-block d-md-none">
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
              <Accordion.Item
                eventKey={index}
                key={index}
                className="text-start bg-dark"
              >
                <Accordion.Header className="text-start bg-dark">
                  {list.h5}
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <a
                        href={`${
                          list.l1 === "Home"
                            ? "/"
                            : list.l1.toLowerCase().replace(" ", "-")
                        }`}
                        className="text-light d-block"
                      >
                        {list.l1}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${list.l2.toLowerCase().replace(" ", "-")}`}
                        className="text-light d-block"
                      >
                        {list.l2}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${list.l3.toLowerCase().replace(/' '/g, "-")}`}
                        className="text-light d-block"
                      >
                        {list.l3}
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Row>
      </Container>
      <div className="footer-copyright">
        <p>© 2022 Copyright Text</p>
      </div>
    </footer>
  );
}

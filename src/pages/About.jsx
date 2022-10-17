import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { avatar1, avatar2, avatar3 } from "../assets";
import { Footer } from "../components";

export default function About() {
  return (
    <>
      <section className="clean-block about-us">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <Row className="justify-content-center">
            {[
              {
                img: avatar1,
                name: "John Smith",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
              {
                img: avatar2,
                name: "Robert Downturn",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
              {
                img: avatar3,
                name: "Ally Sanders",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Z",
              },
            ].map((person, index) => (
              <Col sm={6} lg={4} key={index + person}>
                <Card className="text-center clean-card">
                  <Card.Img src={person.img} alt={`${person.name}'s selfie`} />
                  <Card.Body className="info">
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>{person.brief}</Card.Text>
                    <div className="icons">
                      <a
                        href={`facebook-${person.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <i className="icon-social-facebook"></i>
                      </a>
                      <a
                        href={`instagram-${person.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <i className="icon-social-instagram"></i>
                      </a>
                      <a
                        href={`twitter-${person.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <i className="icon-social-twitter"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

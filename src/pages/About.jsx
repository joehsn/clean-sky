import React from "react";
import { Container, Row } from "react-bootstrap";
import { Footer, Team } from "../components";

export default function About() {
  return (
    <>
      <section className="block about-us page">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Row className="justify-content-center">
            <Team />
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

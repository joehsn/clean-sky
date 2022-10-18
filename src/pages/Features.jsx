import React from "react";
import { Container, Row } from "react-bootstrap";
import { Features, Footer } from "../components";

export default function FeaturesPage() {
  return (
    <>
      <section className="block features page">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Row className="justify-content-center">
            <Features />
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

import { scenery1, scenery4, scenery5, scenery6 } from "../assets";
import { Features, Footer, Hero, Team } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="block clean-info dark">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">Info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                className="img-thumbnail"
                src={scenery5}
                alt="img-thumbnail"
              />
            </Col>
            <Col md={6}>
              <h3>Lorem impsum dolor sit amet</h3>
              <div className="getting-started-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <Button variant="outline-primary" size="lg">
                Join Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="block features">
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
      <section className="block slider dark">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">Slider</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Carousel interval={1750} pause={false}>
            <Carousel.Item>
              <img className="w-100 d-block" src={scenery1} alt="Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 d-block" src={scenery4} alt="Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 d-block" src={scenery6} alt="Slide" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <section className="block about-us">
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

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components";

export default function Pricing() {
  return (
    <>
      <section className="block clean-pricing dark page pricing-table-page">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">Pricing Table</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Row className="rjustify-content-center">
            {[
              {
                name: "Basic",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                support: "No",
                duration: 30,
                storage: 10,
                price: 25,
              },
              {
                name: "pro",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                support: "Yes",
                duration: 60,
                storage: 50,
                price: 50,
              },
              {
                name: "PREMIUM",
                brief:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                support: "Yes",
                duration: 120,
                storage: 150,
                price: 150,
              },
            ].map((plan, index) => (
              <Col md={5} lg={4} key={index}>
                <div className="clean-pricing-item">
                  {plan.name === "pro" && (
                    <div className="ribbon">
                      <span>Best Value</span>
                    </div>
                  )}
                  <div className="heading">
                    <h3>{plan.name.toUpperCase()}</h3>
                  </div>
                  <p>{plan.brief}</p>
                  <div className="features">
                    <h4 className="d-flex justify-content-between align-items-center">
                      <span className="feature">Full Support:</span>
                      <span>{plan.support}</span>
                    </h4>
                    <h4 className="d-flex justify-content-between align-items-center">
                      <span className="feature">Duration:</span>
                      <span>{`${plan.duration} Days`}</span>
                    </h4>
                    <h4 className="d-flex justify-content-between align-items-center">
                      <span className="feature">Storage:</span>
                      <span>{`${plan.storage}GB`}</span>
                    </h4>
                  </div>
                  <div className="price">
                    <h4>{`$${plan.price}`}</h4>
                  </div>
                  <Button variant="outline-primary" className="d-block w-100">
                    Subscribe now!
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

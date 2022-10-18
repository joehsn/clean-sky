import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Forbidden() {
  return (
    <>
      <Container className="page">
        <Row
          style={{ minHeight: "80vh" }}
          className="flex-column justify-content-center align-items-center text-center"
        >
          <Col xs={12} className="mb-5">
            <h2>Page Not Found</h2>
          </Col>
          <Col xs={12} style={{ width: "100%" }}>
            <Button size="lg" variant="primary" href="/">
              Home &gt;
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

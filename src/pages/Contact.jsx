import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../components";

export default function Contact() {
  return (
    <>
      <section className="block clean-form dark page contact-us-page">
        <Container>
          <div className="block-heading">
            <h2 className="text-info">Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Form className="p-3 p-md-5">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Example: work" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message goes here..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3 w-100">
              Send
            </Button>
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
}

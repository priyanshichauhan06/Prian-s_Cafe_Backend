import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-info">
            <h3>Visit Us</h3>
            <p>
              Prian's Restaurant<br />
              123 Main Street<br />
              City, State ZIP
            </p>
            <h3>Call Us</h3>
            <p>Phone: (123) 456-7890</p>
            <h3>Email Us</h3>
            <p>Email: info@priansrestaurant.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
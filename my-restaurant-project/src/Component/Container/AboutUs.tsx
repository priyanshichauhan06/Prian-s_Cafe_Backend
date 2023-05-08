import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col md={6} className="about-us-content">
            <h2>About Us</h2>
            <p>
              Welcome to Prian's Restaurant!<br/> We are a premier dining
              establishment offering a wide range of delectable dishes and
              culinary experiences.
            </p>
            <p>
              Our restaurant prides itself on using only the freshest
              ingredients sourced from local farmers and suppliers. Our expert
              chefs craft each dish with precision and passion, ensuring a
              memorable dining experience for our guests.
            </p>
            <p>
              Whether you're looking for a cozy spot for a romantic dinner, a
              venue for a special celebration, or a place to indulge in
              mouthwatering cuisine, Prian's Restaurant is the perfect
              choice. We provide exceptional service and strive to exceed your
              expectations.
            </p>
          </Col>
          <Col md={6} className="about-us-image">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwY2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
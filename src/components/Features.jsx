import React from "react";
import { Col } from "react-bootstrap";

export default function Features() {
  return (
    <>
      {[
        { icon: "star", name: "Bootstrap 5" },
        { icon: "pencil", name: "Customizable" },
        { icon: "screen-smartphone", name: "Responsive" },
        { icon: "refresh", name: "All Browser Compatibility" },
      ].map((feature, index) => (
        <Col key={index} md={5} className="feature-box">
          <i className={`icon-${feature.icon} icon`}></i>
          <h4>{feature.name}</h4>
          <span className="d-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </span>
        </Col>
      ))}
    </>
  );
}

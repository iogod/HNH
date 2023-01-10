import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ServicesCard from "../ServicesCard/ServicesCard";
function Services() {
  return (
    <Container className="mgsmall">
      <Row>
        <ServicesCard title="Package A" />
        <ServicesCard title="Package B" />
        <ServicesCard title="Package C" />
      </Row>
    </Container>
  );
}

export default Services;

import "./servicescard.scss";
import React from "react";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

function ServicesCard({ title }) {
  return (
    <Col id="offers" className="justify-content-right align-items-right">
      <div className="servicecard">
        <div className="listBlock">
          <ul className="servicecard__list">
            <li>Chuki fills in</li>

            <li>b</li>

            <li>c</li>
            <li>d</li>

            <span className="servicecard__btn">Submit Inquiry</span>
          </ul>
        </div>
        <div className="titleBlock">{title}</div>
      </div>
    </Col>
  );
}

export default ServicesCard;

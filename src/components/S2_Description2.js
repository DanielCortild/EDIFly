import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default () => {
  return(
    <section className="section section-gray text-center" id="description">
      <h2 className="title">Open Source Technology for Secure Aviation Messaging</h2>
      <Container>
        <Row>
          <Col md={6}>
          </Col>
          <Col md={6}>
            <h4>Replacing private legacy networks and point-to-point links</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>End-to-end encryption</h4>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          </Col>
          <Col md={6}>
            <h4>Seamless integration of industry standards (IATA, UN-EDIFACT)</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
import React from 'react';
import {AvForm, AvInput, AvField} from 'availity-reactstrap-validation';
import {Button, Container, Row, Col} from "reactstrap";
import {postMessage} from '../api/';

export default () => {  
  const [messageSent, setMessageSent] = React.useState(false);
  const handleValidSubmit = (_, values) => {
    values.concerning = values.concerning ? values.concerning : "Offers, New Business, Partnerships";
    postMessage(values);
    setMessageSent(true);
  }

  return (
    <section className="section section-light" id="contact">
      <h2 className="text-center">Get in touch?</h2>
      {!messageSent ? 
      <Container className="px-3">
        <Row>
          <Col className="mx-auto" md="8">
            <AvForm className="contact-form" onValidSubmit={handleValidSubmit}>
              <Row>
                <Col lg="6">
                  <label>Name</label>
                  <AvInput placeholder="John Doe" type="text" name="name" required />
                </Col>
                <Col lg="6">
                  <label>Company</label>
                  <AvInput placeholder="EDIfly" type="text" name="company" />
                </Col>
                <Col lg="6">
                  <label>Email Address</label>
                  <AvInput placeholder="john.doe@example.com" type="email" name="email" required />
                </Col>
                <Col lg="6">
                  <label>Concerning</label>
                  <AvField type="select" name="concerning">
                    <option>Offers, New Business, Partnerships</option>
                    <option>Media Enquiries</option>
                    <option>Support/Customer Service Enquiries</option>
                  </AvField>
                </Col>
              </Row>
              <label>Message</label>
              <AvInput placeholder="Message" type="textarea" rows="4" name="message" required />
              <Row className="justify-content-center">
                <Col xs="6" md="4">
                  <Button color="success" size="lg" type="submit">Send Message</Button>
                </Col>
              </Row>
            </AvForm>
          </Col>
        </Row>
      </Container>
      : 
      <Container>
        <Row className="justify-content-center">
          <h3 style={{color: 'green'}}>Message Sent</h3>
        </Row>  
      </Container>}
    </section>
  )
}

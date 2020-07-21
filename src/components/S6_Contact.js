import React from 'react';
import {AvForm, AvInput} from 'availity-reactstrap-validation';
import {Button, Container, Row, Col} from "reactstrap";
import {postMessage} from '../api/';

const TextInput = ({label, icon, ...other}) => {
  return(
    <>
      <label>{label}</label>
      <AvInput {...other} />
    </>
  )
}

export default () => {  
  const [messageSent, setMessageSent] = React.useState(false);
  const handleValidSubmit = (event, values) => {
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
                <Col lg="4">
                  <TextInput label="Name" placeholder="John Doe" type="text" name="name" />
                </Col>
                <Col lg="4">
                  <TextInput label="Company" placeholder="EDIfly" type="text" name="company" />
                </Col>
                <Col lg="4">
                  <TextInput label="Email" placeholder="john.doe@example.com" type="email" name="email" />
                </Col>
              </Row>
              <TextInput label="Message" placeholder="Message" type="textarea" rows="4" name="message" />
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

import React from 'react';

import {Button, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col} from "reactstrap";

const TextInput = ({label, icon, ...other}) => {
  return(
    <>
      <label>{label}</label>
      {icon ? <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {icon}
          </InputGroupText>
        </InputGroupAddon>
        <Input {...other} />
      </InputGroup>
      : <Input {...other} />}
    </>
  )
}

export default () => {
  return (
    <section className="section section-light" id="contact">
      <h2 className="text-center">Get in touch?</h2>
      <Container className="px-3">
        <Row>
          <Col className="mx-auto" md="8">
            <Form className="contact-form">
              <Row>
                <Col lg="6">
                  <TextInput label="Name" icon="" placeholder="Name" type="text" />
                </Col>
                <Col lg="6">
                  <TextInput label="Email" icon="" placeholder="email@mail.com" type="email" />
                </Col>
              </Row>
              <TextInput label="Message" placeholder="Message" type="textarea" rows="4" />
              <Row className="justify-content-center">
                <Col xs="6" md="4">
                  <Button color="success" size="lg">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

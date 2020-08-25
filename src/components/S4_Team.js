import React from 'react'
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";

const TeamMembers = {
  richard: {
    name: 'Richard Stokes',
    role: 'Chief Executive Officer',
    desc: 'A veteran in technology and aviation Richard has hands-on experience in bringing software and services to the global aviation community. He held senior positions at SITA, ICL etc.',
    img_url: 'images/team/richard.jpeg'
  },
  ingo: {
    name: 'Ingo Roessler',
    role: 'Chief Commercial Officer',
    desc: 'Ingo has ample experience in the air cargo arena. Helped shaping the business by supporting innovative developments like Cargospot, Optiontown, Aviaso etc.. Held senior positions at Lufthansa, Chapman Freeborn, Etihad Airways, Royal Jordanian Airlines, etc..',
    img_url: 'images/team/ingo.jpeg'
  },
  anders: {
    name: 'Anders Jensen',
    role: 'Chief Technology Officier',
    desc: 'Strong academic background in communication protocols and modern cryptography. Closely involved in the development of 802.11 wireless standards as well as communication protocols for automatic data capture. Held senior positions at Symbol Technologies, Cargolux, CHAMP Cargo Systems.',
    img_url: 'images/team/anders.jpg'
  }
}

const TeamMember = ({name, role, desc, img_url}) => {
  return (
    <Col md="4">
      <Card className="card-profile card-plain">
        <div className="card-avatar"><img alt="..." src={img_url} /></div>
        <CardBody>
          <div className="author">
            <CardTitle tag="h4">{name}</CardTitle>
            <h6 className="card-category">{role}</h6>
          </div>
          <p className="card-description text-center">{desc}</p>
        </CardBody>
      </Card>
    </Col>
  )
}

export default () => {
  return(
    <section className="section section-dark text-center" id="team">
      <Container>
        <h2 className="title">Management Team</h2>
        <Row>
          {Object.keys(TeamMembers).map(key => <TeamMember key={key} {...TeamMembers[key]}/>)}
        </Row>
      </Container>
    </section>
  )
}

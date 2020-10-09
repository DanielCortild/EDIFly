import React from 'react'
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import {SiLinkedin} from 'react-icons/si';

const TeamMembers = {
  richard: {
    name: 'Richard Stokes',
    role: 'Chief Executive Officer',
    desc: 'A veteran in technology & aviation Richard has hands-on experience in bringing software & services to the global aviation community. Senior positions at SITA, ICL, Travel Innovation Partners, etc.',
    img_url: 'images/team/richard.jpeg'
  },
  ingo: {
    name: 'Ingo Roessler',
    role: 'Chief Commercial Officer',
    desc: 'Educated in Lufthansa with a solid background in air cargo & system design. Helped shaping businesses by supporting innovative developments like Cargospot, Optiontown, Aviaso etc. Senior positions at Chapman Freeborn, Etihad Airways, Royal Jordanian Airlines, etc.',
    img_url: 'images/team/ingo.jpeg',
    linkedin: 'https://www.linkedin.com/in/ingo-roessler-1582961a/'
  },
  anders: {
    name: 'Anders Jensen',
    role: 'Chief Technology Officer',
    desc: 'Strong academic upbringing in communication protocols & modern cryptography. Closely involved in the development of 802.11 wireless standards as well as communication protocols for automatic data capture. Senior positions at Symbol Technologies, Cargolux Int’l Airlines, CHAMP Cargo Systems, & multi-national organizations.',
    img_url: 'images/team/anders.jpg'
  }
}

const TeamMember = ({name, role, desc, img_url, linkedin}) => {
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
          <br />
          {linkedin ? <a href={linkedin} target="_blank"><SiLinkedin size={24} color="#AAA"></SiLinkedin></a> : <></>}
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

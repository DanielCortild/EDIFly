import React from 'react';
import {Container, Row, Col} from "reactstrap";
import {FiMail} from 'react-icons/fi';
import {BsPersonFill} from 'react-icons/bs';
import {GoCircuitBoard} from 'react-icons/go';
import {FaMoneyBillWaveAlt} from 'react-icons/fa';

const DescriptionItem = ({icon, title, elements}) => {
  return (
    <Col xs="12" sm="12" md="6" lg="3">
      <div className="info">
        <div className="icon icon-info">
          {icon}
        </div>
        <div className="description">
          <h4 className="info-title">{title}</h4>
          <ul className="list-group mt-3 px-4 px-md-1">
            {elements.map(el => <li className="list-group-item text-muted" key={el}>{el}</li>)}
          </ul>
        </div>
      </div>
    </Col>
  )
}

export default () => {
  return (
    <section className="section text-center" id="whyedifly">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" xs="12" sm="10" md="8">
            <h2 className="title">Your Plan B to Legacy Aviation Messaging</h2>
            <h5 className="description text-muted">
            EDIfly is the signature tool of Innovative Software for seamless integrated messaging in aviation &amp; logistics since 2010.
            <br /> <br />
            This high-performance message broker enables airlines, ground handlers, passenger + cargo system providers, trucking, authorities, etc. to securely exchange operational messages without volume-related charging + complete tracking.
            <br /> <br />
            EDIfly provides banking-like data security, superior rule-based message routing + monitoring based on IATA standards – with up to 75% cost reduction. Custom-tailored solutions have delivered significant value + unrivalled reliability of service in multiple sectors of the aviation industry the world over.
            <br /> <br />
            No changes to applications. Use existing addresses.
            <br /> <br />
            <b>Join a fast growing community. Free trials.</b>
            </h5>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <DescriptionItem icon={<FiMail />} title="Message Broker"
            elements={["Highly Scalable from 10-2000 Messages per second", 
                        "Standard Software and Hardware components",
                        "PCI/DSS and GDPR compliant",
                        "End-to-end encryption",
                        "Rule-based routing, smart re-broadcast of messages"]} />
          <DescriptionItem icon={<FaMoneyBillWaveAlt />} title="75% Savings"
            elements={["Unlimited free exchanges between EDIfly users",
                      "Lean infrastructure, high-availability switching without mainframe computing",
                      "Replace direct links through self-managed EDIfly technology",
                      "Works for the entire aviation industry and partners"]} />
          <DescriptionItem icon={<BsPersonFill />} title="Management"
            elements={["Seamless integration based on existing IATA standards and addresses",
                      "Unique Concept to secure Data and Data Exchanges",
                      "EDIfly team provides free analyses of traffic pattern",
                      "Distributed ressources create resilliant infrastructure"]} />
          <DescriptionItem icon={<GoCircuitBoard />} title="Replaces Legacy!"
            elements={["Free Type B, Type X Exchanges",
                      "Discard proprietary Type B gateways and clients",
                      "Handles current and future messaging standards",
                      "Connect partners without legacy circuits"]} />
        </Row>
      </Container>
    </section>
  )
}

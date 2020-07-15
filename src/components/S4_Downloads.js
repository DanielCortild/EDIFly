import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

import $ from 'jquery';
import Axios from 'axios';
import download from 'downloadjs';

const DownloadModal = (props) => {
  const {title, value, toggle} = props;

  // const title_link = title.replace(/\s/g, '').toLowerCase();

  // const getPB = async () => {
  //   files.forEach(({_id, displayname, contentType}) => {
  //     const link = `${window.$serverDomain}/${title_link}/show/${_id}`;
  //     console.log(link);
  //     var XML = new XMLHttpRequest();
  //     XML.open( "GET", link , true);
  //     XML.responseType = "blob";
  //     XML.onload = e => download(e.target.response, displayname, contentType);
  //     XML.send();
  //   }); 
  // };

  return (
    <div>
      <Modal isOpen={value} toggle={toggle}>

        <div className="modal-header">
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h5 className="modal-title text-center">{title}</h5>
        </div>

        <div className="modal-body">
          To be able to download this file, please indicate your email address
          <Input className="mt-2" type="email" placeholder="example@email.com" />
        </div>

        <div className="modal-footer p-2">
          <Button color="primary" onClick={toggle}>Download</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </div>

      </Modal>
    </div>
  )
}

export default () => {

  const [modalPB, setModalPB] = useState(false);
  const togglePB = () => setModalPB(!modalPB);

  const [modalT, setModalT] = useState(false);
  const toggleT = () => setModalT(!modalT);

  const [modalWP, setModalWP] = useState(false);
  const toggleWP = () => setModalWP(!modalWP);

  return (
    <section className="section section-gray" id="download">

      <DownloadModal value={modalPB} toggle={togglePB} title="Project Briefing"/>
      <DownloadModal value={modalT} toggle={toggleT} title="Topologies"/>
      <DownloadModal value={modalWP} toggle={toggleWP} title="White Paper"/>



      <Container className="text-center">
        <h2 className="title mb-5">White Papers & Project Briefing</h2>
        <Row>
          <Col xs={12} md={4}>
            <h4>Project Briefing</h4> <br />
            <div className="my-button" onClick={togglePB}>Product Briefing</div>
          </Col>
          <Col xs={12} md={{size: 7, offset: 1}}>
            <h4>White Papers</h4> <br />
            <Row>
              <Col xs={12} md={6}><div className="my-button" onClick={toggleWP}>White Paper #1</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggleWP}>White Paper #2</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggleWP}>White Paper #3</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggleWP}>White Paper #4</div></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

import Axios from 'axios';
import download from 'downloadjs';

const  DownloadModal = (props) => {

  const [multi, setMulti] = useState();
  const [files, setFiles] = useState([]);

  const {title, toggle, value} = props;
  const title_link = title.replace(/\s/g, '').toLowerCase();

  const getPB = async () => {
    files.forEach(({_id, displayname, contentType}) => {
      const link = `${window.$serverDomain}/${title_link}/show/${_id}`;
      console.log(link);
      var XML = new XMLHttpRequest();
      XML.open( "GET", link , true);
      XML.responseType = "blob";
      XML.onload = e => download(e.target.response, displayname, contentType);
      XML.send();
    }); 
  };

  useEffect(title_link => {
    const fetchStatus = async () => {
      let {data: {status, files}} = await Axios.get(`${window.$serverDomain}/${title_link}/info`);
      setMulti(status.multi);
      setFiles(files);
    }
    fetchStatus();
  }, [])

  return (
    <div>
      <Modal isOpen={value} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>

        <ModalBody>

          { multi ? 
          <React.Fragment>
          Select the files you are intested in
            <Row className="ml-3 p-2">

              {files.map(({_id, displayname}) => (
                  <Col xs={12} key={_id}><Input type="checkbox" />{' '}{displayname}</Col>
                ))}
            </Row>
          </React.Fragment>
           : ''}
          

          To be able to download {multi ? 'these' : 'this'} file{multi ? 's' : ''}, please indicate your email address
          <Input className="mt-2" type="email" placeholder="example@email.com" />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={getPB}>Download</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>

      </Modal>
    </div>
  )
}

export default () => {

  const [modalPB, setModalPB] = useState(false);
  const togglePB = () => setModalPB(!modalPB);

  const [modalT, setModalT] = useState(false);
  const toggleT = () => setModalT(!modalT);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <section className="section section-gray" id="download">

      <DownloadModal value={modalPB} toggle={togglePB} title="Project Briefing"/>
      <DownloadModal value={modalT} toggle={toggleT} title="Topologies"/>

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
              <Col xs={12} md={6}><div className="my-button" onClick={toggle}>White Paper #1</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggle}>White Paper #2</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggle}>White Paper #3</div></Col>
              <Col xs={12} md={6}><div className="my-button" onClick={toggle}>White Paper #4</div></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

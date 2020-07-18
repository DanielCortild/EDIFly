import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Modal, Input} from 'reactstrap';

import {fetchDownloads, downloadFiles} from '../api/';

const DownloadModal = ({whitepaper, value, close}) => {
  let {title, filename, file_url} = whitepaper || {};
  const downloadFile = () => downloadFiles(filename, file_url);
  return (
    <div>
      <Modal isOpen={value} toggle={close}>

        <div className="modal-header">
          <button className="close" onClick={close}>
            <span>×</span>
          </button>
          <h5 className="modal-title text-center">{title}</h5>
        </div>

        <div className="modal-body">
          To be able to download this file, please indicate your email address
          <Input className="mt-2" type="email" placeholder="example@email.com" />
        </div>

        <div className="modal-footer p-2">
          <Button color="primary" onClick={downloadFile}>Download</Button>{' '}
          <Button color="secondary" onClick={close}>Cancel</Button>
        </div>

      </Modal>
    </div>
  )
}

export default () => {
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState();
  const [whitepapers, setWhitepapers] = useState();

  useEffect(() => {
    const fetch = async () => {
      let {whitepapers} = await fetchDownloads();
      setWhitepapers(whitepapers);
    }
    fetch();
  }, []);

  const openModal = (whitepaper) => {
    setModal(whitepaper)
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false);

  return (
    <section className="section section-gray" id="download">

      <DownloadModal value={modalOpen} close={closeModal} whitepaper={modal} />

      <Container className="text-center">
        <h2 className="title mb-5">White Papers & Project Briefing</h2>
        <Row>
          <Col xs={12} md={4}>
            <h4>Project Briefing</h4> <br />
            <div className="my-button" onClick={() => openModal()}>Product Briefing</div>
          </Col>
          <Col xs={12} md={{size: 7, offset: 1}}>
            <h4>White Papers</h4> <br />
            <Row>
              {whitepapers ? whitepapers.map((whitepaper, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="my-button" onClick={() => openModal(whitepaper)}>{whitepaper.title}</div>
                </Col>
              )) : ''}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

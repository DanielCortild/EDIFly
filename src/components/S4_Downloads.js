import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Modal, Input} from 'reactstrap';

import {fetchDownloads, downloadFiles} from '../api/';

const DownloadModal = ({file, value, close}) => {
  let {title, filename, file_url} = file || {};
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

export default ({data: {downloads}}) => {
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState();

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

          {downloads ? Object.keys(downloads).map(key => {
            let files = downloads[key];
            return (
              <Col xs={12} md={4}>
                <h4>{key}</h4> <br />
                  {files.map((file, index) => (
                    <p onClick={() => openModal(file)} className="text-left" key={index} style={{transform: 'rotate(0)'}}>
                      <a href="#download" className="stretched-link">{file.title}</a>
                    </p>
                  ))}
              </Col>)
          }) : ''}

        </Row>
      </Container>
    </section>
  )
}

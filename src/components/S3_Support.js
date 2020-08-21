import React, {useState} from 'react'
import {Container, Row, Col, Button, Modal} from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {downloadFiles, postDownloadedFile} from '../api';

const DownloadModal = ({file, value, close}) => {
  let {title, filename, file_url} = file || {};
  const handleValidSubmit = async (event, values) => {
    postDownloadedFile({
      name: values.name,
      company: values.company,
      email: values.email,
      file: filename
    });
    downloadFiles(filename, file_url);
  }
  return (
    <div>
      <Modal isOpen={value} toggle={close}>

        <div className="modal-header">
          <button className="close" onClick={close}>
            <span>×</span>
          </button>
          <h5 className="modal-title text-center">{title}</h5>
        </div>

        <div className="modal-body mb-1 p-0">
          <AvForm onValidSubmit={handleValidSubmit}>
            <div className="px-5 py-3">
              <Row>
                <Col md={6}>
                  <AvField name="name" label="Name" type="text"  placeholder="John Doe" required />
                </Col>
                <Col md={6}>
                  <AvField name="company" label="Company" type="text" placeholder="EDIfly" required />
                </Col>
              </Row>
              <AvField name="email" label="Email Address" type="email" placeholder="john.doe@example.com" required />
            </div>
            <div className="modal-footer p-2">
              <Button color="primary" type="submit">Download</Button>
              <Button color="secondary" onClick={close}>Cancel</Button>
            </div>
          </AvForm>
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
    <section className="section px-3 px-md-0" id="support" style={{background: '#7cb3d8', color: 'white'}}>

      <DownloadModal value={modalOpen} close={closeModal} file={modal} />

      <Container className="text-center">
        <h2 className="title mb-5" style={{color: 'white'}}>EDIfly Solution Support</h2>
        <Row>

          {downloads ? Object.keys(downloads).map(key => {
            let files = downloads[key];
            return (
              <Col xs={12} md={4} key={key}>
                <h4 className="text-left">{key}</h4> <br />
                  {files.map((file, index) => (
                    <p onClick={() => openModal(file)} className="text-left" key={index} style={{transform: 'rotate(0)'}}>
                      <a href="#support" className="stretched-link" style={{color: 'white'}}>{file.title}</a>
                    </p>
                  ))}
              </Col>)
          }) : ''}

        </Row>
      </Container>
    </section>
  )
}

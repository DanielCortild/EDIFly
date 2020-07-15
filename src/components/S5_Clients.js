import React from 'react';
import {Container, Row, Col, Modal} from 'reactstrap';

import {fetchClients} from '../api/'

const ClientModal = ({client, close}) => {
  let open = true;

  return (
    <Modal isOpen={open} toggle={close}>
      <div className="modal-header">
        <button
          aria-label="Close"
          className="close"
          type="button"
          onClick={close}
        >
          <span aria-hidden={true}>×</span>
        </button>
        <h5 className="modal-title text-center">{client.name}</h5>
      </div>
      <div className="modal-body">
        <Row>
          <Col sm={6} lg={4}>
            <img src={client.img_url} alt={client.name} className="w-100 img-thumbnail"/>
          </Col>
          <Col sm={6} lg={8}>
            {client.desc}
            <br />
            <a href={client.link} target="_blank" rel="noopener noreferrer">Visit their webpage</a>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default () => {
  const [openModal, setOpenModal] = React.useState();
  const [clients, setClients] = React.useState({});

  React.useEffect(() => {
    const fetch = async () => setClients(await fetchClients());
    fetch();
  }, [])

  return (
    <section className="section text-center" id="clients">
      <h2 className="title">Our Current Clients</h2>
      <Container>
        <Row className="pl-4">

          {Object.keys(clients).map(key => {
            let client = clients[key];
            let toggle = () => setOpenModal(key)
            return (
              <Col xs={6} sm={4} md={3} lg={2} className="p-4 mx-auto" key={key}>
                <Row className="img-thumbnail h-100 align-items-center">
                  <img src={client.img_url} alt={client.name} className="w-100" onClick={toggle} style={{cursor: 'pointer'}} />
                </Row>
              </Col>
            )
          })}
          {openModal ? <ClientModal client={clients[openModal]} close={() => setOpenModal()} /> : ''}

        </Row>
      </Container>
    </section>
  )
}
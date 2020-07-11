import React from 'react';
import {Container, Row, Col, Modal} from 'reactstrap';

const clients = {
  cargolux: {
    img: 'cargolux.png',
    name: 'CargoLux',
    desc: 'CargoLux is a very nice company, originary from Luxembourg and mainly transporting Cargo.',
    link: 'https://www.cargolux.com/'
  },
  klm: {
    img: 'klm.png',
    name: 'KLM',
    desc: 'KLM could be short for "Killing Lame Mice", but also for "Kangaroo Landing Matrass"... I cannot remember which one is the correct...',
    link: 'https://www.klm.com/'
  },
  brussels: {
    img: 'brussels.png',
    name: 'Brussels Airlines',
    desc: 'Brussels Airlines is a train company located in the south of China. It has taken the name "Brussels Airlines" to destabilize the ennemy ;-)',
    link: 'https://www.brusselsairlines.com/'
  },
  sas: {
    img: 'sas.png',
    name: 'SAS',
    desc: 'SAS is "SOS" but misspelled. They originally wanted to send out a SOS signal, since they were attaked my some pirates...',
    link: 'https://www.flysas.com/'
  },
  tarom: {
    img: 'tarom.gif',
    name: 'Tarom',
    desc: 'Tarom is a Romanian Airlines, flying mainly national flights. EDIfly does not work with them but I had to populate the exampels...',
    link: 'https://www.tarom.ro/'
  },
  swissair: {
    img: 'swissair.png',
    name: 'SwissAir',
    desc: 'SwissAir is, as the name states it, a Swiss company, and thus by simple logical reasoning, a rich company. Who wouldn\'t want to have them on their clients list?',
    link: 'https://www.swissair.com/'
  }
}

const ClientModal = ({modal, close}) => {
  let client = clients[modal];
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
            <img src={`/images/${client.img}`} alt={client.name} className="w-100 img-thumbnail"/>
          </Col>
          <Col sm={6} lg={8}>
            {client.desc}
            <br />
            <a href={client.link} target="_blank">Visit their webpage</a>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default () => {
  const [openModal, setOpenModal] = React.useState();

  return (
    <section className="section text-center" id="clients">
      <h2 className="title">Our Current Clients</h2>
      <Container>
        <Row>

          {Object.keys(clients).map(key => {
            let client = clients[key];
            let toggle = () => setOpenModal(key)
            return (
              <Col xs={12} sm={6} md={3} lg={2} className="p-4 mx-auto" onClick={toggle} key={key} style={{cursor: 'pointer'}}>
                <Row className="img-thumbnail h-100 align-items-center">
                  <img src={`/images/${client.img}`} alt={client.name} className="w-100"/>
                </Row>
              </Col>
            )
          })}
          {openModal ? <ClientModal modal={openModal} close={() => setOpenModal()} /> : ''}

        </Row>
      </Container>
    </section>
  )
}
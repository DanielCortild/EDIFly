import React from 'react';
import {Container, Row, Col, Modal} from 'reactstrap';

const UserModal = ({user: {name, desc, link, img_url}, close}) => {
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
        <h5 className="modal-title text-center">{name}</h5>
      </div>
      <div className="modal-body">
        <Row>
          <Col sm={6} lg={4}>
            <img src={img_url ? img_url : 'images/empty_user.jpeg'} alt={name} className="w-100 img-thumbnail"/>
          </Col>
          <Col sm={6} lg={8}>
            {desc}
            <br />
            <a href={link} target="_blank" rel="noopener noreferrer">Visit their webpage</a>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default ({data: {users}}) => {
  const [openModal, setOpenModal] = React.useState();

  return (
    <section className="section text-center" id="users">
      <h2 className="title">Our Current Users</h2>
      <Container>
        <Row className="pl-4">

          {Object.keys(users).map(key => {
            let {name, img_url} = users[key];
            let toggle = () => setOpenModal(key)
            return (
              <Col xs={6} sm={4} md={3} lg={2} className="p-4 mx-auto" key={key}>
                <Row className="img-thumbnail h-100 align-items-center">
                  <img src={img_url ? img_url : 'images/empty_user.jpeg'} alt={name} className="w-100" onClick={toggle} style={{cursor: 'pointer'}} />
                </Row>
              </Col>
            )
          })}
          {openModal ? <UserModal user={users[openModal]} close={() => setOpenModal()} /> : ''}

        </Row>
      </Container>
    </section>
  )
}
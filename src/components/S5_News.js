import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import {downloadFiles} from '../api';

export default ({data: {news}}) => {
  const directDownloadFiles = file => {
    downloadFiles(file.filename, file.file_url);
  }

  return (
    <section className="section px-3 px-md-0" id="news">

      <Container className="text-center">
        <h2 className="title mb-5">EDIfly News</h2>
        <Row>
            {news ? news.map((file, key) =>
                <Col xs={12} md={4} key={key}>
                  <p onClick={() => directDownloadFiles(file)} className="text-left" key={key} style={{transform: 'rotate(0)'}}>
                    <a href="#news" className="stretched-link">{file.title}</a>
                  </p>          
                </Col>) : ''}

        </Row>
      </Container>
    </section>
  )
}

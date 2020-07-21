import React from "react";
import {UncontrolledCarousel} from 'reactstrap'
import {BsChevronDoubleDown} from 'react-icons/bs';
import styles from './S1_Header.module.css';
import $ from 'jquery'

const items = [
  {
    src: 'images/airport.jpg',
    key: '1'
  },
  {
    src: 'images/cargo.jpg',
    key: '2'
  }
];

export default ({data: {message}}) => {
  React.useEffect(() => {
    const goDown = () => $(document).scrollTop(window.innerHeight);
    $('#go_down').click(goDown);
  })

  return (
    <section className="page-header" id="header">

      <UncontrolledCarousel className={styles.carouselStyle} items={items} captionText="" />
      <div className="motto text-center position-absolute">
        <h1 className="font-weight-bold">EDIfly</h1>
        <h3>{message}</h3>
      </div>
      <div className="position-absolute motto" style={{bottom: '10px', cursor: 'pointer'}} id="go_down">
        <BsChevronDoubleDown size={32} />
      </div>
    </section>
  );
}
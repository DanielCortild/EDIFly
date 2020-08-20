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
    <section className="" id="header" style={{minHeight: '100vh !important', background: 'url("images/back_grey.png") center center / cover no-repeat'}}>

      <div className="d-flex flex-column justify-content-center" style={{background: 'rgba(255, 255, 255, 0.8)', height: '100vh', width: '100%', textAlign: 'center'}}>
        <img src="images/back3.png" className="mx-auto" style={{filter: 'none !important', maxWidth: '98%', maxHeight: '80%'}}/>
        <h3>{message}</h3>
      </div>

      {/* <div style={{background: 'url(images/back.png)', height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div> */}
      {/* <UncontrolledCarousel className={styles.carouselStyle} items={items} captionText="" /> */}
     {/* <div className="motto text-center position-absolute">
        <h1 className="font-weight-bold">EDIfly</h1>
        <h3>{message}</h3>
      </div>  */}
      {/* <div className="position-absolute motto" style={{bottom: '10px', cursor: 'pointer', color: 'black', margin: 'auto'}} id="go_down">
        <BsChevronDoubleDown size={32} />
      </div> */}
    </section>
  );
}
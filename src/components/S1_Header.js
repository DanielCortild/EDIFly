import React, {useState} from "react";

import {UncontrolledCarousel} from 'reactstrap'

import cx from 'classnames';

import {BsChevronDoubleDown} from 'react-icons/bs';

import styles from './S1_Header.module.css';

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

export default () => {

  React.useEffect(() => {
    const goDown = () => {
      document.documentElement.scrollTop = window.innerHeight;
    }
    document.querySelector('#go_down').addEventListener('click', goDown);
  })

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // style={{backgroundImage: `url(/images/airport.jpg)`}}
  return (
    <section className="page-header" id="header">

      <UncontrolledCarousel className={styles.carouselStyle} items={items} />
      <div className="motto text-center position-absolute">
        <h1 className="font-weight-bold">EDIfly</h1>
        <h3>Some Special Message</h3>
      </div>
      <div className="position-absolute motto" style={{bottom: '10px', cursor: 'pointer'}} id="go_down">
        <BsChevronDoubleDown size={32} />
      </div>
    </section>
  );
}
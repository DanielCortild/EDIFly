import React from "react";

import {BsChevronDoubleDown} from 'react-icons/bs';

export default () => {

  React.useEffect(() => {
    const goDown = () => {
      document.documentElement.scrollTop = window.innerHeight;
    }
    document.querySelector('#go_down').addEventListener('click', goDown);
  })

  return (
    <section style={{backgroundImage: 'url("/images/airport.jpg")'}} className="page-header" id="header">
      <div className="filter" />
      <div className="motto text-center">
        <h1 className="font-weight-bold">EDIfly</h1>
        <h3>Some Special Message</h3>
      </div>
      <div className="position-absolute motto" style={{bottom: '10px', cursor: 'pointer'}} id="go_down">
        <BsChevronDoubleDown size={32} />
      </div>
    </section>
  );
}
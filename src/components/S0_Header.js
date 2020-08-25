import React from "react";

export default ({data: {message}}) => {
  return (
    <section id="header" style={{minHeight: '100vh !important', background: 'url("images/header/header_back.jpg") center center / cover no-repeat'}}>

      <div className="d-flex flex-column justify-content-center" style={{background: 'rgba(255, 255, 255, 0.9)', height: '100vh', width: '100%', textAlign: 'center'}}>
        <img src="images/header/header_front.png" className="mx-auto" style={{filter: 'none !important', maxWidth: '98%', maxHeight: '80%'}} alt="..."/>
        <h3>{message}</h3>
      </div>

    </section>
  );
}
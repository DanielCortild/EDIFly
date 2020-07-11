import React from 'react';
import $ from 'jquery';

import {FaArrowUp} from 'react-icons/fa';

export default function TopButton() {
  React.useEffect(() => {
    var btn = $('#btnTop');
    
    $(window).on('scroll', function() {
      if($(window).scrollTop() >= window.innerHeight) {
        btn.show();
      } else {
        btn.hide();
      }
    });
    btn.click(() => {
      $(window).scrollTop(0);
    });
  }, [])

  return (
    <div id="btnTop" style={fixedBtn}>
      <FaArrowUp style={btnSvg}/>
    </div>
  )
}

const fixedBtn = {
  display: 'none',
  cursor: 'pointer',
  backgroundColor: '#FF2434',
  color: '#FFFFFF',
  border: 'none',
  outline: 'none',
  position: 'fixed',
  bottom: '24px',
  right: '45px',
  height: '50px',
  width: '50px',
  borderRadius: '30px',
  zIndex: '100',
  textAlign: 'center'
}

const btnSvg = {
  marginTop: '11px',
  height: '24px',
  width: '24px'
}
import React from "react";
import $ from 'jquery';

import {AiFillLinkedin} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';

export default () => {
  React.useEffect(() => {
    $('.social-media').mouseenter(function() {
      $(this).css('color', '#BBBBBB');
    });
    $('.social-media').mouseleave(function() {
      $(this).css('color', '#66615B');
    });
  }, []);

  return (
    <footer className="footer footer-black">
      <div className="credits text-center">
        <div className="float-left position-absolute ml-2 ml-md-4">
          <a href="https://www.linkedin.com/company/innovative-software/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={24} className="social-media mr-3" style={socialMedia} />
          </a>
          <a href="https://twitter.com/EDIflyMessaging" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="social-media mr-3" style={socialMedia} />
          </a>
        </div>
        <span className="copyright">
          © 2020, Innovative Software SARL
        </span>
      </div>
    </footer>
  );
}

const socialMedia = {
  color: '#66615B',
  cursor: 'pointer'
}
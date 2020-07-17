import React from "react";

import TopButton from 'components/TopButton.js';

import Header from "components/S1_Header.js";
import Description from 'components/S2_Description.js';
import Description2 from 'components/S2_Description2.js';
import Team from 'components/S3_Team.js';
import Downloads from 'components/S4_Downloads.js';
import Users from 'components/S5_Users.js';
import Contact from 'components/S6_Contact.js';
import Testimonals from 'components/S7_Testimonials.js';

export default () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <>
      <Header />
      <Description />
      <Description2 />
      <Team />
      <Downloads />
      <Users />
      <Testimonals />
      <Contact />
      
      {window.innerWidth > 640 ? <TopButton /> : ''}
    </>
  );
}
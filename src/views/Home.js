import React from "react";

import TopButton from 'components/TopButton.js';

import NavBar from "components/S0_Navbar.js";
import Header from "components/S1_Header.js";
import Description from 'components/S2_Description.js';
import Description2 from 'components/S2_Description2.js';
import Team from 'components/S3_Team.js';
import Downloads from 'components/S4_Downloads.js';
import Users from 'components/S5_Users.js';
import Contact from 'components/S6_Contact.js';
import Testimonals from 'components/S7_Testimonials.js';
import Footer from "components/SL_Footer.js";

import {fetchData} from '../api/';

export default () => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetch = async () => setData(await fetchData());
    fetch();
  }, []);
  if(data) return (
    <> 
      <NavBar />
      <Header data={data} />
      <Description data={data} />
      <Description2 data={data} />
      <Team data={data} />
      <Downloads data={data} />
      <Users data={data} />
      <Testimonals data={data} />
      <Contact data={data} />
      <TopButton />
      <Footer /> 
    </>
  );
  return('')
}
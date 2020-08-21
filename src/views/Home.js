import React from "react";

import TopButton from 'components/TopButton.js';

import NavBar from "components/S*_Navbar.js";
import Header from "components/S0_Header.js";
import WhyEDIfly from 'components/S1_WhyEDIfly.js';
import Users from 'components/S2_Users.js';
import Support from 'components/S3_Support.js';
import Team from 'components/S4_Team.js';
import News from 'components/S5_News.js';
import Blog from 'components/S6_Blog.js';
import Contact from 'components/S7_Contact.js';
import Footer from "components/SL_Footer.js";

import {fetchData} from '../api/';

export default () => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetch = async () => setData(await fetchData());
    fetch();
  }, []);
  return (
    <> 
      <NavBar />
      <Header data={data} />
      <WhyEDIfly data={data} />
      <Users data={data} />
      <Support data={data} />
      <Team data={data} />
      <News data={data} />
      <Blog data={data} />
      <Contact data={data} />
      <TopButton />
      <Footer /> 
    </>
  );
}
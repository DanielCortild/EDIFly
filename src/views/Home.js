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
  let complete_data = data || {'message': "", 'users': [], 'testimonials': [], 'blog': [], 'downloads': {'Product Briefing': [], 'Whitepapers': [], 'FAQ + Case Studies': []}, 'news': [ ]}
  return (
    <> 
      <NavBar />
      <Header data={complete_data} />
      <WhyEDIfly data={complete_data} />
      <Users data={complete_data} />
      <Support data={complete_data} />
      <Team data={complete_data} />
      <News data={complete_data} />
      <Blog data={complete_data} />
      <Contact data={complete_data} />
      <TopButton />
      <Footer /> 
    </>
  );
}
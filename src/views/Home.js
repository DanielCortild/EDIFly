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
      <Downloads data={data} />
      <Team data={data} />
      <Users data={data} />
      <Testimonals data={data} />
      <Contact data={data} />
      <TopButton />
      <Footer /> 
    </>
  );
  return(
    <>
    {/* <div style={{height: '100vh'}} className="w-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="dispaly-4">Error 500 - Server Down</h1>
        <h3 className="dispaly-2">To start the server, please visit <a href="https://edifly.herokuapp.com/" target="_blank">the server</a> </h3>
      </div>
    </div> */}
    </>
  )
}
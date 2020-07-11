import React from "react";

import TopButton from 'components/TopButton.js';

import Header from "components/S1_Header.js";
import Description from 'components/S2_Description2.js';
import Team from 'components/S3_Team.js';
import Downloads from 'components/S4_Downloads.js';
import Clients from 'components/S5_Clients.js';

export default () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <>
      <Header />
      <Description />
      <Team />
      <Downloads />
      <Clients />
      {window.innerWidth > 640 ? <TopButton /> : ''}
    </>
  );
}
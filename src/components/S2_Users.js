import React from 'react';

import Community from './S2-1_Community.js';
import Testimonials from './S2-2_Testimonials.js';

export default ({data}) => {
  return(
    <>
      <Community data={data} />
      <Testimonials data={data} />
    </>
  )
}
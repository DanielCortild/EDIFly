import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './S7_Testimonials.module.css';

const responsive = {
  desktop: {breakpoint: { max: 4000, min: 640 }, items: 2},
  mobile: {breakpoint: { max: 640, min: 0 }, items: 1}
};

const Testimonial = ({quote, author, from, date}) => {
	return (
		<div className={styles.bubble}>
			<blockquote>
				{quote}
			</blockquote>
			<div></div>
			<cite> {author}, <strong>{from}</strong></cite> ({date})
		</div>
	)
}

export default ({data: {testimonials}}) => {

  return (
		<section className="section section-gray" id="testimonials" style={{padding: '3em', background: '#8482af'}}>
			<h2 className="title text-center" style={{color: 'white'}}>Testimonials</h2>
			<Carousel responsive={responsive} showDots removeArrowOnDeviceType={['desktop', 'mobile']}>
				{Object.keys(testimonials).map(key => <Testimonial {...testimonials[key]}></Testimonial>)}
			</Carousel>
		</section>
  )
}

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './S8_Blog.module.css';

const responsive = {
  desktop: {breakpoint: { max: 4000, min: 640 }, items: 3},
  mobile: {breakpoint: { max: 640, min: 0 }, items: 1}
};

const BlogPost = ({title, content, date}) => {
	return (
		<div className={styles.post}>
			<h4> {title}</h4>
			<p>{content}</p>
      <i>{date}</i>
		</div>
	)
}

export default ({data: {blog}}) => {

  return (
		<section className="section section-gray" id="blog" style={{padding: '3em'}}>
			<h2 className="title text-center mb-4">Recent Blog Posts</h2>
			<Carousel responsive={responsive} showDots removeArrowOnDeviceType={['desktop', 'mobile']}>
				{Object.keys(blog).map(key => <BlogPost {...blog[key]} />)}
			</Carousel>
		</section>
  )
}

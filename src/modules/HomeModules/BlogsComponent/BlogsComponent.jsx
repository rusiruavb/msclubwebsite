import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import blogApi from '../../../API/blogAPI';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogCard from '../../../component/BlogCard/BlogCard';

const responsive = {
  0: {
    items: 1.3,
  },
  370: {
    items: 1.2,
  },
  411: {
    items: 1.3,
  },
  414: {
    items: 1.3,
  },
  600: {
    items: 2,
  },
  768: {
    items: 2.25,
  },
  1000: {
    items: 3,
  },
  1200: {
    items: 3,
  },
  1400: {
    items: 3.3,
  },
  1700: {
    items: 4,
  },
};

const BlogsComponent = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    blogApi
      .blog()
      .getAllblogs()
      .then((res) => {
        setblogs(res.data.items);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="past-event-container pt-5">
      <h1 className="event-header">Blogs</h1>

      <div className="container-fluid">
        <OwlCarousel
          className="owl-theme"
          dots={false}
          loop
          margin={70}
          responsive={responsive}
          lazyLoad
          autoPlay={1000}
        >
          {blogs.map((blog) => (
            <div key={blog}>
              <BlogCard
                image={blog.thumbnail}
                title={blog.title}
                datetime={blog.pubDate}
                link={blog.link}
                tags={blog.categories}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default BlogsComponent;

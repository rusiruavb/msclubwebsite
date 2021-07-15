import React from 'react';
import PropTypes from 'prop-types';
import './BlogCardStyle.css';
import moment from 'moment';

const BlogCard = ({ image, title, tags, datetime, description, link }) => (
  <div className="event-card card mb-3 mt-3">
    <div>
      <img className="img-fluid blog-card-img" src={image} alt="Card cap" />
    </div>

    <div className="card-body">
      {tags &&
        tags.map((tag) => (
          <span key={tag} className="badge rounded-pill bg-event event-tags text-dark text-bold">
            {tag.toUpperCase()}
          </span>
        ))}
      <div>
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-left">
          <i className="fas fa-calendar-alt fa-lg mt-1" />
          <span className="badge rounded-pill event-date text-muted">{moment(datetime).format('lll')}</span>
        </div>
        <p className="description">{description}</p>
      </div>

      <div className="d-flex justify-content-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success event-btn btn-sm" type="button">
            READ MORE
          </button>
        </a>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  datetime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;

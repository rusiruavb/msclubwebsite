import React from 'react';
import PropTypes from 'prop-types';
import './EventCardStyle.css';
import moment from 'moment';

const EventCardComponent = ({ image, title, tags, datetime, description }) => (
  <div className="card mt-3 mb-3 event-card">
    <img src={image} className="card-img-top" alt="event-flyer" />
    <div className="row">
      <div className="event-card-body">
        <div className="tags">
          {tags &&
            tags.slice(0, 3).map((tag) => (
              <span key={tag} className="badge rounded-pill bg-event event-tags text-dark">
                {tag.toUpperCase()}
              </span>
            ))}
        </div>
        <div className="body-content">
          <h6 className="event-title">{title}</h6>
          <p className="description">{description}</p>
          <i className="fas fa-calendar-alt fa-lg mt-1" />
          <span className="badge rounded-pill event-date text-dark">{moment(datetime).format('lll')}</span>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success event-btn btn-sm" type="button">
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  </div>
);

EventCardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  datetime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCardComponent;

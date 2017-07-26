import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = props => {
  const { by, time, title, url, type, score } = props;

  return (
    <div>
      <span>
        {score}
      </span>
      <p>
        {type}
      </p>
      <h2>
        <a href={url}>
          {title}
        </a>
      </h2>
      <span>
        by: {by}
      </span>
    </div>
  );
};

NewsItem.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsItem;

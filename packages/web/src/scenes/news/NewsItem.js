import React from 'react';
import PropTypes from 'prop-types';
import { ago } from 'store/utils/time';

const NewsItem = props => {
  const { by, time, descendants, title, url, score } = props;

  return (
    <div>
      <h2>
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <span>
        score {score}
      </span>
      {' • '}
      <span>
        by: {by}
      </span>
      {' • '}
      <span>
        {ago(time)}
      </span>
      {' • '}
      <span>
        {descendants} comments
      </span>
      <hr />
    </div>
  );
};

NewsItem.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default NewsItem;

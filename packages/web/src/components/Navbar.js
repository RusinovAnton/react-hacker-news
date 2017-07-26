import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">News</Link>
      {' • '}
      <Link to="/counter">Counter</Link>
    </div>
  );
};

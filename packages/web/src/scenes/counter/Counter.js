import React from 'react';
import counterContainer, { defaultProps, propTypes } from 'store/data/counter/container';

export const Counter = ({ counter, countMore, resetCount }) => {
  return (
    <div>
      <p>
        Simple Counter: {counter}
      </p>
      <button onClick={countMore}>Count more</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default counterContainer(Counter);

import React from 'react'
import counterContainer, { defaultProps, propTypes } from '../store/containers/counter'

export const Counter = ({ count, countMore, resetCount }) => {
  return (
    <div>
      <p>Simple Counter: {count}</p>
      <button onClick={countMore}>Count more</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
};

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default counterContainer(Counter)

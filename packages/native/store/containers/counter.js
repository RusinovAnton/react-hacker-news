import { connect } from 'react-redux'
import { countMore, resetCount } from '../data/counter'
import PropTypes from 'prop-types'


export const defaultProps = {
  count: 0,
};

export const propTypes = {
  count: PropTypes.number.isRequired,
  countMore: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
};

export default connect(
  ({ count }) => ({ count }),
  { countMore, resetCount }
)

import { connect } from 'react-redux'
import { countMore, resetCount } from './index'
import PropTypes from 'prop-types'


export const defaultProps = {
  counter: 0,
};

export const propTypes = {
  counter: PropTypes.number.isRequired,
  countMore: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
};

export default connect(
  ({ counter }) => ({ counter }),
  { countMore, resetCount }
)

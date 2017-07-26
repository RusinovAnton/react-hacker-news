import { connect } from 'react-redux';
import { requestTopStories } from './index';
import PropTypes from 'prop-types';

export const defaultProps = {
  news: [],
};

export const propTypes = {
  news: PropTypes.array.isRequired,
  requestTopStories: PropTypes.func.isRequired,
};

export default connect(state => ({ news: state.news.items, currentPage: state.news.page }), { requestTopStories });

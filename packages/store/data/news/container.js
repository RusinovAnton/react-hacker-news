import { connect } from 'react-redux';
import { getNextPage, getPrevPage, requestNewsItems, setPage } from './index';
import PropTypes from 'prop-types';

export const defaultProps = { news: [] };

export const propTypes = {
  currentPage: PropTypes.number.isRequired,
  getNextPage: PropTypes.func.isRequired,
  getPrevPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.array.isRequired,
  error: PropTypes.string,
  requestNewsItems: PropTypes.func.isRequired,
};

export default connect(
  ({ news }) => ({
    currentPage: news.page,
    error: news.error,
    isLoading: news.isLoading,
    news: news.items,
  }),
  { getNextPage, getPrevPage, requestNewsItems, setPage}
);

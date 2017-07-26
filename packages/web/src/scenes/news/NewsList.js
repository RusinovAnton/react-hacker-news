import React from 'react'
import newsContainer, { defaultProps, propTypes } from 'store/data/news/container'
import NewsItem from './NewsItem'

class News extends React.Component {
  componentDidMount() {
    const { currentPage, requestNewsItems } = this.props;

    if (!currentPage) {
      requestNewsItems();
    }
  }

  getToTheFirstPage = () => {
    this.props.setPage(0);
  };

  render() {
    const { news, isLoading, currentPage, error } = this.props;

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error occured.</span>
    }

    if (!news || !news.length) {
      return <span>No items here</span>;
    }

    return (
      <div>
        {news.map(item => <NewsItem key={item.time} {...item} />)}
        { currentPage > 0 &&
        (<span>
            { currentPage > 1 && <button type="button" onClick={this.getToTheFirstPage}>First</button>}
          <button type="button" onClick={this.props.getPrevPage}>
              Previous
            </button>
          {' '}
          </span>)
        }
        <button type="button" onClick={this.props.getNextPage}>
          Next
        </button>
      </div>
    );
  }
}

News.defaultProps = defaultProps;
News.propTypes = propTypes;

export default newsContainer(News);

import React from 'react';
import newsContainer, { defaultProps, propTypes } from 'store/data/news/container';
import NewsItem from './NewsItem';

class News extends React.Component {
  componentDidMount() {
    const { currentPage, requestTopStories } = this.props;

    if (!currentPage) {
      requestTopStories();
    }
  }

  render() {
    const { news } = this.props;

    if (!news) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        {news.map(item => <NewsItem key={item.time} {...item} />)}
      </div>
    );
  }
}

News.defaultProps = defaultProps;
News.propTypes = propTypes;

export default newsContainer(News);

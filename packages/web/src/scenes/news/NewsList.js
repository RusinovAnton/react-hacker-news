import React from 'react'
import newsContainer, { defaultProps, propTypes } from 'store/data/news/container'

class News extends React.Component {
  componentDidMount() {
    this.props.requestTopStories();
  }

  render() {
    const { news } = this.props;

    if (!news) {
      return <span>...</span>;
    }

    return (
      <div>
        {news.map(item => {
            const { by, time, title, url, type, score } = item;

            return (
              <div key={time}>
                <span>{score}</span>
                <p>{type}</p>
                <h2><a href={url}>{title}</a></h2>
                <span>by: {by}</span>
              </div>
            )
          }
        )}
      </div>
    );
  }
}

News.defaultProps = defaultProps;
News.propTypes = propTypes;

export default newsContainer(News);

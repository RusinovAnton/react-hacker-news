import axios from 'axios'

const FETCH_TOP_STORIES = 'FETCH_TOP_STORIES';

export const fetchTopStories = () => {

};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      return state.concat('lorem');

    default:
      return state;
  }
}
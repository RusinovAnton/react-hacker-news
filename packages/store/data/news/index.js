/** Actions **/
export const TOP_STORIES_ITEMS_FETCH_REQUESTED = 'TOP_STORIES_ITEMS_FETCH_REQUESTED';
export const TOP_STORIES_ITEMS_FETCH_FAIL = 'TOP_STORIES_ITEMS_FETCH_FAIL';
export const TOP_STORIES_ITEMS_FETCH_SUCCESS = 'TOP_STORIES_ITEMS_FETCH_SUCCESS';

/** Action creators **/
export const requestTopStories = () => ({ type: TOP_STORIES_ITEMS_FETCH_REQUESTED });

/** Reducer **/
const newsInitialState = () => ({
  error: null,
  items: [],
  page: 0,
  per_page: 10,
});

export default (state = newsInitialState(), action) => {
  switch (action.type) {
    case TOP_STORIES_ITEMS_FETCH_SUCCESS:
      return { ...state, error: null, ...action.payload };

    case TOP_STORIES_ITEMS_FETCH_FAIL:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}

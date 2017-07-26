/** Actions **/
export const NEWS_ITEMS_FETCH_FAIL = 'NEWS_ITEMS_FETCH_FAIL';
export const NEWS_ITEMS_FETCH_REQUESTED = 'NEWS_ITEMS_FETCH_REQUESTED';
export const NEWS_ITEMS_FETCH_SUCCESS = 'NEWS_ITEMS_FETCH_SUCCESS';
export const NEWS_PAGE_CHANGED = 'NEWS_PAGE_CHANGED';
export const NEWS_PAGE_SET = 'NEWS_PAGE_SET';

/** Action creators **/
export const getNextPage = () => ({ type: NEWS_PAGE_CHANGED, payload: { pageDelta: 1 } });
export const getPrevPage = () => ({ type: NEWS_PAGE_CHANGED, payload: { pageDelta: -1 } });
export const newsItemsError = error => ({ type: NEWS_ITEMS_FETCH_FAIL, payload: { error } });
export const requestNewsItems = () => ({ type: NEWS_ITEMS_FETCH_REQUESTED });
export const setPage = (page) => ({ type: NEWS_PAGE_SET, payload: { page } });
export const storeNewsItems = items => ({ type: NEWS_ITEMS_FETCH_SUCCESS, payload: { items } });

/** Reducer **/
const newsInitialState = () => ({
  error: null,
  isLoading: false,
  items: [],
  page: 0,
  per_page: 10,
});

export default (state = newsInitialState(), action) => {
  switch (action.type) {
    case NEWS_ITEMS_FETCH_REQUESTED:
      return { ...state, isLoading: true };
    case NEWS_PAGE_CHANGED:
      return (function() {
        let currentPage;
        if (state.page === 0 && action.payload.pageDelta < 0) {
          currentPage = 0;
        } else {
          currentPage = state.page + action.payload.pageDelta;
        }

        return { ...state, page: currentPage };
      })();
    case NEWS_PAGE_SET:
    case NEWS_ITEMS_FETCH_SUCCESS:
      return { ...state, error: null, ...action.payload, isLoading: false };
    case NEWS_ITEMS_FETCH_FAIL:
      return { ...state, error: action.payload.error, isLoading: false };

    default:
      return state;
  }
};

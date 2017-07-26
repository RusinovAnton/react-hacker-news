import { call, put, select, take, takeLatest, all } from 'redux-saga/effects';
import { getItemById, getTopStoriesIdList } from '../../services/hackerNews';
import {
  TOP_STORIES_ITEMS_FETCH_FAIL,
  TOP_STORIES_ITEMS_FETCH_REQUESTED,
  TOP_STORIES_ITEMS_FETCH_SUCCESS,
} from './index';

/** Sagas **/
const getCurrentPageItemsIds = function*(topStoriesIdList) {
  const { per_page, page } = yield select(state => state.news);
  const startIndex = page * per_page;
  const endIndex = startIndex + per_page;

  const currentPageItemsIds = [];
  for (let i = startIndex; i <= endIndex; i++) {
    currentPageItemsIds.push(topStoriesIdList[i]);
  }

  return currentPageItemsIds;
};

const getNextPage = topStoriesIdList =>
  function*(isInitialPageLoad) {
    const currentPageItemsIds = yield getCurrentPageItemsIds(topStoriesIdList);

    try {
      let currentPage = 0;
      if (isInitialPageLoad === 'yes') {
        const { page } = yield select(state => state.news);
        currentPage = page + 1;
      }
      const data = yield all(currentPageItemsIds.map(id => getItemById(id)));
      const newsList = data.map(({ data }) => data);

      yield put({
        type: TOP_STORIES_ITEMS_FETCH_SUCCESS,
        payload: {
          items: newsList,
          page: currentPage,
        },
      });
    } catch (error) {
      yield put({ type: TOP_STORIES_ITEMS_FETCH_FAIL, payload: { error } });
    }
  };

export const topStories = function*() {
  yield take(TOP_STORIES_ITEMS_FETCH_REQUESTED);
  const response = yield call(getTopStoriesIdList);
  const topStoriesIdList = response.data;
  const getNextPageFn = getNextPage(topStoriesIdList);
  yield getNextPageFn('yes');

  yield takeLatest(TOP_STORIES_ITEMS_FETCH_REQUESTED, getNextPageFn);
};

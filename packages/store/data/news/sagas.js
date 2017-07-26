import { call, put, select, take, takeLatest, all, takeEvery, fork } from 'redux-saga/effects';
import { getItemById, getTopStoriesIdList } from '../../services/hackerNews';
import {
  NEWS_ITEMS_FETCH_REQUESTED,
  NEWS_PAGE_CHANGED,
  NEWS_PAGE_SET,
  newsItemsError,
  requestNewsItems,
  storeNewsItems,
} from './index';

/** Sagas **/
const getCurrentPageItemsIds = function*(newsItemsIdList) {
  const { per_page, page } = yield select(state => state.news);
  const startIndex = page * per_page;
  const endIndex = startIndex + per_page;

  const currentPageItemsIds = [];
  for (let i = startIndex; i <= endIndex; i++) {
    currentPageItemsIds.push(newsItemsIdList[i]);
  }

  return currentPageItemsIds;
};

const requestTopStories = newsItemsIdList =>
  function*() {
    const currentPageItemsIds = yield getCurrentPageItemsIds(newsItemsIdList);

    try {
      const data = yield all(currentPageItemsIds.map(id => getItemById(id)));
      const newsList = data.map(({ data }) => data);

      yield put(storeNewsItems(newsList));
    } catch (error) {
      yield put(newsItemsError(error));
    }
  };

const newsItemsRequests = function*() {
  yield take(NEWS_ITEMS_FETCH_REQUESTED);
  const response = yield call(getTopStoriesIdList);
  const newsItemsIdList = response.data;
  const requestTopStoriesFn = requestTopStories(newsItemsIdList);
  yield requestTopStoriesFn();

  yield takeLatest(NEWS_ITEMS_FETCH_REQUESTED, requestTopStoriesFn);
};

const newsPagination = function*() {
  yield takeEvery([NEWS_PAGE_SET, NEWS_PAGE_CHANGED], function*() {
    yield put(requestNewsItems());
  });
};

export const newsItems = function*() {
  yield fork(newsItemsRequests);
  yield fork(newsPagination);
};

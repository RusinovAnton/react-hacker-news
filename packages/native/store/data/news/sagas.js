import { call, put, select, take, takeLatest, all } from 'redux-saga/effects'
import { getItemById, getTopStoriesIdList } from '../../services/hackerNews'
import {
  TOP_STORIES_ITEMS_FETCH_FAIL,
  TOP_STORIES_ITEMS_FETCH_REQUESTED,
  TOP_STORIES_ITEMS_FETCH_SUCCESS
} from './index'

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

const getNextPage = function*(topStoriesIdList) {
  const currentPageItemsIds = yield getCurrentPageItemsIds(topStoriesIdList);

  try {
    const data = yield all(currentPageItemsIds.map(id => getItemById(id)));
    const { page } = yield select(state => state.news);

    yield put({ type: TOP_STORIES_ITEMS_FETCH_SUCCESS, payload: { items: data.map(({data}) => data), page: page + 1 } });
  } catch (error) {
    yield put({ type: TOP_STORIES_ITEMS_FETCH_FAIL, payload: { error } });
  }
};

export const topStories = function*() {
  yield take(TOP_STORIES_ITEMS_FETCH_REQUESTED);
  const response = yield call(getTopStoriesIdList);
  const topStoriesIdList = response.data;

  yield getNextPage(topStoriesIdList);

  yield takeLatest(TOP_STORIES_ITEMS_FETCH_REQUESTED, getNextPage);
};

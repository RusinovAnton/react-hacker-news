import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const HN_API_BASE = 'https://hacker-news.firebaseio.com';
const HN_TOPSTORIES_URL = HN_API_BASE + '/v0/topstories.json';
const HN_STORYDETAILS_URL = HN_API_BASE + '/v0/item/[ID].json';

function fetchTopStories() {
  axios(HN_TOPSTORIES_URL)
    .then(response => {
      put({ type: 'TOP_STORIES_FETCH_SUCCESS', payload: response })
    })
    .catch(error => {
      put({ type: 'TOP_STORIES_FETCH_FAILURE', payload: { error } })
    })
}

export const topStories = function*() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchTopStories);
};
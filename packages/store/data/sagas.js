import { fork } from 'redux-saga/effects';
import { newsItems } from './news/sagas';

export default function*() {
  yield fork(newsItems);
}

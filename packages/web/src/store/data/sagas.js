import { fork } from 'redux-saga/effects';
import { topStories } from './news/sagas';

export default function*() {
  yield fork(topStories);
}

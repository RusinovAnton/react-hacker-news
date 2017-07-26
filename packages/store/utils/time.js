import moment from 'moment';

export const ago = time => moment(time * 1000).fromNow();

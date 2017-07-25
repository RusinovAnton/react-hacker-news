import axios from 'axios'


const HN_API_BASE = 'https://hacker-news.firebaseio.com';
const HN_TOPSTORIES_URL = HN_API_BASE + '/v0/topstories.json';
const getItemUrl = (id) => `${HN_API_BASE}/v0/item/${id}.json`;

export const getTopStoriesIdList = () => {
  return axios(HN_TOPSTORIES_URL);
};

export const getItemById = id => {
  return axios(getItemUrl(id));
};

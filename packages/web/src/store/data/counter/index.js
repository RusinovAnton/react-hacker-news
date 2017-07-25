const COUNT_MORE = 'COUNT_MORE';
const COUNT_RESET = 'COUNT_RESET';

export const countMore = () => ({ type: COUNT_MORE });
export const resetCount = () => ({ type: COUNT_RESET });

const initialState = () => 0;

export default (state = initialState(), action) => {
  switch (action.type) {
    case COUNT_MORE:
      return state + 1;

    case COUNT_RESET:
      return initialState();

    default:
      return state;
  }
};

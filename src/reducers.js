import {
  INCREMENT,
  DECREMENT,
  ALBUM_PENDING,
  ALBUM_SUCCESS,
  ALBUM_FAILURE,
  INPUT_TEXT
} from './types';

let initialCounterState = {
  count: 0
};

export const reducer = (state = initialCounterState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

const intialPostState = {
  isPending: false,
  albums: [],
  err: ''
};

export const albumReducer = (state = intialPostState, action = {}) => {
  switch (action.type) {
    case ALBUM_PENDING:
      return Object.assign({}, state, { isPending: true });
    case ALBUM_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        albums: action.payload
      });
    case ALBUM_FAILURE:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

const initialTextState = {
  text: ''
};

export const textReducer = (state = initialTextState, action = {}) => {
  switch (action.type) {
    case INPUT_TEXT:
      return Object.assign({}, state, { text: action.payload });
    default:
      return state;
  }
};

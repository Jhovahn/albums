import {
  INCREMENT,
  DECREMENT,
  NAME,
  ALBUM_PENDING,
  ALBUM_SUCCESS,
  ALBUM_FAILURE,
  INPUT_TEXT
} from './types';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const name = text => ({
  type: NAME,
  payload: text
});

export const albums = () => dispatch => {
  dispatch({ type: ALBUM_PENDING });
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => dispatch({ type: ALBUM_SUCCESS, payload: json }))
    .catch(err => dispatch({ type: ALBUM_FAILURE, payload: err }));
};

export const text = t => {
  return {
    type: INPUT_TEXT,
    payload: t
  };
};

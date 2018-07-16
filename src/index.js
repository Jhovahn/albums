import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer, albumReducer, textReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducer,
  albumReducer,
  textReducer
});

const logger = createLogger({});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

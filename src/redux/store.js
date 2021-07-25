import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  //window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
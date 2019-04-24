import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/appReducer';


function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );
  console.log('STORE: ', store.getState());

  return { store };
}

export default configureStore;
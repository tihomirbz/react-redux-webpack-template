import { combineReducers, createStore } from 'redux';

import countReducer from './reducers/countReducer.js';

const rootReducer = combineReducers({
    count: countReducer
});

let appStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default appStore;

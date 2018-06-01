import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import topicReducer from './reducers/topics.reducer';
import authReducer from './reducers/auth.reducer';

import thunk from 'redux-thunk';

import './reset.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ topic: topicReducer, auth: authReducer });
const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

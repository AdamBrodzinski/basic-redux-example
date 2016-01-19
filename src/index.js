import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// redux
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// redux dev
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// router
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import Routes from './routes';
import {appReducer, formReducer} from './reducers';


const reducer = combineReducers({
  router: routerStateReducer,
  app: appReducer,
  form: formReducer,
});

// export for others to consume
// create store with devtools
const store = compose(
  reduxReactRouter({ createHistory }),
  devTools(),
)(createStore)(reducer);

export const dispatch = store.dispatch;

console.log("Data Tree", store.getState());


// expose store for easier debugging in dev
window._store = store;

const Root = () => (
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));

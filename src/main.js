require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import render, {
  setupReducers,
  replaceReducers,
} from '@sketchpixy/rubix/lib/node/redux-router';

import reducers from './reducers';

setupReducers(reducers);
render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    // reload routes again
    require('./routes').default;
    render(routes);
  });

  module.hot.accept('./reducers', () => {
    // reload reducers again
    let newReducers = require('./reducers');
    replaceReducers(newReducers);
  });
}

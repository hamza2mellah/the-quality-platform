import React from 'react';
import classNames from 'classnames';
import { IndexRoute,Router, Route,hashHistory } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Header from './common/header';

/* Pages */

import Login from './modules/Login';
import singUp from './modules/singUp';

class App extends React.Component {
  render() {
    return (
        <div>
           <Header />
           {this.props.children}
        </div>
  );
  }
}

const routes = (
<Router history={hashHistory}>
    <Route path='/' component={App}>
       <IndexRoute component={Login} />
       <Route path='login' component={Login}/>
       <Route path='singup' component={singUp}/>
    </Route>
</Router>
);

export default routes;

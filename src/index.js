import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from './pages/dashboard';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div className="app" style={styles}>
    <Router>
      <Fragment>
        <Route exact path="/" render={(props) => (
          <Fragment>
            <Link to="/dashboard">Dashboard</Link>
            <br />
            Path - {props.match.path}
          </Fragment>
        )} />
        <Route path="/dashboard" component={Dashboard} />
      </Fragment>
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));

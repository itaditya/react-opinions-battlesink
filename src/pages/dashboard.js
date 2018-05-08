import React, { Fragment } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Button from '../components/shared/Button';
import FixedHeaderLayout from '../components/shared/Layout/FixedHeader';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';

export default function(props) {
  const styles = {
    headerPrimaryStyle: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    mainStyle: {
      height: '800px'
    }
  };
  return (
    <Fragment>
      <FixedHeaderLayout
        headerHeight="80px"
        headerComponent={
          <div>
            <div style={styles.headerPrimaryStyle}>
              <Link to="/">Home</Link>
              <Link to="/dashboard">
                Dashboard
              </Link>
              <Link to="/dashboard/posts">
                Posts
              </Link>
            </div>
            <Route path="/" component={Breadcrumbs} />
          </div>
        }
        mainComponent={
          <div style={styles.mainStyle}>
            <Switch>
              <Route
                path={`${props.match.path}/posts`}
                render={(props) => (
                  <p>
                    Posts
                    <br />
                    {props.match.path}
                    <br />
                    {props.match.url}
                  </p>
                )}
              />
              <Button id="hello" desc="Submit" />
            </Switch>
          </div>
        }
      />
    </Fragment>
  );
}

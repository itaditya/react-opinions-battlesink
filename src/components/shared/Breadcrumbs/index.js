import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import classNames from '../../../utils/classNames';

import styles from './index.module.css';

console.log('styles', styles);

export const Breadcrumbs = (props) => (
  <div className={styles.breadcrumbs}>
    <ul className='container'>
      <Route path='/:path' component={BreadcrumbsItem} />
    </ul>
  </div>
)

export const BreadcrumbsItem = ({ match, ...rest }) => {

  const BreadcrumbsItemClassMapping = {
    'breadcrumb': true,
    'breadcrumb-active': match.isExact
  }

  return (
    <Fragment>
      <li
        className={classNames(BreadcrumbsItemClassMapping)}>
        <Link to={match.url || ''}>
          {match.url}
        </Link>
      </li>
      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </Fragment>
  )
}
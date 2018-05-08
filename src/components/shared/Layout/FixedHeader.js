import React, { Fragment } from 'react';

export default function(props) {
  const styles = {
    header: {
      background: '#ddd',
      width: '100%',
      height: props.headerHeight,
      position: 'fixed',
      top: 0
    },
    main: {
      marginTop: props.headerHeight,
      background: 'yellow'
    }
  }
  return (
    <Fragment>
      <div className="header" style={styles.header}>
        {props.headerComponent}
      </div>
      <div className="main" style={styles.main}>
        {props.mainComponent}
      </div>
    </Fragment>
  )
}
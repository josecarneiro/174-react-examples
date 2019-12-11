import React, { Component, Fragment } from 'react';

import nameContext from './../contexts/name';

class NameInput extends Component {
  render() {
    return (
      <div>
        <nameContext.Consumer>
          {context => (
            <Fragment>
              <p>{context.user.name}</p>
              <input type="text" value={context.user.name} onChange={context.changeUser} />
            </Fragment>
          )}
        </nameContext.Consumer>
      </div>
    );
  }
}

export default NameInput;

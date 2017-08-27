// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import Humburger          from './humburger/Humburger';
import RightNav           from './rightNav/RightNav';

const NavigationBar = ({
  brand,
  handleRightNavItemClick
}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="containersCustom">
        <div className="navbar-header">
          {
            <Humburger />
          }
          <a className="navbar-brand">
            {brand}
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {
              <RightNav
                onRightNavButtonClick={handleRightNavItemClick}
              />
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavigationBar.propTypes = {
  brand:                    PropTypes.string,
  handleRightNavItemClick:  PropTypes.func
};

NavigationBar.defaultProps  = {
  brand  : 'brand'
};

export default NavigationBar;

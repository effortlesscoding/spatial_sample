// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import Humburger          from './humburger/Humburger';
import RightNav           from './rightNav/RightNav';
import auth               from '../../services/auth'


const isAuthenticated = () => {
  const checkUserHasId = user => user && user.id;
  const user            = auth.getUserInfo() 
                          ? auth.getUserInfo() 
                          : null;
  const isAuthenticated = auth.getToken() && checkUserHasId(user) 
                          ? true 
                          : false;
  return isAuthenticated;
}

const isExpired = () => {
  // comment me:
  console.log('token expires: ', auth.getTokenExpirationDate(auth.getToken()));

  return auth.isExpiredToken(auth.getToken());
}

const NavigationBar = ({
  brand,
  handleRightNavItemClick
}) => {

  const renderRightButton = () => {
    if (!isExpired() && isAuthenticated()) {
      return (
        <RightNav
          onRightNavButtonClick={handleRightNavItemClick}
        />
      )
    } else {
      return null
    }
  }

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
          {renderRightButton()}
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

// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Button }         from 'react-bootstrap';
import auth               from '../../../services/auth';

const RightNav = ({
  onRightNavButtonClick
}) => {

  const _handleLogout = (e) => {
    console.log('Log out!')
    auth.clearToken()
    location.reload();
  }
  
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Button
          onClick={_handleLogout}
        >
          Log Out
        </Button>
      </li>
    </ul>
  );
};

RightNav.propTypes = {
  onRightNavButtonClick: PropTypes.func
};

export default RightNav;

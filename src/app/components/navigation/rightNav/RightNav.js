// @flow weak

import React               from 'react';
import PropTypes           from 'prop-types';
import { Button }          from 'react-bootstrap';
import { connect }            from 'react-redux';
import { disconnectUser, } from '../../../redux/modules/userAuth';
import auth                from '../../../services/auth';

const RightNavElement = (props) => {

  const _handleLogout = (e) => {
    props.dispatchDisconnectUser()
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

RightNavElement.propTypes = {
  onRightNavButtonClick: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDisconnectUser: () => {
      dispatch(disconnectUser())
      location.reload()
    }
  }
}

const RightNav = connect(mapStateToProps, mapDispatchToProps)(RightNavElement)

export default RightNav;

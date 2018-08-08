import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="logoContainer">
        </div>
        <div className="title">
        </div>
        <div className="userInfo">
          {this.props.user}
        </div>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  user: PropTypes.string
}
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

class HeaderComponent extends React.PureComponent {

  render() {
    return (
      <div className="Header">
        <Link to='/' className="logo-link">
          <img className="Logo" src={Logo} alt="logo" />
        </Link>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);

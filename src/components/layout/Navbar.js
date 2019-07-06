import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='to' className='brand-logo'> Phu Sy </Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </nav>   
    )
  }
}

export default Navbar;
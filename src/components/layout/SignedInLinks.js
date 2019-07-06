import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class SignedInLink extends Component {
  render() {
    return (
      <ul className="right">
        <li>
            <NavLink to='/create'>New project</NavLink>
        </li>
        <li>
            <NavLink to='/'>Logout</NavLink>
        </li>
        <li>
            <NavLink to='/' className='btn btn-floating pink lighten-1'>HH</NavLink>
        </li>
      </ul>
    )
  }
}

export default SignedInLink;
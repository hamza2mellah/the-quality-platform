import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { Link, withRouter } from 'react-router';
import LogoImg from '../../public/imgs/app/avatars/flexiapps.png';
import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';

import {
  Well,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav
   } from '@sketchpixy/rubix';


@withRouter


export default class Header extends React.Component {
  render() {
    var imageStyle={height:'60px',width:'180px',marginTop:'10px'};
    return (
            <nav className="navbar navbar-inverse" >
              <div className="container-fluid">
                <div className="navbar-header">
                   <img src={LogoImg} style={imageStyle}/>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/singup"><span class="glyphicon glyphicon-user"></span><b style={{color: '#6495ED'}}>Sign Up</b></Link></li>
                  <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span><b style={{color:'#6495ED'}}>Login</b></Link></li>
                </ul>
              </div>
           </nav>
           );
  }
}

import React from 'react';
import { connect } from 'react-redux';
import {userLoginRequest} from './actions';
import axios from 'axios';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
      }
    this.onSubmit=this.onSubmit.bind(this);
  }
   
   onSubmit=e=>{
     e.preventDefault();
     var user={};
     user.usernameOrEmail=this.refs.usernameOrEmail.value;
     user.password=this.refs.password.value;
     console.log(user)
     this.props.dispatch(userLoginRequest({"usernameOrEmail": "hamza..mellah@gmail.com", "password": "Hamza*1994"}))
     .then(response=>{
          console.log(response)
      })
     .catch(error=>{
          console.log(error)      
      })
  } 
  
  render() {
    return (
       <div className="container"> 
          
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <h1 style={{color:'blue',textAlign: 'center' }} className="page-header"><strong> LOGIN</strong></h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email :</label> 
                        <input type="text" className="form-control" ref="usernameOrEmail" placeholder="username or email" />
                    </div>
                    <div className="form-group">
                        <label>Password :</label>
                        <input type="password" className="form-control" ref="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>         
            <div className="col-sm-3"></div>
                             
       </div>
    );
  }
}

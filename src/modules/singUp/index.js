import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import {userSingupRequest} from './actions';
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
export default class singUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstName:'',  
      lastName:'',
      email:'',
      username:'',
      password:'',
      passwordValid:false,   
      error:'',
      isDisable:true,

      }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

asyncState(e) {
        return { ...this.state, [e.target.name]: e.target.value };

}

  onChange(e) {
   // e.preventDefault();
 this.state=(this.asyncState(e));
    this.setState({error:''});
    if((this.state.password.length)<9)
       {
         this.setState({passwordValid:false})
       }
    else
      {
         this.setState({passwordValid:true})
      }
    if((this.state.passwordValid)&&(this.state.password)&&(this.state.email)&&(this.state.username)&&(this.state.lastName)&&(this.state.firstName))
        {
           this.setState({isDisable:false}) 
        }
    else{
      this.setState({isDisable:true})
    }
  }
  onSubmit=(e)=>{
     e.preventDefault();
     var user={};
     user.firstName=this.state.firstName;
     user.lastName=this.state.lastName;
     user.username=this.state.username;
     user.email=this.state.email;
     user.password=this.state.password;
     console.log(user)
     this.props.dispatch(userSingupRequest(user))
     .then(function (response) {
          browserHistory.push('/login');
          alert('you can login now')
      })
     .catch(error=>{
      if (error.response) {
        console.log(error.response.data.message);
        this.setState({error:error.response.data.message});
        
      }
  });

  }    
  render() {
    var {passwordValid,password}=this.state
    const passwordError=()=>{
      if(!passwordValid&&password)
        {
          return <span style={{color:'red'}}className='help-block'>the password must contain more than 6 characters</span>
        }
        return 
    };
   
    
    const handleError=()=>{
      if(this.state.error)
        {
          return <span style={{color:'red'}}className='help-block'>{this.state.error}</span>
        }
        return
    };
    return (
       <div className='container'>
             <div className="col-sm-3"></div>
             <div className="col-sm-6">
                <h1 style={{color:'blue',textAlign: 'center' }} className="page-header"><strong>SINGUP</strong></h1>
                <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                        <label>First Name :</label>
                        <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={this.onChange} />
                          
                    </div>
                    <div className="form-group">
                        <label>Last Name :</label>
                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={this.onChange}/>
                          
                    </div>
                     <div className="form-group">
                        <label>Email :</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" onChange={this.onChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Username :</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.onChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Password :</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.onChange}  value={this.state.password}/>
                        {passwordError()}
                    </div>
                    
                     
                    <button type="submit" disabled={this.state.isDisable} className="btn btn-primary btn-block">Submit</button>
                </form>
                {handleError()}
             </div>
       <div className="col-sm-3"></div>
       </div>
    );
  }
}

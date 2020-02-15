import React, { Component } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';
import Directory from './directory';
import OptionsMenu from './options-menu'
import { GoogleLogin } from 'react-google-login';

export default class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
        
    }
    
    responseGoogleSuccess = (response) => {
        console.log(response);
        this.setState({user: response});
        this.props.getUser(response);
        this.setState({loggedIn: true});
      }
      responseGoogle = (response) => {
        console.log(response);
      }
    render(){
        return (!this.state.loggedIn)? <h1> you are logged in </h1>
        :<GoogleLogin
            style={styles.LogginBtn}
            render={renderProps => (
                      <a href="#" onClick={renderProps.onClick} href="" style={styles.LogginBtn} >Click to Login</a>
                    )}
            clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogleSuccess}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
    }
}

let styles = {
    Bars: {
      display: 'flex',
      height: '100%'
    },
    Loggin:{
    },
    LogginBtn: {
          borderRadius: 12,
          color: '#7772a0',
          fontSize: 24,
          overflow: 'hidden',
          padding: 12,
          textAlign:'center',
          width: '100%',
          lineHeight: '100vh'
    },
    Sidebar: {
      width: '300px',
      backgroundColor: 'rgba(185, 185, 142, 0.7)',
      height: '100%',
  },
  NavList:{
      listStyleType: 'none',
      display: 'inline-block',
      padding: 0
  },
  ImageWrap: {
      margin: 10,
      paddingBottom:10
  },
  
  SmallLogo: {
      width: '60px',
      height: '40px',
  },
  Links: {
      height: '100%',
      background: '#a5a3969e',
  },
          
  Page: {
      float: 'left',
      textDecoration: 'none',
      color: 'rgb(80, 79, 70)',
      fontSize: '24px',
      letterSpacing: '1.5px',
      paddingBottom: 15,
      textAlign: 'center',
      hover: {
          background: "#467AE7"
      },
  },
  TreehacksLogo: {
          width: '180px',
          height: '104px',
          marginBottom: '15px',
      }
  }
  
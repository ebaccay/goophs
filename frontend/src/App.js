import React from 'react';
import Background from './img/background.jpg';
import logo from './logo.svg';
import './App.css';
import OptionsMenu from './components/options-menu';
// import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import { GoogleLogin } from 'react-google-login';
import UploadMenu from './components/upload-menu';
import Directory from './components/directory';
import Info from './components/info';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user:null,
      loggedIn:false,
      active: 1
    }
  }
  componentDidMount(){
    
  }
  getInfo=(e)=>{
    console.log(e);
    this.help();
  }
  display(){
    if(!this.state.loggedIn){
      
      return <GoogleLogin
        style={styles.LogginBtn}
        render={renderProps => (
                  <a href="#" onClick={renderProps.onClick} href="" style={styles.LogginBtn} >Click to Login</a>
                )}
        clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogleSuccess}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />;
    }else{
      return <UploadMenu user={this.state.user}/>
    }
  }
  responseGoogleSuccess = (response) => {
    console.log(response);
    this.setState({user: response});
  
    this.setState({loggedIn: true})
    
  }
  responseGoogle = (response) => {
    console.log(response);
  }
  page = (o) => {
    this.setState({active: o});
  }

  render(){
    return (
         	<div className="App" style={styles.app}>
              <div style={styles.Bars}>
              <OptionsMenu goTo={this.page}/>
              {this.display()}
            </div>
          </div>
      
    );
  }
  
}

let styles = {
  app : {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
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
  }
}

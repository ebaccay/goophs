import React from 'react';
import Background from './img/background.jpg';
import logo from './logo.svg';
import './App.css';
import OptionsMenu from './components/options-menu';
import Directory from './components/directory';
// import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'


import { GoogleLogin } from 'react-google-login';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user:null,
    }
  }
  componentDidMount(){
    
  }
  getInfo=(e)=>{
    console.log(e);
    this.help();
  }
  help(){
    // console.log(GoogleAPI.googleGetBasicProfile());
    
  }
  responseGoogle = (response) => {
    console.log(response);
    this.setState({user: response});
  }
  render(){
    return (

         	<div className="App" style={styles.app}>
             <GoogleLogin
                  clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                      
              <div style={styles.Bars}>
              <OptionsMenu/>
              <Directory user={this.state.user}/>
            </div>
          </div>
      
    );
  }
  
}

let styles = {
  app : {
    height: '822px',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  Bars: {
    display: 'flex',
    height: '100%'
  },
}

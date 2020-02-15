import React from 'react';
import logo from './logo.svg';
import './App.css';
import OptionsMenu from './components/options-menu';
import FileMenu from './components/directory';
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.GoogleAuth = null;
  }
  getInfo=(e)=>{
    console.log(e);
    this.help();
  }
  help(){
    console.log(this.gapi.googleGetBasicProfile());
  }
  render(){
    return (
      <GoogleAPI 
            ref={ref => this.gapi = ref} 
            clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
            onUpdateSigninStatus={this.getInfo}
            onLoginSuccess={this.getInfo}
            onInitFailure={Function} >
         	<div className="App" style={styles.app}>
           <div><GoogleLogin /></div>
            {/* <OptionsMenu/> */}
            <FileMenu/>
          </div>
        </GoogleAPI>
      
    );
  }
  
}

let styles = {
  app : {
    height: '100%'
  }
}

import React from 'react';
import Background from './img/background.jpg';
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
  
  render(){
    return (
      <GoogleAPI clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
            onUpdateSigninStatus={Function}
            onInitFailure={Function} >
         	<div className="App" style={styles.app}>
           <div><GoogleLogin /></div>
              <div style={styles.Bars}>
              <OptionsMenu/>
              {/* <FileMenu/> */}
            </div>
          </div>
        </GoogleAPI>
      
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

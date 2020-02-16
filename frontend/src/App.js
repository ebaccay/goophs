import React from 'react';
import Background from './img/background.jpg';
import Button from './img/google_button.jpg';
import logo from './logo.svg';
import './App.css';
import BearLogo from './img/bear.png';
import OptionsMenu from './components/options-menu';
import GooglePhotosLogo from './img/google-photos.svg';

// import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import { GoogleLogin } from 'react-google-login';
import UploadMenu from './components/upload-menu';
import Directory from './components/directory';
import Info from './components/info';

import TreehacksLogo from './img/treehacks.svg';
import Store from './store';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user:null,
      loggedIn:false,
      active: 1,
    }
    this.store = new Store();
  }
  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    
  }

  display(){
    if(!this.state.loggedIn){
      return <GoogleLogin
        style={styles.LogginBtn}
        render={renderProps => (
                  <a href="#" onClick={renderProps.onClick} href="" style={styles.LogginBtn} >
                    <img src={Button} style={styles.Login}></img>
                  </a>
                )}
        clientId="901297815426-h7npjpvqnk4480lg949fs1u2um7trcph.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogleSuccess}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />;
    }else{
      return <div style={styles.Unwrap}>
              <Route path="/upload" component={UploadMenu} />
              <Route path="/files" component={Directory} />
              <Route path="/info" component={Info} />
            </div>
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

  render(){
    return (
      <Router> 
        <div className="App" style={styles.app}>
          <div style={styles.Bars}>
            {/* <OptionsMenu goTo={this.page}/>*/}
            <div style={styles.Sidebar}>
              <div style={styles.ImageWrap}>
                <img style={styles.TreehacksLogo} src={TreehacksLogo}></img>
                <img style={styles.SmallLogo} src={BearLogo}></img>
              </div>
              <div style={styles.Links}>
                <ul style={styles.NavList}>
                  <li><Link to={{pathname:"/upload", state: {loggedIn: this.state.loggedIn}}} style={styles.Page} href="#Home">Upload</Link></li>
                  <li><Link to={{pathname:"/files", state: {loggedIn: this.state.loggedIn}}}  style={styles.Page} href="#Files">My Files</Link></li>
                  <li><Link to={{pathname:"/info", state: {loggedIn: this.state.loggedIn}}}  style={styles.Page} href="#Info">Info</Link></li>
                  <li>
                    <img src={GooglePhotosLogo} style={styles.PhotosLogo}></img>
                  </li>
                </ul>           
              </div>
            </div>
            {this.display()} 
          </div>
        </div>
      </Router>
    );
  }
}

document.body.style = "overflow:hidden";

let styles = {
  app : {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  PhotosLogo: {
    width: '120px',
    height: '120px',
    marginTop: '340px',
  },
  Bars: {
    display: 'flex',
    height: '100%'
  },
  Unwrap: {
    margin: '0px',
    padding: '0px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Login:{
    borderRadius: '5px',
    width: '420px',
    height: '80px',
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

  //

  Sidebar: {
    width: '300px',
    backgroundColor: 'rgba(185, 185, 142, 0.7)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
},
NavList:{
    listStyleType: 'none',
    display: 'inline-block',
    padding: '0',
},
ImageWrap: {
    margin: 10,
    paddingBottom:10
},

SmallLogo: {
    width: '60px',
    height: '40px',
    borderBottom: '2px solid green',
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
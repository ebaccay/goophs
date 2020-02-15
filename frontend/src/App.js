import React from 'react';
import Background from './img/background.jpg';
import logo from './logo.svg';
import BearLogo from './img/bear.png';
import TreehacksLogo from './img/treehacks.svg';
import './App.css';
import OptionsMenu from './components/options-menu';
// import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import UploadMenu from './components/upload-menu';
import Directory from './components/directory';
import Info from './components/info';

import { GoogleLogin } from 'react-google-login';
import Auth from './components/auth';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user:null,
      loggedIn:false,
      active: 1,
    }
  }
  componentDidMount(){
    
  }

  
  sendUser = (o) => {
    console.log(o);
    this.setState({user: o});
  }

  sendFiles = (o) => {
    this.setState({files: o});
  }
/**
 * 
 * 
 */
  render(){
    return (
      <Router>
         	<div className="App" style={styles.app}>
              {/* <div style={styles.Bars}>
              <OptionsMenu goTo={this.page}/>
              {this.display()}
            </div> */}
            <div style={styles.Bars}>
              <div style={styles.Sidebar}>
                  <div style={styles.ImageWrap}>
                    <img style={styles.TreehacksLogo} src={TreehacksLogo}></img>
                    <img style={styles.SmallLogo} src={BearLogo}></img>
                  </div>
                  
                  <div style={styles.Links}>
                    <ul style={styles.NavList}>
                            <li><Link to={{
                                  pathname:"/login",
                                  state: {
                                    getUser: this.sendUser
                                  } 
                                }}
                                style={styles.Page} 
                                href="#Home">
                                </Link></li>
                              <li><Link to={{
                                      pathname: "/upload",
                                      state: {
                                        loggedIn: this.loggedIn,
                                        getFiles: this.sendFiles,
                                        user: this.state.user,
                                        
                                      }
                                  }} 
                                  style={styles.Page} href="#Home">Upload
                                  </Link></li>
                              <li><Link to="/files" style={styles.Page} href="#Files">My Files</Link></li>
                              <li><Link to="/info" style={styles.Page} href="#Info">Info</Link></li>
                          </ul>
                  </div>
              </div>
              <Switch>
                  <Route path="/login" component={Auth} />
                  <Route path="/upload" component={UploadMenu} />
                  <Route path="/files" component={Directory} />
                  <Route path="/info" component={Info} />
              </Switch> 
            </div>
            
          </div>
                   
          </Router>
      
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


/**
 * 
 *   getInfo=(e)=>{
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
 */
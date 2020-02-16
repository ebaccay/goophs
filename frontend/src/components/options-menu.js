import React, { Component } from 'react';
import BearLogo from '../img/bear.png';
import TreehacksLogo from '../img/treehacks.svg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import UploadMenu from './upload-menu';
import Directory from './directory';
import Info from './info';

export default class OptionsMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    sendClick = (o) => {
        this.props.goTo(o);
    }

    componentDidMount(){
    
    }
    getInfo=(e)=>{
      console.log(e);
      this.help();
    }

    render(){
        return (
                <div style={styles.Sidebar}>
                    <div style={styles.ImageWrap}>
                    <img style={styles.TreehacksLogo} src={TreehacksLogo}></img>
                    <img style={styles.SmallLogo} src={BearLogo}></img>
                    </div>
                    
                    <div style={styles.Links}>
                    <Router>   
                            <ul style={styles.NavList}>
                                <li><Link to="/upload" style={styles.Page} href="#Home">Upload</Link></li>
                                <li><Link to="/files" style={styles.Page} href="#Files">My Files</Link></li>
                                <li><Link to="/info" style={styles.Page} href="#Info">Info</Link></li>
                            </ul>
                            
                            <Route path="/upload" component={UploadMenu} />
                            <Route path="/files" component={Directory} />
                            <Route path="/info" component={Info} />
                    </Router>
                    </div>
                </div>
        )
    }
}

let styles = {
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
        padding: 0
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
        },
}

/**
 * 
 * 
 *  Sidebar: {
        // width: '240px',
        // backgroundColor: 'rgba(185, 185, 142, 0.7)',
        // display: 'flex',
        // justifyContent: 'center',
        // height: '100%',
        // margin: '0px',
        // padding: '0px'
        width: '300px',
        backgroundColor: 'rgba(185, 185, 142, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        paddingTop: '20px'
    },
        Navbar: {
            //paddingRight: '28px',
            paddingTop: '30px',
            position: 'fixed',
            //border: '1px solid black',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'flex-start',
        },
            SmallLogo: {
                width: '60px',
                height: '40px',
                //marginBottom: '15px',
                //border: '1px solid black'
            },
            NavList: {
                listStyle: 'none',
                //margin: '0px',
                //padding: '0px',
                lineHeight: '45px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            },
                Page: {
                    float: 'left',
                    textDecoration: 'none',
                    //alignSelf: 'flex-end',
                    color: '#20489C',
                    fontSize: '36px',
                    fontFamily: '"Raleway", sans-serif',
                    letterSpacing: '1.3px',
                    fontWeight: 'lighter',
                    "&:hover": {
                        background: "#467AE7"
                      },
                },
        TreehacksLogo: {
            width: '180px',
            height: '104px',
            marginBottom: '15px',
            paddingBottom: '100px',
            alignSelf: 'flex-end',
            position: 'fixed',
            //border: '1px solid black'
        }
 */
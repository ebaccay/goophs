import React, { Component } from 'react';
import BearLogo from '../img/bear.png';
import TreehacksLogo from '../img/treehacks.svg';

export default class OptionsMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div style={styles.Sidebar}>
                <div style={styles.Navbar}>
                    <img style={styles.SmallLogo} src={BearLogo}></img>
                    <ul style={styles.NavList}>
                        <li><a style={styles.Page} href="#Home">Home</a></li>
                        <li><a style={styles.Page} href="#Files">Files</a></li>
                        <li><a style={styles.Page} href="#Info">Info</a></li>
                    </ul>
                </div>
                <img style={styles.TreehacksLogo} src={TreehacksLogo}></img>
            </div>
        )
    }
}

let styles = {
    Sidebar: {
        width: '240px',
        backgroundColor: 'rgba(185, 185, 142, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        margin: '0px',
        padding: '0px',
        border: '1px solid black',
    },
        Navbar: {
            //paddingRight: '28px',
            paddingTop: '30px',
            position: 'fixed',
            //border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
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
                border: '1px solid black'
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
}
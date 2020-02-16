import React, { Component } from 'react';
import BearLogo from '../img/bear.png';
import GooglePhotosLogo from '../img/google-photos.svg';
import GoogleLogo from '../img/google-logo.png';

export default class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div style={styles.MainBar}>
                <div style={styles.Title}>
                    <img src={BearLogo} style={styles.BigLogo}></img>
                    <h1 style={styles.BearBones}>Bear Bones Storage</h1>
                </div>
                <div style={styles.Explanation}>
                    <div style={styles.Photos}>
                        <img src={GooglePhotosLogo} style={styles.PhotosLogo}></img>
                    </div>
                    <h2 style={styles.InfoHeader}>Unlimited File Storage</h2>
                    <p style={styles.InnerText}>Making use of the fact that google photos allows for unlimited storage, we've decided to exploit the fact that files can be embeded into photographs. <br /><br />We store our client's files in the google cloud through means of google photos, allowing us unlimited file storage. <br /><br />Essentially, We're dropbox but free.</p>
                    <h2 style={styles.InfoHeader}>The Technology</h2>
                    <h3 style={styles.TechHeader}>Backend</h3>
                        <ul style={styles.TechList}>
                            <li>Google Cloud Platform</li>
                            <li>LSB Steganography</li>
                            <li>Jupyter</li>
                        </ul>
                    <h3 style={styles.TechHeader}>Frontend</h3>
                        <ul style={styles.TechList}>
                            <li>React.js</li>
                            <li>OAuth</li>
                            <li>FilePond</li>
                        </ul>
                    <div style={styles.Photos}>
                        <img src={GoogleLogo} style={styles.GoogleLogo}></img>
                    </div>
                </div>       
            </div>
        )
    }
}

let styles = {
    MainBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        //paddingLeft: '40px',
        //paddingTop: '20px',
        //border: '2px solid green',
    },
        Title: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '40px',
            paddingTop: '20px',
        },
            BigLogo: {
                marginRight: '30px',
                width: '90px',
                height: '60px',
                borderBottom: '2px solid green',
            },
            BearBones: {
                paddingTop: '6px',
            },
        Explanation: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            //border: '2px solid green',
        },
            Photos: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
                PhotosLogo: {
                    width: '120px',
                    height: '120px',
                    marginRight: '20px',
                },
            InfoHeader: {
                borderBottom: '2px solid green',
                width: '95%',
                marginBottom: '22px',
            },
                InnerText: {
                    //paddingLeft: '20px',
                    marginTop: '0px',
                    paddingTop: '0px',
                },
            TechHeader: {
                //marginLeft: '20px',
                marginTop: '0px',
                paddingTop: '0px',
                marginBottom: '12px',
                borderBottom: '2px solid green',
                width: '20%',
                margin: 'auto',
            },
                TechList: {
                    listStyle: 'none',
                    marginTop: '12px',
                    marginLeft: '0px',
                    paddingLeft: '0px',
                    paddingTop: '0px',
                    marginBottom: '10px',
                },

            GoogleLogo: {
                marginTop: '0px',
                paddingTop: '0px',
                width: '315px',
                height: '180px',
            },
}
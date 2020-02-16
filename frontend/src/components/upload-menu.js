import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';
import Directory from './directory';
import OptionsMenu from './options-menu'
import BearLogo from '../img/bear.png';
import Store from '../store';
const cors = require('cors');




const corsOptions = {
    origin: 'http://localhost:3000'
  }

export default class UploadMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            directories: [],
            user: null,
        }
        this.upload = this.upload.bind(this);
        this.store = new Store();
    }
    
    upload = () => {
        console.log("upload");
        if(this.state.file!=null){
            console.log(this.state.file[0]);
            this.store.updateFiles(this.state.file[0]);
        }

        
    }
    handleFileUpload=( ) =>{
        // var d = document.querySelector('input[type="file"]').files[0];
        // console.log(d);
        if (this.state.files != undefined){
            this.store.updateFiles(
                this.state.files[0]
             )
        }
        //Auto Redirect Router
        return <Route path="/files" component={Directory} />
      }
    render(){
        return (
            <div className="MainBar">
                <div style={styles.UploadMenu}>
                    <div style={styles.Title}>
                        <img src={BearLogo} style={styles.BigLogo}></img>
                        <h1 style={styles.BearBones}>Bear Bones Storage</h1>
                    </div>
                    <div style={styles.Uploader}>
                        <FilePond 
                            ref={ref => this.pond = ref} 
                            allowMultiple={true} 
                            files={this.state.files}
                            onupdatefiles={(f) => {
                                this.setState({files: f.map(f=>f.file)})
                            }}/>
                        {/* Link to reconnect to file page */} 
                        <Link to={{pathname:"/files", state: {loggedIn: this.state.loggedIn}}}  style={styles.Page} href="#Files">
                            <button style={styles.Button} onClick={this.handleFileUpload}>
                                Upload
                            </button>
                        </Link>
                    </div>
                </div>
                <div style={styles.InfoDiv}>
                    <Link to={{pathname:"/info", state: {loggedIn: this.state.loggedIn}}}  style={styles.InfoButton} href="#Info">About Us</Link>
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
        alignContent: 'center',
        height: '100%',
        //paddingLeft: '40px',
        //paddingTop: '20px',
        //border: '2px solid blue',
    },
    UploadMenu: {
        width: '97%',
        display: 'flex',
        height: '100%',
        //display: 'inline-block',
        //marginTop: '40px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '6px',
        //border: '2px solid black',
    },
    Title: {
        display: 'flex',
        alignItems: 'center',
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
    Uploader: {
        width: '100%',
        //border: '1px solid black',
    },
    Button: {
        display: 'inline-block',
        border: 'none',
        borderRadius: '6px',
        padding: '1rem 2rem',
        margin: '0',
        textDecoration: 'none',
        background: 'rgba(185, 185, 142, 0.9)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        cursor: 'pointer',
        textAlign: 'center',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
    },
    InfoDiv: {
        height: '100%',
        width: '100%',
        display: 'flex',
        //border: '1px solid black',
        marginLeft: '10%',
        alignSelf: 'flex-end',
    },
    InfoButton: {
        textDecoration: 'none',
        color: '#ffffff',
        fontSize: '1rem',
        padding: '15px',
        alignSelf: 'flex-end',
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'rgba(185, 185, 142, 0.9)',
        borderRadius: '6px',
        //border: '1px solid black',
    },
}
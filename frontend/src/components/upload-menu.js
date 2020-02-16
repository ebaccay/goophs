import React, { Component } from 'react';
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
        // this.store.updateFiles(
        //    d
        // )
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
                        <button style={styles.Button} onClick={this.upload}>Upload</button>
                
                    </div>
                </div>
                <div style={styles.Uploader}>
              
                    <FilePond 
                        ref={ref => this.pond = ref} 
                        files={this.state.file? this.state.file[0]: ""}
                        
                        // server="https://cors-anywhere.herokuapp.com/https://us-central1-goophs-268309.cloudfunctions.net/upload-phile"
                        onupdatefiles={(f) => {

                            this.setState({file: f})
                            console.log(f);
                        }}/>
                    <button style={styles.Button} onClick={this.upload}>Upload</button>
             
            </div></div>
        )
    }
}

let styles = {
    MainBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        //alignContent: 'center',
        height: '100%',
        //paddingLeft: '40px',
        //paddingTop: '20px',
        //border: '2px solid green',
    },
    UploadMenu: {
        width: '97%',
        display: 'flex',
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
    }
}
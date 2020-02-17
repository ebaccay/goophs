import React, { Component } from 'react';
import UploadMenu from './upload-menu';
import File from './file';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Store from '../store';
import BearLogo from '../img/bear.png';

export default class Directory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            directories: [],
            files: [],
        }
        this.store = new Store();
    }
    componentDidMount(){
    }
    getFiles = () => {
        this.setState({files: test});
        // get request to all files here
    }

    render(){
        console.log(this.store.state.files);
        return (
            <div style={styles.MainBar}>
                <div style={styles.Title}>
                    <img src={BearLogo} style={styles.BigLogo}></img>
                    <h1 style={styles.BearBones}>Bear Bones Storage</h1>
                </div>
                <div style={styles.FileMenu}>
                    {/* <UploadMenu files={this.getFiles} user={this.props.user}/> */}
                    {/* <ul style={styles.Directories}>
                        {this.props.directories.map((item, index) => (
                            // <Directory key={index} name={item.name}/>
                        <Link key={index} to={`/+${item.name}`}>{item.name}</Link>
                        // <Route path={`/:itemName/:topicId`} component={Directory}/>
                        ))}
                    </ul> */}
                    <ul style={styles.Files}>
                        {this.store.fetchFiles().map((item, index) => (
                            <File key={index} name={item.name}/>
                        ))}
                    </ul>
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
        alignItems: 'center',
        height: '100%',
        //paddingLeft: '40px',
        //paddingTop: '20px',
        //border: '2px solid green',
    },
        Title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            //paddingLeft: '40px',
            //AlignSelf: 'flex-end',
            padding: '0px',
            paddingTop: '20px',
            //border: '2px solid green',
        },
            BigLogo: {
                margin: '0px',
                padding: '0px',
                marginRight: '30px',
                width: '90px',
                height: '60px',
                borderBottom: '2px solid green',
            },
            BearBones: {
                margin: '0px',
                padding: '0px',
                paddingTop: '6px',
                //border: '2px solid green',
            },
    FileMenu: {
        width: '100%',
        //border: '2px solid green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    Directories: {
        width: '100%',
        listStyleType: 'none',
    },
    Files: {
        //border: '2px solid green',
        border: 'none',
        width: '95%',
        listStyleType: 'none',
        paddingLeft: '0px',
    }
}
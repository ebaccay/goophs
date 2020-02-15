import React, { Component } from 'react';
import UploadMenu from './upload-menu';
import File from './file';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

var test = {
    f1: {
        name: 'f1'
    },
    f2: {
        name: 'f2'
    },
    f3: {
        name: 'f3'
    }
}
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { Link } from 'react-router-dom';

export default class Directory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            directories: [],
            files: [],
        }
    }
    componentDidMount(){
    }
    getFiles = () => {
        this.setState({files: test});
        // get request to all files here
    }

    render(){
        return (
            
                <div style={styles.FileMenu}>
                    {/* <UploadMenu files={this.getFiles} user={this.props.user}/> */}
                    <ul style={styles.Directories}>
                        {this.props.directories.map((item, index) => (
                            // <Directory key={index} name={item.name}/>
                        <Link key={index} to={`/+${item.name}`}>{item.name}</Link>
                        // <Route path={`/:itemName/:topicId`} component={Directory}/>
                        ))}
                    </ul>
                    <ul style={styles.Files}>
                        {this.props.files.map((item, index) => (
                            <File key={index} name={item.name}/>
                        ))}
                    </ul>
                    
                </div>
             
            
        )
    }
}
let styles = {
    FileMenu: {
        width: '100%'
    },
    Directories: {
        listStyleType: 'none',
    },
    Files: {
        listStyleType: 'none',
    }
}
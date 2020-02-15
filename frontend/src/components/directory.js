import React, { Component } from 'react';
import UploadMenu from './upload-menu';
import File from './file';

// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { Link } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
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
    getFiles = (data) => {
        this.setState({files: data});
        // get request to all files here
    }

    render(){
        return (
            <Router>
                <div style={styles.FileMenu}>
                    <UploadMenu files={this.getFiles}/>
                    <ul style={styles.Directories}>
                        {this.state.directories.map((item, index) => (
                            // <Directory key={index} name={item.name}/>
                        <Link key={index} to={`/+${item.name}`}>{item.name}</Link>
                        // <Route path={`/:itemName/:topicId`} component={Directory}/>
                        ))}
                    </ul>
                    <ul style={styles.Files}>
                        {this.state.files.map((item, index) => (
                            <File key={index} name={item.name}/>
                        ))}
                    </ul>
                    
                </div>
             </Router>
            
        )
    }
}
let styles = {
    Directories: {
        listStyleType: 'none',
    },
    Files: {
        listStyleType: 'none',
    }
}
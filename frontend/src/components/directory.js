import React, { Component } from 'react';
import UploadMenu from './upload-menu';
import File from './file';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Store from '../store';

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
        return (
            
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
import React, { Component } from 'react';
import UploadMenu from './upload-menu';
import File from './file';

export default class Directory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            directories: [],
            files: []
        }
    }
    componentDidMount(){

    }
    getFiles = (data) => {
        this.setState({files: data});
    }

    render(){
        return (
            <div style={styles.FileMenu}>
                <UploadMenu files={this.getFiles}/>
                <ul style={styles.Directories}>
                    {this.state.directories.map((item, index) => (
                        <Directory key={index} name={item.name}/>
                    ))}
                </ul>
                <ul>
                    {this.state.files.map((item, index) => (
                        <File key={index} name={item.name}/>
                    ))}
                </ul>
            </div>
        )
    }
}
let styles = {
    Directories: {
    },
    Files: {
        
    }
}
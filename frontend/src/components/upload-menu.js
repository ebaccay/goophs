import React, { Component } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default class UploadMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            files: []
        }
        this.upload = this.upload.bind(this);
    }
    upload = () => {
        this.setState({files: this.pond.getFiles()});
        console.log(this.state.files);  
        this.props.files(this.state.files); 
        
        // grab api key and file data and send to backend here
    }
    render(){
        return (
            <div style={styles.UploadMenu}>
                <FilePond 
                    ref={ref => this.pond = ref} 
                    allowMultiple={true} 
                    files={this.state.files}
                    onupdatefiles={(f) => {
                        this.setState({files: f.map(f=>f.file)})
                    }}/>
                <button style={styles.Button} onClick={this.upload}>Upload</button>
            </div>
        )
    }
}

let styles = {
    UploadMenu: {
        width: '100%',
        display: 'inline-block',
        background: '#f9f9f9',
        padding: '10px',
        borderRadius: '6px'
    },
    Button: {
        backgroundColor: '#7772a0',
        borderRadius: 12,
        color: 'white',
        fontSize: 14,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        width: '200px'
    }
}
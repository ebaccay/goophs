import React, { Component } from 'react';

export default class File extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            key: ""
        }
    }
    componentDidMount(props){
    }
    download = () =>{
        console.log("downloading");
        
    }
    render(){
        return (
            <li style={styles.File}>
                <div>
                    <span>
                        <p style={styles.Title}>{this.props.name}</p>
                        <a styles={styles.Download} href="#" onClick={this.download}>Download</a>
                    </span>
                </div>
            </li>
        )
    }
}

let styles={
    File: {
        borderTop: '1px solid',
        paddingBottom: '10px'
    },
    Title: {
        left:0
    },
    Download: {
        right: 0
    }
}
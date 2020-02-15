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
                    <p>{this.props.name}</p>
                    <a href="#" onClick={this.download}>Download</a>
                </div>
            </li>
        )
    }
}

let styles={
    File: {
        borderTop: '1px solid',
        paddingBottom: '10px'
    }
}
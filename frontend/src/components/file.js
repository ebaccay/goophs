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
    render(){
        return (
            <li >
                <div>
                    <p>{this.props.name}</p>
                    <a>Download</a>
                </div>
            </li>
        )
    }
}

let styles={
    
}
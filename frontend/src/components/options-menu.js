import React, { Component } from 'react';

export default class OptionsMenu extends React.Component {

    constructor(props){
        super(props);
        let state = {
            
        }
    }
    render(){
        return (
            <div>
                <ul style={styles.optionsList}>
                    <li>Home</li>
                    <li>Files</li>
                </ul>
            </div>
        )
    }
}

let styles = {
    optionsList : {
        background: 'red'
    }
}
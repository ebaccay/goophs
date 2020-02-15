import React, { Component } from 'react';

export default class OptionsMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
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
        // background: 'grey',
        // width: '40%',
        // height: '100%',
        width: '25%',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    zindex: '999',
    background: 'whitesmoke',
    }
}
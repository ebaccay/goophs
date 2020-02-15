import React, { Component } from 'react';
import axios from 'axios';

export default class Store  {
    state = {
        user: null,
        files: [{name: 'file.txt'},{name: 'file.png'},{name: 'file.jpg'},{name: 'file.jpeg'}],
        isLoggedIn: false
    }
    fetchFiles = () => {
    //     return axios({
    //         url: `https://us-central1-goophs-268309.cloudfunctions.net/upload-phile`, // need endpoint
            
    //         method: 'get',
    //         timeout: 8000,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //    .then(res => {
    //         console.log(res);
            
    //         // update file list here
    //         return res;
    //    })
       return this.state.files;
    }
    updateFiles = (f) => {
        // api call here to insert files
        console.log("update files");
        console.log(f);
        // grab api key and file data and send to backend here
        return axios({
            url: `https://us-central1-goophs-268309.cloudfunctions.net/upload-phile`, // update endpoint
            
            method: 'post',
            data: {
                account: this.state.user,
              },
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            }
        })
       .then(res => {
            console.log(res);
            
            // update file list here
            return res;
       })
    }
    login = (u) => {
        this.setState({user: u});
        this.setState({isLoggedIn: true});
    }
}
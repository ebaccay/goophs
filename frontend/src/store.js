import React, { Component } from 'react';
import axios, {post} from 'axios';
const {Storage} = require('@google-cloud/storage');

export default class Store  {
    state = {
        user: null,
        files: [{name: 'file.txt'},{name: 'file.png'},{name: 'file.jpg'},{name: 'file.jpeg'}],
        isLoggedIn: false
    }
    async initGCP(){
        const storage = new Storage();

        try {
            // Makes an authenticated API request.
            const results = await storage.getBuckets();

            const [buckets] = results;

            console.log('Buckets:');
            buckets.forEach(bucket => {
                console.log(bucket.name);
            });
        } catch (err) {
            console.error('ERROR:', err);
        }
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
        const formData = new FormData();
        formData.append('file',f);
        console.log('formData');
        console.log(formData);
        let sfile = {
            id: f.id,
            origin: f.origin,
            serverId: f.serverId,
            transferId: f.transferId,
            status: f.status,
            filename: f.filename,
            filenameWithoutExtension: f.filenameWithoutExtension,
            fileExtension: f.fileExtension,
            fileType: f.fileType,
            fileSize: f.fileSize,
            file: f.file,
            relativePath: f.relativePath,
            source: f.source
        }
        console.log("sfile");
        console.log(JSON.toString(sfile));
        // grab api key and file data and send to backend here
        return axios.post(`https://cors-anywhere.herokuapp.com/https://us-central1-goophs-268309.cloudfunctions.net/upload`, // update endpoint
            {data: {'file':f}
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            //  }
        })
       .then(res => {
            console.log(res);
            
            // update file list here
            return res;
       }).catch(e=>{
        console.log(e);
    })
    }
    login = (u) => {
        this.setState({user: u});
        this.setState({isLoggedIn: true});
    }
}
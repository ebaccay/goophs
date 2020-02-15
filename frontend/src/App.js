import React from 'react';
import logo from './logo.svg';
import './App.css';
import OptionsMenu from './components/options-menu';
import FileMenu from './components/directory';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App" style={styles.app}>
        {/* <OptionsMenu/> */}
        <FileMenu/>
      </div>
    );
  }
  
}

let styles = {
  app : {
    height: '100%'
  }
}

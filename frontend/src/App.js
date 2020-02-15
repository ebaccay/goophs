import React from 'react';
import Background from './img/background.jpg';
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
        <div style={styles.Bars}>
          <OptionsMenu/>
          {/* <FileMenu/> */}
        </div>
      </div>
    );
  }
  
}

let styles = {
  app : {
    height: '822px',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  Bars: {
    display: 'flex',
    height: '100%'
  },
}

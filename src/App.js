import React, { Component } from 'react';
import './App.css';
import RichEditor from './RichEditor';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/hello')
      .then(response => response.json())
      .then(response => {
        console.log('res:', response);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <RichEditor />
      </div>
    );
  }
}

export default App;

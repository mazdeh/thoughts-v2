import React, { Component } from 'react';
import './App.css';
import TextEditor from './TextEditor';

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
        <TextEditor />
      </div>
    );
  }
}

export default App;

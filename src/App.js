import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button id="sendPost" type="button" onClick={this.sendPost}>Send Post</button>
      </div>
    );
  }

  sendPost = async () => {
    const response = await fetch(new Request('http://localhost:3000/bla', {
      method: 'post',
      body: '{data: \'bla\'}',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }), {
      credentials: 'include'
    });
  }
}

export default App;

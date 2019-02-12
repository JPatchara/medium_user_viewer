import React, { Component } from 'react';
import logo from './assets/images/mediumLogo.png';
import './assets/styles/App.css';

class App extends Component {

  callMediumSDK() {
    var medium = require('medium-sdk')
    var client = new medium.MediumClient({
      clientId: 'f64c891179d4',
      clientSecret: '87697fc303fd6f56352178f058487d322897cd86',
      accessToken: ''
    })
    var redirectURL = '/'
    var url = client.getAuthorizationUrl('secretState', redirectURL, [
      medium.Scope.BASIC_PROFILE, medium.Scope.LIST_PUBLICATIONS
    ])
    console.log(url)

    // client.exchangeAuthorizationCode('a1741ca8afe8', redirectURL, function (token) {
    //   client.getUser(function (user) {
    //     console.log(user)
    //     return {
    //       MediumUserName: user.username,
    //       MediumAccountName: user.name,
    //       MediumProfileImage: user.url
    //     }
    //   })
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">
            Medium User Viewer
          </p>
          <button className="App-button" alt="sign-in button" onClick={() => this.callMediumSDK()}>
            Sign in
          </button>
          <a className="App-link" href="https://medium.com/" target="_blank" rel="noopener noreferrer">
            Medium Corporation
          </a>
        </header>
      </div>
    );
  }
}

export default App;

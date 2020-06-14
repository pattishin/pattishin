import React, { Component } from 'react';
import loadingAnimation from '../../assets/animated.gif';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <img src={loadingAnimation} className="logoAnimation" alt="logo"/>  
        <p>Loading ...</p>
      </div>
    );
  }
}

export default Loading;



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishList from './WishList/WishList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WishList wishlist={this.props.wishlist}/>
      </div>
    );
  }
}

export default App;

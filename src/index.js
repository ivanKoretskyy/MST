import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { WishListModel } from './models/WishlistModel';

const list = WishListModel.create({list: [
  {
    name: 'cars',
    price: 100
  },
  {
    name: 'home',
    price: 200
  }
]})

ReactDOM.render(<App wishlist={list}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

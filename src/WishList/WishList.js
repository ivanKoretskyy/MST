import React, {Component} from 'react';

import { observer } from 'mobx-react';
import WishListitem from './WishListitem';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

class WishList extends Component {

  render() { 
    return (
      <div>
        {this.props.wishlist.list.map(el => (
        <WishListitem item={el} key={el.name}/>))}
        <button onClick={this.save}>save</button>
        <span> total price:  {this.props.wishlist.totalPrice}</span>
      </div>
    );
  }
}
 
export default observer(WishList);
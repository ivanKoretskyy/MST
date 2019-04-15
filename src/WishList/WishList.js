import React, {Component} from 'react';

import { observer } from 'mobx-react';
import WishListitem from './WishListitem';
import WishListEntry from './WishListEntry';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

class WishList extends Component {

  render() { 
    return (
      <div>
        {this.props.wishlist.list.map(el => (
        <WishListitem item={el} key={el.name}/>))}
        <button onClick={this.save}>save</button>
        <span> total price:  {this.props.wishlist.totalPrice}</span>
        <h4>Add new</h4>
        <WishListEntry wishlist={this.props.wishlist}/>
      </div>
    );
  }
}
 
export default observer(WishList);
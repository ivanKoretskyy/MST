import React, {Component} from 'react';
import { WishListItemModel } from '../models/WishlistModel';
import { observer } from 'mobx-react';
import WishItem from './WishListitem';

class WishListEntry extends Component {
  state = {
    item: WishListItemModel.create({
      name: '',
      price: 0,
    })
  }

  onAdd =() => {
    this.props.wishlist.addWishlist(this.state.item)
  }
  render() { 
    return (
      <>
      <WishItem item={this.state.item} />
      <button onClick={this.onAdd}>add</button>
      </>
    );
  }
}
 
export default observer(WishListEntry);
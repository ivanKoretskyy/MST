import React, {Component} from 'react';

import { observer } from 'mobx-react';
import WishListitem from './WishListitem';

const list = [
  {
    name: 'name1',
    price: 1
  },
  {
    name: 'name2',
    price: 2
  }
]

class WishList extends Component {

  render() { 
    return (
      <div>
        {list.map(el => (
        <WishListitem item={el} key={el.name}/>))}
      </div>
    );
  }
}
 
export default observer(WishList);
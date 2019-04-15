import React, { Component} from 'react';

import { observer } from 'mobx-react';

class WishItem extends Component {
  render() { 
    return (
      <div>
        <span>{this.props.item.name}</span> 
        <span>{this.props.item.price}</span>
      </div>
    );
  }
}
 
export default observer(WishItem);
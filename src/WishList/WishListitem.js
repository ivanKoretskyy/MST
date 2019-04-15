import React, { Component} from 'react';

import { observer } from 'mobx-react';
import { clone } from 'mobx';

class WishItem extends Component {

  onChangeName(e) {
    this.props.item.changeName(e.target.value)
  }

  onChangePrice = (e) => {
    this.props.item.changePrice(+e.target.value)
  }

  render() { 
    return (
      <div>
        <span>{this.props.item.name}, </span>
        <input type="text" value={this.props.item.name} onChange={this.onChangeName.bind(this)} />
        <span>{this.props.item.price}</span>
        <input onChange={this.onChangePrice} value={this.props.item.price} type="number"/>
      </div>
    );
  }
}
 
export default observer(WishItem);
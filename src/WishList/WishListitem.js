import React, { Component} from 'react';

import { observer } from 'mobx-react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

class WishItem extends Component {
  state={
    edit: false,
  }

  activeEdit =() =>{
    this.setState({edit: true, clone: clone(this.props.item)})
  }

  onChangeName(e) {
    this.props.item.changeName(e.target.value)
  }

  onChangePrice = (e) => {
    this.state.clone.changePrice(+e.target.value)
  }

  save = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.clone));
    this.setState({
      edit: false,
      clone: null
    })
  }

  cancel = () => {
    this.setState({
      edit: false,
      clone: null
    })
  }

  render() { 
    return (
      <div>
        <span>{this.props.item.name}, </span>
        {this.state.edit &&
          <input type="text" value={clone.name} onChange={this.onChangeName.bind(this)} />
        }
        
        <span>{this.props.item.price}</span>
        {this.state.edit &&
        <input onChange={this.onChangePrice} value={this.state.clone.price} type="number"/>
        }
        <button onClick={this.activeEdit}>edit</button>
        <button onClick={this.save}>save</button>
        <button onClick={this.cancel}>cancel</button>
        
      </div>
    );
  }
}
 
export default observer(WishItem);
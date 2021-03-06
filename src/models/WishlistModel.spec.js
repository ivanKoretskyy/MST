import { WishListItemModel, WishListModel } from './WishlistModel';

import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';

import { reaction } from 'mobx';

describe('modle', ()=> {
  it('should create item',() => {
    const item = WishListItemModel.create({
      name: 'car',
      price: 34
    })
    expect(item.price).toEqual(34)
  })

  it('should change name', () => {
    const item = WishListItemModel.create({
      name: 'car',
      price: 34
    });

    item.changeName('House');
    expect(item.name).toEqual('House');
  })

  it('should change price', () => {
    const item = WishListItemModel.create({
      name: 'car',
      price: 34
    });

    item.changePrice(66);
    expect(item.price).toEqual(66);
  })

// --------------------------------list tests----------------------
  it('should create list',() => {
    const items = WishListModel.create({
      list: [{      name: 'car',
      price: 34}]
    })
    expect(items.list[0].price).toEqual(34)
  })


  it('should add item to  list',() => {
    const items = WishListModel.create()
    const states = []
    onSnapshot(items, snapshot => {
      states.push(snapshot);
    })

    const patches = []
    onPatch(items, patch => {
      patches.push(patch);
    })

    items.addWishlist(WishListItemModel.create({
      name: 'car',
      price: 34
    }));

    expect(items.list[0].price).toEqual(34)
    items.list[0].changePrice(66);
    expect(items.list[0].price).toEqual(66)
    expect(getSnapshot(items)).toMatchSnapshot();
    expect(states).toMatchSnapshot();
    expect(patches).toMatchSnapshot();
  })

  it('should calculate toal price', () => {
    const wishlist = WishListModel.create({
      list: [
        {
          name: 'a',
          price: 4
        },
        {
          name: 'b',
          price: 4
      }
      ]
    })

    reaction(() => wishlist.totalPrice, (price) => console.log(price))
    const price = wishlist.totalPrice;
    expect(price).toEqual(8);
    wishlist.addWishlist({
      name: 'bike',
      price: 44,
    })
    expect(wishlist.totalPrice).toEqual(52)

  })
})
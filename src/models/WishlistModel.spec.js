import { WishListItemModel, WishListModel} from './WishlistModel';

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

    items.addWishlist({
      name: 'car',
      price: 34
    });

    expect(items.list[0].price).toEqual(34)
  })
})
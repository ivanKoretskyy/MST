import { types, destroy, getParent } from "mobx-state-tree";

export const WishListItemModel = types.model({
  name: types.string,
  price: types.number,
  image: ''
}).actions(self => ({
  changeName: (newName) => {
    self.name = newName;
  },
  changePrice: (newPrice) => {
    self.price = newPrice;
  },
  changeImage: (newImage) => {
    self.image = newImage
  },
  remove: () => {
    getParent(self, 2).remove(self)
  }
}));

export const WishListModel = types.model({
  list: types.optional(types.array(WishListItemModel), [])
})
.actions(self => ({
  addWishlist: (wishlist) => {
    self.list.push(wishlist)
  },
  removeItem: (item) => {
    destroy(item);
  }
}))
.views(self => ({
  get totalPrice() {
    return self.list.reduce((acc, element) => acc + element.price, 0)
  }
}))
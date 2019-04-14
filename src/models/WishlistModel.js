import { types } from "mobx-state-tree";

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
  }
}));

export const WishListModel = types.model({
  list: types.optional(types.array(WishListItemModel), [])
})
.actions(self => ({
  addWishlist: (wishlist) => {
    self.list.push(wishlist)
  }
}))
import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    addedToCart: (state, action) => {
      const {id, quantity, title, price, image} = action.payload;
      if(state.items[id])
        state.items[id].quantity += quantity;
      else
        state.items[id] = {quantity,title, price, image};
    },
    removedFromCart: (state,action) => {
      const id = action.payload;
      if(state.items[id].quantity === 1)
        delete state.items[id];
      else
        state.items[id].quantity -= 1;
    },
    deletedFromCart: (state, action) => {
      const id = action.payload;
      if(state.items[id])
        delete state.items[id];
    }
  }
});
export const {addedToCart, removedFromCart, deletedFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
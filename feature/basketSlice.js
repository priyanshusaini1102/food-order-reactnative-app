import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
      let items = state.items;

      let index = items.findIndex(item => item.id==action.payload.id);
      if(index>=0){
        items.splice(index, 1);
      }

      state.items = items;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state,id) => state.basket.items.filter(item => item.id === id);
export const totalPrice = (state) => state.basket.items.reduce((totalPrice, item) => totalPrice + item.price, 0);

export default basketSlice.reducer
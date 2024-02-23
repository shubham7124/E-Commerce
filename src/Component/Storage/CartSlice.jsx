import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity += 1;
      } else {
        // If the item does not exist in the cart, add it as a new item
        state.items.push({ id, name, price, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },

    incementQuntity: (state, action) => {
      const { id } = action.payload;
      console.log(id)
      const existingItem = state.items.find(item => item.id === id);
      console.log(existingItem)
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity += 1;
    }
  },
  decrementQuntity:(state,action)=>{
    const {id} =action.payload;
    const existingItem=state.items.find(item=> item.id===id)
    if(existingItem)
    {
      if(existingItem.quantity>1)
      {
         existingItem.quantity-=1;
      }
    }
  },
  clearAll: (state) => {
    state.items=[];
  },

    // Add more reducers as needed
  },
});

export const { addToCart, removeFromCart,incementQuntity,decrementQuntity,clearAll } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;

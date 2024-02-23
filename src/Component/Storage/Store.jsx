import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './CartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

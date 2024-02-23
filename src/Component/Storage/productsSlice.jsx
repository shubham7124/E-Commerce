import { createSlice } from '@reduxjs/toolkit';
import airdopes from "../img/Airdopes 131.jpg"
import airdopes161 from '../img/Airdopes 161.jpg'
import lenevo from '../img/lenevo legin.jpg'
import Asusrog from '../img/AsusRog.jpg'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, img: airdopes, name: 'boAt Airdopes 131 ', price: 999, title: 'Airdopes' },
      { id: 2, img: lenevo, name: 'Lenovo Legion 5 Pro', price: 144990, title: 'Laptop' },
      { id: 3, img: Asusrog, name: 'ASUS ROG Strix G15 (2022)', price: 82000, title: 'Laptop' },
      { id: 4, img: airdopes161, name: 'boAt Airdopes 161 ', price: 19.99, title: 'Airdopes' },
      // Add more products as needed
      // Add more products as needed
    ],
  },
  reducers: {},
});

export const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;
// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './Component/Storage/Store';
import ProductList from './Component/ProductList';
import Cart from './Component/Card';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar1';


function App() {
  return (
    <Provider store={store}>
      <div className="container ">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProductList/>} />
          <Route path="/Card" element={<Cart />} />
          
        </Route>
      </Routes>
    </BrowserRouter>



        {/* <ProductList /> */}
        {/* <Cart /> */}
      </div>
    </Provider>
  );
}

export default App;
// ProductList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from './Storage/productsSlice';
import { addToCart } from './Storage/CartSlice';
import Swal from 'sweetalert2'

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase()));


  const handlePurchase = (product) => {
   
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added To The Card",
      showConfirmButton: false,
      timer: 1500
    });
      dispatch(addToCart(product));
    
    
   
  };
  return (
    <div className="container py ">
      <div className="mb-3">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="row " style={{ backgroundColor: '#eee' }}>
        {filteredProducts.map((product) => (
          <div class="col-md-4 my-3 ">
            <div class="card text-black">
              <i class="fab fa-apple fa-lg pt-1 pb-1 px-3"></i>
              <img src={product.img}
                class="card-img-top w-50   " alt="Apple Computer" style={{marginLeft:'100px'}} />
              <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="text-muted mb-4">{product.title}</p>
                  <p class="text-muted mb-4"> Price : {product.price}</p>
                </div>


                <div class="text-center">
                  {/* <button type="button" class="btn btn-primary">Centered button</button> */}
                  <button type="button" class="btn btn-default btn-sm" onClick={() => handlePurchase(product)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    <b style={{color:'green'}}> Add to Cart </b>
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


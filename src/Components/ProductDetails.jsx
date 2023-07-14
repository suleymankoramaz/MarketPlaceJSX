import React from 'react';
import { observer } from 'mobx-react-lite';
import productStore from '../Stores/ProductStore';
import { toJS } from 'mobx';
import './ProductDetails.css'

const ProductDetails = () => {
  console.log(toJS (productStore.selectedProduct));
  
  return (
    <div>
      <div className="details">
        <h1>{productStore.selectedProduct.title} </h1>
        <h4>{productStore.selectedProduct.description} </h4>
        <img src={productStore.selectedProduct.images[1]} width='100%' alt={productStore.selectedProduct.title} className='img1'/>
        <ul>
          <li type='none'>
            <span>Price: </span> {productStore.selectedProduct.price} <span>$</span>
          </li>
          <li type='none'>
            <span>Rating: </span> {productStore.selectedProduct.rating} <span>/5</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default observer(ProductDetails);
import React from 'react';
import { observer } from 'mobx-react-lite';
import productStore from '../Stores/ProductStore';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    productStore.setSelectedProduct(product);
    navigate(`/products/${product.id}`)
  };

  return (
    <div onClick={handleProductClick} className='card'>
        <img src={product.images[0]} width='50%' alt={product.title} className='img2'/>
        <h3>{product.title} </h3>
    </div>
  );
};

export default observer(ProductCard);

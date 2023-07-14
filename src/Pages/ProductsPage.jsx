import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductCard from '../Components/ProductCard';
import productStore from '../Stores/ProductStore';
import './ProductsPage.css'

const ProductsPage = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const products = await response.json();
      productStore.setProducts(products.products);
    };
  
    fetchProducts();
  }, []);

  return (
    <>
      <h1>MARKET PLACE</h1>
      <div className='container'>
        {productStore.products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>  
    </>
  );
};

export default observer(ProductsPage); 
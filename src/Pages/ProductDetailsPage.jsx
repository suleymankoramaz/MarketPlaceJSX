import React from 'react';
import { observer } from 'mobx-react-lite';
import ProductDetails from '../Components/ProductDetails';
import productStore from '../Stores/ProductStore';


const ProductDetailsPage = () => {
  const product = productStore.selectedProduct;
  
  return (
    <div className="product-detail-page">
      <ProductDetails key = {product.id} product={product}/>
    </div>
  );
};

export default observer(ProductDetailsPage);

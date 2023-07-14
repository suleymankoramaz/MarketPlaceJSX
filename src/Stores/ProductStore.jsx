import { makeAutoObservable } from 'mobx';

class ProductStore {
  products = [];
  selectedProduct = {};

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  setSelectedProduct(product) {
    this.selectedProduct = product;
    console.log("Selected product changed to: ", this.selectedProduct.id);
  }
}

const productStore = new ProductStore();
export default productStore;
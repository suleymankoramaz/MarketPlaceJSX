import { Routes, Route } from "react-router-dom"
import ProductsPage from "../Pages/ProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

const LayoutProducts = () => {
  return(
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  )
}

export default LayoutProducts;
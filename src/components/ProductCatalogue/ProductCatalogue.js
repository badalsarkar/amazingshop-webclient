import ProductRow from "./ProductRow";
import Product from "./product";

const ProductCatalogue = () => {
  const products = [<Product />, <Product />];
  return <ProductRow products={products} />;
};
export default ProductCatalogue;

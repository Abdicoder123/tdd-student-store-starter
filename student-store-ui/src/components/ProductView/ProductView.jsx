import ProductCard from "../ProductCard/ProductCard";

export default function ProductView(props) {
  const { productID } = props;
  const { handleAddItemToCart } = props;
  const { handleRemoveItemFromCart } = props;
  return (
    <div className="product-view">
      <h1 className="product-id"> Product #{product.id}</h1>
      <ProductCard
        products={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
}

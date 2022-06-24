import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail(props) {
  const [product, setProduct] = React.useState({});
  <></>;
  const id = useParams();

  async function getProduct() {
    const data = await axios
      .get(`https://codepath-store-api.herokuapp.com/store/${id.productID}`)
      .then((element) => {
        setProduct(element.data.product);
      })
      .catch((error) => {
        console.log("error");
      });
  }
  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productID={id}
        quantity={props.shoppingCart.quantity}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
}

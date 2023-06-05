import { useContext } from "react";
import { Store } from "../utils/Store";

export const useCart = () => {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return { addToCartHandler };
};

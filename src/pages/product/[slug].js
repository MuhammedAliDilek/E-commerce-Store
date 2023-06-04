import React, { useContext } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import data from "../../../utils/data";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../../../utils/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert(`Product is out of stock`);
      return false;
    }
    dispatch({ type: `CART_ADD_ITEM`, payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to homepage</Link>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-4">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
            />
          </div>
          <ul className="mb-4">
            <li>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            </li>
            <li className="text-gray-600 mb-2">Category: {product.category}</li>
            <li className="text-gray-600 mb-2">Brand: {product.brand}</li>
            <li className="text-gray-600 mb-2">Rating: {product.rating}</li>
            <li className="text-gray-600">Reviews: {product.numReviews}</li>
          </ul>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-2 flex justify-between">
              <div className="font-bold">Price:</div>
              <div className="text-xl">${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div className="font-bold">Status:</div>
              <div className="text-green-600">In Stock</div>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full mb-2"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
              {cart.cartItems.length > 0 && (
                <Link href="../cart">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                    Go to Cart🛒
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

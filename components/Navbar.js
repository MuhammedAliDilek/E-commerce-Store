import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";
//import "react-toastify/dist/react-Toastify.css";

const Navbar = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [CartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESERT" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image
            src="/images/logo/logo-high-res.png"
            alt="The continental"
            width={120}
            height={20}
          />
        </Link>
      </div>
      <div className="flex items-center flex-grow">
        <div className="mr-4">
          <span className="text-white">Deliver To:</span>
          <select className="p-1 border border-gray-300 rounded-md">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="relative flex-grow">
          <select
            className="absolute left-0 top-0 p-1 border border-gray-300 rounded-md bg-white"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="clothing">Clothing</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border border-gray-300 rounded-md pl-[140px] w-full"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <select className="p-1 border border-gray-300 rounded-md">
            {/* <option value="az">
              AZ
              <Image
                src="/images/azerbaijan.png"
                alt="Azerbaijan flag"
                width={10}
                height={10}
              />
            </option>
            <option value="us" className="flex items-center">
              <Image
                src="/images/azerbaijan.png"
                alt="United States Flag"
                width={24}
                height={16}
                className="mr-2"
              /> 
            </option> */}
            <option value="es">🇪🇸</option>
          </select>
        </div>
        <div>
          <Link href="/cart" className="flex items-center p-2">
            <span>Cart</span>
            {CartItemsCount > 0 && (
              <span className="ml-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-bold text-white">
                {CartItemsCount}
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              }
            </svg>
          </Link>
        </div>
        <div className="mr-4">
          <p className="font-bold text-blue-600">
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button>{session.user.name}</Menu.Button>
                <Menu.Items className="absolute right-0 w-36 origin-top-right shadow-lg bg-white">
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      👤Profile
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/order-history"
                    >
                      📦Orders
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      🎁Wishlist
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      ⚙️Settings
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      🚩Logout
                    </DropdownLink>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link href="/login" className="p-2">
                Login / Sign-in
              </Link>
            )}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

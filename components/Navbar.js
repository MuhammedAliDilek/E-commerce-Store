import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-xl font-bold">
          Amazona
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
            <option value="az">
              AZ
              <Image
                src="/images/azerbaijan.png"
                alt="Azerbaijan flag"
                width={10}
                height={10}
              />
            </option>
            <option value="us">🇺🇸</option>
            <option value="es">🇪🇸</option>
          </select>
        </div>
        <div className="mr-4">
          <Link href="/login" className="p-2">
            Login / Sign-in
          </Link>
        </div>
        <div>
          <Link href="/cart" className="p-2">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

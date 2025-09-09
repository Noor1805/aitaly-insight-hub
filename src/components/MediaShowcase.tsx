"use client";
import React from "react";
import SplitText from "./SplitText";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aum Lariat Earrings",
    price: "₹ 60520",
    image: "/images/jewelry1.png",
  },
  {
    id: 2,
    name: "The Labyrinth Hoops",
    price: "₹ 79621",
    image: "/images/jewelry2.png",
  },
  {
    id: 3,
    name: "Golden Rays Pendant",
    price: "₹ 225698",
    image: "/images/jewelry3.png",
  },
  {
    id: 4,
    name: "Prestige Of Solace Pendant",
    price: "₹ 258965",
    image: "/images/jewelry4.png",
  },
  {
    id: 5,
    name: "The Purple Prisma",
    price: "₹ 93532",
    image: "/images/jewelry5.png",
  },
  {
    id: 6,
    name: "My Embrace Earrings 1 Diamond",
    price: "₹ 97271",
    image: "/images/jewelry6.png",
  },
  {
    id: 7,
    name: "Eternal Elegance Ring",
    price: "₹ 160802",
    image: "/images/jewelry7.png",
  },
  {
    id: 8,
    name: "Ensembled in Change Earrings",
    price: "₹ 208967",
    image: "/images/jewelry8.png",
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <SplitText
            text="AI Tally – Smart Accounting Software Powered by Hanexis"
            className="text-2xl text-center font-orbitron md:text-5xl"
            delay={100}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

      <p className="text-gray-600 mt-2">
        AI Tally by Hanexis empowers businesses with end-to-end accounting
        automation — from auto GST &amp; TDS calculations and smart vouchers to
        AI-driven data entry, ledger management, and section-wise compliance
      </p>
      <hr className="my-6 border-gray-300" />

      {/* Monkey Emoji */}
      <div className="relative">

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-b from-white to-yellow-50 p-6 rounded-xl shadow-md">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md shadow"
              />
              <h3 className="mt-3 text-sm font-medium">{product.name}</h3>
              <p className="text-blue-600 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

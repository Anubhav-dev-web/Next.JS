import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Link
        href="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5"
      >
        Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductCard
          title="Product 1"
          description="A brief description of product 1"
          link=" products/1"
        />
        <ProductCard
          title="Product 2"
          description="A brief description of product 2"
          link=" products/2"
        />
        <ProductCard
          title="Product 3"
          description="A brief description of product 3"
          link=" products/3"
        />
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
};

const ProductCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductList;

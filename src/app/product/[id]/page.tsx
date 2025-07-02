import { products } from "@/constant/data";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string | number }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const product = products.find(el => el.id === Number(id));

  if (!product) {
    return {
      title: 'Product Not Found | Hun Hsin Textile',
      description: 'This product could not be found in our catalog.',
    };
  }

  return {
    title: `${product.title} | Hun Hsin Textile`,
    description: [product.desc1, product.desc2, product.desc3]
      .filter(Boolean)
      .join(' '),
  };
}
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;

  const product = products.find((el) => el.id === Number(id));
  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600">Product not found.</div>
    );
  }

  return (
    <div className="bg-white mt-20 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#172E4D] py-24 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">{product?.title}</h1>
        <p>
          {product?.short2}
        </p>
        <p></p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-5 md:py-12 flex flex-col md:flex-row gap-6  md:gap-10 items-center">
        {/* Left Text Block */}
        <div className="flex-1">
          <p className="text-gray-700 mt-5 mb-4 leading-relaxed">
            {product?.desc3}
          </p>
          <h1 className="text-lg font-medium mt-4 mb-2">
            Product Specifications{" "}
          </h1>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {product?.specifications?.map((spec, index) => (
              <li key={index}>
                {spec.name}:{spec.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={product?.image as string} // update this path
            alt="Nylon Yarn Factory"
            width={700}
            height={550}
            className="rounded shadow-md"
          />
        </div>
      </div>

      {/* Product Spec + Yarn Image */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        {/* Yarn Image */}
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={product?.image2 as string} // update this path
            alt="Yarn Rolls"
            width={900}
            height={700}
            className="rounded shadow"
          />
        </div>

        {/* Product Specification */}
        <div className="flex-1">
          <p>{product?.conc?.desc}</p>
          <h3 className="text-md font-bold my-4">Key Features:</h3>
          <ul className="space-y-2 list-disc list-inside  text-gray-700">
            {product?.keyFeatures?.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6   md:gap-10 max-w-7xl mx-auto px-4 md:py-8">
        <div className="col-span-1 md:col-span-2">
          <p className="text-gray-700 mb-4">{product?.desc1}</p>
          <p className="text-gray-700">{product?.desc2}</p>
        </div>
        {/* Application Paragraph */}
        <div className="  text-gray-700  leading-relaxed">
          <h3 className="text-md font-bold ">Applications:</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {product?.applications?.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import img from "@/assets/about/l2.jpg";
import Link from "next/link";

export default function ProfessionalSection() {
  const lists = [
    { text: "Dyeing Vessels ", number: 20 },
    { text: "Happy Clients", number: "116+" },
    { text: "Annual Sales ", number: "$20M" },
  ];
  return (
    <section className="container mx-auto relative bg-white py-10">
      <div className="container relative mx-auto  flex flex-col lg:flex-row  gap-10 px-4">
        {/* Left image */}
        <div data-aos="zoom-in" className="lg:w-1/2 w-full ">
          <Image
            src={img}
            alt="Company Building"
            width={700}
            height={600}
            className="rounded mt-16 shadow-md object-cover w-full max-h-[550px]"
          />
        </div>

        {/* Right content */}
        <div data-aos="zoom-in" className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-6xl leading-normal font-bold mb-4">
            Professional <br /> Yarn Manufacturer
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Hun Hsin Textile is a trusted supplier and exporter of high-quality
            yarns, specializing in 100% Nylon Yarn, Recycled Nylon Yarn, and
            China Feather Yarn. Headquartered in Dhaka, we are committed to
            delivering exceptional quality, timely service, and innovative
            solutions. Founded with the goal of becoming a leading brand in the
            nylon yarn industry, we focuses on project commitment and customer
            satisfaction worldwide.
          </p>

          <div className="flex justify-between items-center">
            {/* Read More Button */}
            <Link href="/about" className="">
              <button className="border-2 border-black px-4 md:px-5 lg:px-7 text-xl py-2 md:py-2.5 cursor-pointer  font-medium hover:bg-black hover:text-white transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-10 hidden md:block absolute right-0 -bottom-10 z-10  max-w-6xl bg-gray-600/90 text-white ">
        <div className="flex flex-col  md:flex-row justify-between text-center">
          {lists.map((el) => (
            <div
              key={el.number}
              className="flex-1 py-12 px-8 border-r border-r-gray-500/60 flex gap-10 items-center justify-between mb-4 md:mb-0"
            >
              <p className="text-gray-200 whitespace-nowrap text-lg">
                {el.text}
              </p>
              <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
                {el.number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

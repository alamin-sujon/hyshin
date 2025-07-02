import React from "react";
import img from "@/assets/about/ab-03.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import logo from "@/assets/logo.jpg"
export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-12">
        <div className="md:w-1/2" >
          <Image
            src={img}
            alt="Our Factory"
            className=" shadow-lg min-h-[450px]"
          />
        </div>
        <div className="md:w-1/2 " >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 w-5/6 leading-relaxed mb-5">
            With decades of experience, Hun Hsin Textile is a leading supplier
            and exporter of high-quality nylon yarn. We pride ourselves on
            reliability, innovation, and excellent customer service in the
            Retail Apparel and Fashion industry.
          </p>
          <Link href="/about" className="">
            <Button
              className="hover:bg-black hover:text-white transition-all duration-300 rounded-none cursor-pointer"
              variant={"outline"}
            >
              Learn More
            </Button>
          </Link>
          <div data-aos="zoom-in" className="flex  justify-end">
            <Image src={logo} width={300} height={300} alt="logo" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

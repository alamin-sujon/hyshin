import ab1 from "@/assets/about/ab-04.jpg";
import ab2 from "@/assets/about/ab-02.jpg";
import Image from "next/image";
import bg1 from "@/assets/about/t1.jpeg";
import CertificationSection from "@/components/home/Certificate";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import Manager from "@/components/about/Manager";
export const metadata = {
  title: 'About Us | Hun Hsin Textile',
  description:
    'Learn about Hun Hsin Textile, our mission to provide premium 100% Nylon Yarn, Recycled Nylon Yarn, and China Feather Yarn with sustainable textile solutions.',
  keywords: [
    'About Hun Hsin Textile',
    'Textile Yarn Manufacturer',
    'Sustainable Yarn Supplier',
    'Nylon Yarn Company History',
    'Eco-friendly Yarn Producer',
  ],

  authors: [{ name: 'Hun Hsin Textile' }],
};

export default function AboutUs() {
  return (
    <section className="my-24  font-sans space-y-20">
      {/* Block 0 */}
      <div
        className="relative h-[80vh] flex items-center bg-no-repeat bg-center bg-fixed bg-cover "
        style={{ backgroundImage: `url(${bg1.src})` }}
      >
        <div className="absolute inset-0 bg-black/40 " />
        <div className="relative  z-10 px-6 md:px-12 lg:px-16 max-w-5xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h1>
          <div className="w-16 h-[2px] bg-white mb-6" />
          <p className="text-xl md:text-2xl font-light mb-2">
            Coming From Taiwan, Marketing To The World.
          </p>
          <p className="text-xl md:text-2xl font-light mb-6">
            We Are A Professional Manufacturer of 100% Nylon Yarn.
          </p>
          <p className="text-sm text-gray-300">Home / About Us</p>
        </div>
      </div>
      <div className="px-5 md:px-12 space-y-20">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={ab1} // Replace with your actual image path in /public
              alt="Company Building"
              width={800}
              height={600}
              className=" w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-[26px] font-semibold text-[#172E4D] mb-5">
              Coming From Taiwan, Marketing To The World.
            </h2>
            <p className="text-gray-800  leading-relaxed">
              Since its establishment in 2008, Hun Hsin Textile Co., (BD) Ltd.
              has emerged as one of Bangladesh’s premier exporters of nylon
              yarn. With over 400 dedicated employees. Our deep industry
              expertise and commitment to excellence have earned us a strong
              reputation among textile & apparel manufacturers worldwide. We
              pride ourselves on delivering consistent product quality, reliable
              supply chains, and exceptional customer service, making us a
              preferred partner for businesses seeking premium nylon yarn
              solutions.
              <br />
              <br />
              Driven by innovation and sustainability, Hun Hsin Textile is
              dedicated to supporting the growth of the readymade garments (RMG)
              industry by providing yarns that combine strength, durability, and
              eco-conscious production methods. Our extensive network and market
              knowledge enable us to efficiently serve clients across multiple
              continents, ensuring timely delivery and customized solutions.
            </p>
          </div>
        </div>
        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className=" ">
            <h3 className="text-xl md:text-[26px] font-semibold text-[#172E4D] mb-5">
              Outstanding Quality
            </h3>

            <p className="text-gray-800  leading-relaxed">
              Founded in 2008, Hun Hsin Textile has built its reputation on
              innovation and trust within the nylon yarn industry. Over the
              years, we have continuously developed high-quality products such
              as 100% Nylon Yarn, Recycled Nylon Yarn, and China Feather Yarn to
              meet the evolving needs of our global customers.
              <br />
              <br />
              Guided by the principle of “building partnerships with integrity
              and creating mutual success,” we prioritize honest collaboration
              and long-term relationships. We warmly welcome clients from around
              the world to connect and grow together.
            </p>
          </div>
          <div>
            <Image
              src={ab2} // Replace with your actual image path in /public
              alt="Company Building"
              width={800}
              height={600}
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Manager />
      <CertificationSection />
      <IndustriesWeServe />
    </section>
  );
}

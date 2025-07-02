import React from "react";
import { Lightbulb, Truck, Settings, Leaf, DollarSign } from "lucide-react";
import img from "@/assets/about/pro.jpg";
const features = [
  {
    text: "Stable Product Quality",
    desc: "The company strictly implements procedures such as screening and auditing of raw material suppliers, and incoming material testing.",
    icon: (
      <Lightbulb className="w-16 h-16 text-[#172E4D] group-hover:text-white transition-all duration-500" />
    ),
  },
  {
    text: "Reliable Product Supply",
    desc: "The company has sufficient production capacity and high control over raw material prices, quality, and stable supply, laying the foundation for sustained production.",
    icon: (
      <Truck className="w-16 h-16 text-[#172E4D] group-hover:text-white transition-all duration-500" />
    ),
  },
  {
    text: "Customization",
    desc: "We have a strong R&D team that can develop and produce products based on customer needs.",
    icon: (
      <Settings className="w-16 h-16 text-[#172E4D] group-hover:text-white transition-all duration-500" />
    ),
  },
  {
    text: "Sustainable Commitment",
    desc: "Adopting environmentally friendly materials and production processes, strictly adhering to laws and regulations.",
    icon: (
      <Leaf className="w-16 h-16 text-[#172E4D] group-hover:text-white transition-all duration-500" />
    ),
  },
  {
    text: "Cost",
    desc: "We have our own highly automated and modern production base, which has a significant cost advantage.",
    icon: (
      <DollarSign className="w-16 h-16 text-[#172E4D] group-hover:text-white transition-all duration-500" />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Main Content Container */}
      <div className="flex flex-col  lg:flex-row">
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row  relative">
          <div
            style={{ backgroundImage: `url(${img.src})` }}
            className={`min-h-screen  lg:h-full flex-1   relative overflow-hidden bg-no-repeat bg-center bg-cover bg-fixed`}
          >
            {/* <Image src={img} alt="Hero Image" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
          </div>
          {/* Blue Section */}
          <div className="lg:w-1/2 flex-1  flex flex-col justify-between  h-full absolute top-0 right-0 bg-[#172E4D] text-white px-8 lg:px-12  py-8">
            <div className="h-full flex flex-col justify-between">
              <div className="">
                <h2 className="text-2xl lg:text-3xl leading-loose mb-5">
                  OUR <br className="hidden lg:block" /> STRENGTH
                  <br className="hidden lg:block" />
                  ADVANTAGE
                </h2>
                <span className="h-0.5 w-16 bg-white block"></span>
              </div>

              {/* <div className="space-y-10">
                <div>
                  <h3 className="leading-relaxed text-xl mb-2">
                    STABLE PRODUCT <br className="hidden lg:block" /> QUALITY
                  </h3>
                  <p className="text-gray-300">{`////////////////////////////////////////

`}</p>
                </div>

                <div>
                  <h3 className="leading-relaxed text-xl mb-2">
                    RELIABLE PRODUCT SUPPLY
                  </h3>
                  <p className="text-gray-300">{`////////////////////////////////////////

`}</p>
                </div>

                <div>
                  <h3 className="leading-relaxed text-xl mb-2">
                    CUSTOMIZATION
                  </h3>
                  <p className="text-gray-300">{`////////////////////////////////////////

`}</p>
                </div>

                <div>
                  <h3 className="leading-relaxed text-xl mb-2">
                    SUSTAINABLE COMMITMENT
                  </h3>
                  <p className="text-gray-300">{`////////////////////////////////////////

`}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 px-4 lg:p-8">
          <div className="mb-6">
            <p className="text-3xl text-gray-700 uppercase tracking-wide mb-2">
              PREMIUM QUALITY SINCE 2008
            </p>
          </div>

          <div className="">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex group items-start px-4 cursor-pointer py-6 hover:bg-white space-x-4 hover:shadow-lg transition-all duration-500 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 group-hover:bg-[#172E4D] transition-colors duration-300  rounded-lg flex items-center justify-center">
                    {feature?.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {feature?.text}
                  </h3>
                  <p className="text-sm text-gray-700">{feature?.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button className="bg-[#1689CA] text-white border border-[#1689CA] hover:bg-transparent cursor-pointer hover:text-[#1689CA] px-6 py-2  transition-colors duration-500">
              Contact Us →
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
// import Image from "next/image";
import { toast } from "sonner";

// import img from "@/assets/contact-2x-635x624.jpg";
import img from "@/assets/contact.jpg";
import { motion } from "motion/react";
import FaqSection from "@/components/Faq";

const details = [
  {
    title: "Bangladesh Factory: ",
    desc: "Plot No.72-74, Cumilla Export Processing Zone,  Cumilla-3500, Bangladesh.",
  },
  {
    title: "Taiwan Factory: ",
    desc: " RD No. 07, Hsin Kung Road, Tien Chung City, Chunghua Country, Changhua, Taiwan (ROC).",
  },
  {
    title: "Corporate Office:",
    desc: "House No. 04 (5th Floor), Road No. 12, Sector 04, Uttara Model Town, Dhaka, Bangladesh. ",
  },
];
export default function Contact() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting your message...");
    const form = e.currentTarget;
    const name = form.fullname.value || "";
    const email = form.email.value || "";
    const phone = form.phone.value || "";
    const surname = form.surname.value || "";
    const message = form.message.value || "";
    console.table({ name, email, phone, message, surname });
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, comment: message }),
      });
      console.log({ result });
      if (result?.ok) {
        toast.success("Email send successfully. wait for response", {
          id: toastId,
        });
      } else {
        toast.error("Failed to send email", { id: toastId });
      }
      form.reset();
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };
  return (
    <div className="font-sans mt-20">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#F0F0F0] py-20 pb-5 lg:pb-20 px-5 md:px-12 lg:px-28">
        <div className=" min-w-lg relative">
          <div className="bg-[#0A2540]  absolute lg:-right-40 z-10 top-1/2 -translate-y-1/2 opacity-90  md:min-h-[350px] text-white p-12 w-full md:w-1/2 text-center md:text-left  md:min-w-xl">
            <div className="  mb-6">
              <span className="w-20 h-[1px] bg-white block mb-1"></span>
              <h1 className="text-3xl md:text-5xl font-medium text-left">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full mt-24 md:mt-0 border-2 border-primary  md:w-1/2 min-h-[350px] md:min-h-[500px] relative">
          <Image src={img} alt="Office" fill className="object-cover" />
        </div>
      </section>

      <section className="max-w-5xl px-5 my-16  md:my-24 mx-auto ">
        {/* Service Cards */}
        <section className=" max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-left  mb-6">
            Our Location
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {details.map((el, ind: number) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: ind * 0.2 }}
                key={el.desc}
                className="bg-gray-100/75 cursor-pointer hover:shadow-xl transition-shadow duration-500 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-2">
                  {el.title}
                </h3>
                <p className=" text-gray-600 text-lg leading-relaxed">
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </section>

      {/* Contact Form */}
      <section className="bg-[#162B48] text-white px-6 md:px-20 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-left  mb-6">
            Get in Touch
          </h2>
          {/* <TextWithBorder text="Get in Touch" /> */}
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
          >
            <input
              type="text"
              placeholder="Name*"
              required
              name="fullname"
              className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Surname"
              name="surname"
              className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required
              className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <textarea
              placeholder="Message*"
              rows={4}
              name="message"
              required
              className="md:col-span-2 p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <div className="flex md:col-span-2 justify-end">
              <button
                type="submit"
                className="border border-white px-6 py-2 mt-2 hover:bg-white rounded-full cursor-pointer hover:text-black transition-all duration-300 w-max"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Faq */}
      <FaqSection />
    </div>
  );
}

"use client";
import {
  FaCode,
  FaWordpress,
  FaSearch,
  FaPenNib,
  FaMobileAlt,
  FaLaptopCode,
  FaEnvelopeOpenText,

} from "react-icons/fa";
import { SiShopify } from "react-icons/si";
export default function Features() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Responsive, mobile-first, and high-performing websites.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      desc: "Custom WordPress themes and plugins built for flexibility.",
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      desc: "Boost visibility with on-page and technical SEO services.",
    },
    {
      icon: <FaPenNib />,
      title: "Content Writing",
      desc: "Engaging, SEO-optimized content tailored to your business.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "iOS and Android mobile apps that perform beautifully.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "Custom software solutions built for your unique workflow.",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Email Marketing",
      desc: "Convert leads with smart and visually appealing campaigns.",
    },
    {
      icon: <SiShopify />,
      title: "Shopify Store",
      desc: "Convert leads with smart and visually appealing campaigns.",
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 mx-auto font-[Lora]">
      {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center px-6 py-10">
  <h1 className="text-[#A31D1D] text-4xl font-semibold pb-6">
    Benefits of Our Services
  </h1>
  <p className="text-black max-w-3xl">
    We envision a future where our clients are at the forefront of their industries,
    setting new standards of excellence through the transformative power of our consulting services.
  </p>
</div>


      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#A31D1D]/10 mb-6 group-hover:bg-[#A31D1D]/20 transition">
              <div className="text-[#A31D1D] text-3xl">{service.icon}</div>
            </div>

            {/* Divider */}
            <div className="bg-gradient-to-r from-[#A31D1D]/30 via-gray-100 to-transparent h-0.5">
              <div className="bg-[#A31D1D] w-9 h-0.5"></div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#A31D1D] transition">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

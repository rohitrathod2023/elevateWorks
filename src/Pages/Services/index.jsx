import React from "react";
import Company1 from "../../assets/icons/company1.svg";
import Company2 from "../../assets/icons/company2.svg";
import Company3 from "../../assets/icons/company3.svg";
import Company4 from "../../assets/icons/company4.svg";
import Company5 from "../../assets/icons/company5.svg";
import Company6 from "../../assets/icons/company6.svg";
import Community from "../../assets/icons/commnity.svg"; // Fixed typo

const Services = () => {
  const services = [
    // Changed from service to services
    {
      id: 1,
      title: "Membership",
      description: "Manage your membership effectively.", // Corrected property name and description
      image: Community,
    },
    {
      id: 2,
      title: "Designs", // Corrected title
      description: "Creative designs tailored to your needs.",
      image: Community,
    },
    {
      id: 3,
      title: "Figma",
      description: "Collaborative design tools for your team.",
      image: Community,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some great clients
        </p>
        {/* Company logos */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={Company1} alt="company logo" />
          <img src={Company2} alt="company logo" />
          <img src={Company3} alt="company logo" />
          <img src={Company4} alt="company logo" />
          <img src={Company5} alt="company logo" />
          <img src={Company6} alt="company logo" />
        </div>
        {/* Service card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutralGrey">Who is ElevateWorks suitable for?</p>
        </div>
        {/* card */}
        <div className="mt-14 grid lg:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12 ">
          {services.map(
            (
              service // Use services instead of service
            ) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
              >
                <div>
                  <div className="bg-[#E8F5E9] h-14 w-14 mb-4 mx-auto rounded-t1-3xl rounded-none-br-3xl">
                    <img src={service.image} alt="icon" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutralGrey">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

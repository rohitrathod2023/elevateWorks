import React from "react";
("use client");
import { Carousel } from "flowbite-react";
import fig1 from "../../assets/illustration/figure1.svg";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between  gap-12">
            <div>
              <img src={fig1} alt="coputer operating man" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Your Problem our solution for that
                <div>
                  <span className="text-brandPrimary leading-snug">
                    Desing solution for your problem
                  </span>
                </div>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a Photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between  gap-12">
            <div>
              <img src={fig1} alt="coputer operating man" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Your Problem our solution for that
                <div>
                  <span className="text-brandPrimary leading-snug">
                    Desing solution for your problem
                  </span>
                </div>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a Photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between  gap-12">
            <div>
              <img src={fig1} alt="coputer operating man" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Your Problem our solution for that
                <div>
                  <span className="text-brandPrimary leading-snug">
                    Desing solution for your problem
                  </span>
                </div>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a Photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import figure2 from "../../assets/illustration/figure2.svg";
import { IoPeopleSharp } from "react-icons/io5";
const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="About">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={figure2} alt="illustration image" />
          </div>

          <div className="md:w-3/5 mc-auto">
            <h2 className="text-4xl text-neutralDGrey fort-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md-w-3/4 text-sm tect-neutralDGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">learn more</button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey fort-semibold mb-4 md:w-4/5">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md-w-3/4 text-sm tect-neutralDGrey mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                {/* <img src={CgCommunity} alt="icons" /> */}
                <IoPeopleSharp />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3<p>Members</p>
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <img src={CgCommunity} alt="icons" /> */}
                <IoPeopleSharp />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3<p>Members</p>
                  </h4>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                {/* <img src={CgCommunity} alt="icons" /> */}
                <IoPeopleSharp />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3<p>Members</p>
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <img src={CgCommunity} alt="icons" /> */}
                <IoPeopleSharp />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3<p>Members</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

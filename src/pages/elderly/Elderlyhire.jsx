import React from "react";

const Elderlyhire = () => {
  return (
    <div>
      <div className="h-24 w-full bg-slate-400 flex justify-center text-center items-center ">
        <div>
          <h2 className="text-2xl font-bold">Help4Parents</h2>
          <h3 className="text-2xl">Help Your Parents Live Independently</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 px-20 py-8 bg-slate-200">
        <div>
          <p className="py-6 tracking-wider text-xl px-4">
            {" "}
            Do you live away from your old parents? You may want to find a
            trustworthy partner to take care of your parents daily needs. Do not
            worry. We know how difficult it can be to handle things from a
            distance. That's why we created Help4Parents , where we offer
            services for hiring verified helpers, like maid, caregiver, cook,
            driver. So that they can handle your parents daily chores in a
            reliable and safe way.
          </p>
          <button className="text-white bg-[#ff3008] rounded px-4 py-2 ms-4 ">
            {" "}
            Learn More
          </button>
        </div>
        <div>
          {/* <div className="flex justify-end text-end items-end">
            <video width="500" height="350" controls className="rounded-xl">
              <source
                src="https://www.youtube.com/embed/JO5dX9gkqLQ"
                type="video/mp4"
              />
            </video>
          </div> */}
           <div className="mx-auto my-[5%] lg:my-[10%]">
      <iframe
        className="h-[40vh] w-[90%] md:w-[65%] lg:w-[80%] mx-auto -mt-5 md:-mt-10"
        src="https://www.youtube.com/embed/JO5dX9gkqLQ"
        title="Watch a video testimonial from helper4U customer reviewing Helper4U service"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ borderRadius: '15px' }}
      ></iframe>
    </div>
        </div>
      </div>
      <section>
        <div className="bg-slate-100">
          <h2 className="text-2xl font-bold text-center py-5">
            Why Help4Parents?
          </h2>
          <div className="grid grid-cols-2 gap-10 px-12 pb-28">
            <div className=" text-xl font-normal border shadow-xl p-6 text-center marker:transition-transform duration-300 ease-in-out hover:scale-105 ">
              Pan India Reach
            </div>
            <div className=" text-xl font-normal border shadow-xl p-6 text-center marker:transition-transform duration-300 ease-in-out hover:scale-105  ">
              Verified and Safe
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elderlyhire;

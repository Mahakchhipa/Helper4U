import React from "react";

const Temporary = () => {
  return (
    <>
      <div className="h-24 w-full bg-slate-400 flex justify-center text-center items-center ">
        <div>
          <h2 className="text-2xl font-bold">Short-Term Hiring</h2>
          <h3 className="text-2xl">Hire Helpers For Few Days</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 px-12 gap-10 py-12 bg-slate-200">
        <div className="text-xl space-y-5  px-10">
          <p>
            Looking for a cook to cater for a party or function? Or a nanny to
            take care of your kids while you attend a meeting or go out for a
            party? Or a cleaner because your regular helper has taken some
            leaves?
          </p>
          <p>
            {" "}
            Need a temporary caregiver at home for a patient or an elderly
            person for? Need a driver for an outstation trip or a day? Don't
            worry and use Helper4U Temporary Hiring Service to find a verified
            helper for a few hours or a couple of days.{" "}
          </p>
          <p>
            Note: If you need a permanent Helper DO NOT use this service. This
            is a limited connects package to enable you to hire Helpers for a
            one time, short-term assignment. If you want a permanent helper,
            click here.
          </p>
        </div>
        <div>
          <table className="w-full  bg-white">
            <tr className="border border-sky-300">
              <th className="text-2xl font-bold py-2  border border-sky-300 bg-slate-400 px-4">
                {" "}
                Details
              </th>
              <th className="text-2xl font-bold py-2 border border-sky-300 bg-slate-400 w-[90%]">
                Hire for Short-Term
              </th>
            </tr>

            <tr className="border border-sky-300">
              <td className="border border-sky-300 py-5 px-2 text-xl">
                Helper4U Fees
              </td>
              <td className="border border-sky-300 py-5 px-2 text-xl">₹399*</td>
            </tr>
            <tr className="border border-sky-300">
              <td className="border border-sky-300 py-5 px-2 text-xl">
                Helper's Charges
              </td>
              <td className="border border-sky-300 py-5 px-2 text-xl">
                Charges are negotiated with the Helper directly basis work,
                location, timing
              </td>
            </tr>
            <tr className="border border-sky-300 ">
              <td className="border border-sky-300 py-5 px-2 text-xl">
                Process
              </td>
              <td className="border border-sky-300 py-5 px-2 text-xl">
                1. Check details of Helpers in your location using filters for
                gender, timings etc. from Home page 2. Connect with any 5
                Helpers you like. You can access the contacts for 2 days 3.
                Negotiate salary, work timing, work, etc. directly with Helpers.
                Pay salary directly to the helper
              </td>
            </tr>
          </table>
          <div className=" flex justify-end py-3">
            <ul>
              <li>*Non refundable fees</li>{" "}
              <li>*Paid verification, if needed</li>
              <li>*No replacement</li>
            </ul>
          </div>
          <div className=" text-center">
            <button className="text-white bg-[#ff3008] rounded px-6 py-2  ">
              {" "}
              Proceed{" "}
            </button>
          </div>
        </div>
      </div>
      <section className="bg-slate-100">
        <h2 className="text-2xl font-bold text-center py-6">
          Why You Should Use Long Term Hiring Service
        </h2>
        <div className="grid grid-cols-4  gap-10 px-10 pb-10 ">
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            5 Candidates
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center marker:transition-transform duration-300 ease-in-out hover:scale-105  ">
            Access for 2 days
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            Cost-Effective
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            {" "}
            Easy hiring
          </div>
        </div>
      </section>
      <section>
        <div className="bg-slate-100 text-center justify-center  py-4  ">
          <h2 className=" text-2xl px-52">
            <span className="text-2xl font-bold"> Hiring with Helper4U</span> is
            simple & fast. Now, hire for a few days without any stress.
          </h2>
          <button className="text-white bg-[#ff3008] rounded px-4 py-2 my-2 ">
            {" "}
            Hire Now{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Temporary;

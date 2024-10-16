import React from "react";

const BasicHiring = () => {
  return (
    <>
      <div className="h-24 w-full bg-slate-400 text-center flex justify-center items-center ">
        <div>
          <h2 className="text-2xl font-bold">Hire Helpers Cost Effectively</h2>
          <h3 className="text-2xl"> Find Domestic Helpers for your home</h3>
        </div>
      </div>
      <div className="bg-slate-200 grid grid-cols-2 py-20 ">
        <div className="px-20">
          <h3 className="text-2xl font-bold py-2"> The process is simple </h3>
          <ol className=" space-y-2 text-2xl ">
            <li>1. Share your requirements.</li>
            <li>
              2. Matching applicants will be added to your contact list. You can
              also choose Helpers yourself from our listing page
            </li>
            <li>
              3. Download the details, to call them as per your convenience.
            </li>
            <li>
              4. Negotiate all terms directly with Helpers - salary, work
              timing, work etc. and hire the one you like
            </li>
          </ol>
        </div>
        <div className="px-5 ">
          <table className="w-full">
            <tr className="border border-sky-200">
              <th className="border border-sky-200 bg-slate-400 py-2 text-xl">
                Type of Service
              </th>
              <th className="border border-sky-200 bg-slate-400 py-2 px-8 text-xl">
                Details
              </th>
            </tr>
            <tr className="border border-sky-200 bg-white w-full">
              <td className="border border-sky-200 bg-white py-3 px-3 text-lg">
                Hire Helper for Day or Night Shift or for Part time.{" "}
              </td>
              <td className=" px-6">
                <button className="text-white bg-[#ff3008] rounded px-4 py-2  ">
                  {" "}
                  Proceed{" "}
                </button>
              </td>
            </tr>
            <tr className="border border-sky-200 bg-white w-full">
              <td className="border border-sky-200 bg-white py-3 px-3 text-lg">
                Hire Helper for 24 hrs or Live-In
              </td>
              <td className=" px-6">
                <button className="text-white bg-[#ff3008] rounded px-4 py-2  ">
                  {" "}
                  Proceed{" "}
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <section className="bg-slate-100">
        <h2 className="text-2xl font-bold text-center py-6">
          Why You Should Use Long Term Hiring Service
        </h2>
        <div className="grid grid-cols-4  gap-10 px-10 pb-10 ">
          <div className=" text-xl font-normal border shadow-xl p-4 py-10 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            Timely Assistance
          </div>
          <div className=" text-xl font-normal border shadow-xl py-16 px-4 text-center marker:transition-transform duration-300 ease-in-out hover:scale-105  ">
            Completely Online <div>Process</div>
          </div>
          <div className=" text-xl font-normal border shadow-xl p-4 py-10 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            Get the Exact Match
          </div>
          <div className=" text-xl font-normal border shadow-xl p-4 py-10 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            {" "}
            One-Time Fee
          </div>
        </div>
      </section>
      <section className="bg-slate-200">
        <div className="w-[95%] h-[70%] items-center flex justify-center py-10">
          <img src="/src/assets/img/hire.png" alt="homeimage " />
        </div>
      </section>
      <section>
        <div className="bg-slate-100 text-center justify-center  py-4  ">
          <h2 className=" text-2xl px-52">
            <span className="text-2xl font-bold"> Hiring with Helper4U</span> is
            simple & fast. Now, hire helpers without any stress.”
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

export default BasicHiring;

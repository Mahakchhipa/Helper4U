import React from "react";

function Primium() {
  return (
    <>
      <div className="h-24 w-full bg-slate-400 text-center flex justify-center items-center ">
        <div>
          <h2 className="text-2xl font-bold">Long Term Hiring</h2>
          <h3 className="text-2xl">Hire Permanent Helpers</h3>
        </div>
      </div>
      <section>
        <div className="bg-slate-200 grid grid-cols-2 py-20 ">
          <div className="px-10">
            <h3 className="text-2xl font-bold py-2"> The Process is Simple:</h3>
            <ol className=" space-y-2 text-xl font-normal">
              <li>
                1. Check details of Helpers in your location using filters for
                gender, timings etc. You can do this from Home page.
              </li>
              <li>
                2. See all details of suitable Helpers except their contact
                number.
              </li>
              <li>
                3. Choose a suitable service to get Contact details and
                interview Helpers you like.
              </li>
              <li>
                4. Negotiate all terms directly with Helpers—salary, work
                timing, work, etc.
              </li>
            </ol>
          </div>
          <div className="px-10 ">
            <table>
              <tr className="border border-sky-200">
                <th className="border border-sky-200 bg-slate-400 py-2 text-xl">
                  Type of Service
                </th>
                <th className="border border-sky-200 bg-slate-400 py-2 px-8 text-xl">
                  Details
                </th>
              </tr>
              <tr className="border border-sky-200 bg-white w-full">
                <td className="border border-sky-200 bg-white py-8 px-3 text-lg">
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
                <td className="border border-sky-200 bg-white py-8 px-3 text-lg">
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
      </section>
      <section className="bg-slate-100">
        <h2 className="text-2xl font-bold text-center py-6">
          Why You Should Use Long Term Hiring Service
        </h2>
        <div className="grid grid-cols-4  gap-10 px-10 pb-10 ">
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            Multiple Candidates
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center marker:transition-transform duration-300 ease-in-out hover:scale-105  ">
            One-Time Payment
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            Verified Helpers
          </div>
          <div className=" text-xl font-normal border shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105  ">
            {" "}
            6 Months Replacement Guarantee
          </div>
        </div>
      </section>
      <section className="bg-slate-200">
        <div className="w-[95%] h-[70%] items-center flex justify-center py-10">
          <img src="/src/assets/img/midimg.png" alt="homeimage " />
        </div>
      </section>
      <section>
        <div className="bg-slate-100 text-center justify-center  py-4  ">
          <h2 className=" text-2xl px-52">
            Hiring with Helper4U is very simple. Now, you can hire on the go.
            Because you and your family deserve to stay stress-free.
          </h2>
          <button className="text-white bg-[#ff3008] rounded px-4 py-2 my-2 ">
            {" "}
            proceed{" "}
          </button>
        </div>
      </section>
    </>
  );
}

export default Primium;

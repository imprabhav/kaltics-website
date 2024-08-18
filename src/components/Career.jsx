import React from 'react'
import Navbar from './Navbar'
import FooterNav from './FooterNav'

const Career = () => {
  const email = "amolt@kaltics.com";

  const openMailClient = (jobTitle) => {
    window.location.href = `mailto:${email}?subject=Application for ${jobTitle}`;
  }

  return (
    <>
      <Navbar />
      <section className="">
        <div className="w-full">
          <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
            <span className="w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
              Careers at Kaltics
            </span>
            <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">
              Unlock new career <br /> opportunities at Kaltics
            </h1>
            <p className="text-gray-900 text-center text-lg font-normal leading-7">
              Kaltics embraces a youthful and flexible spirit, enabling us to swiftly adapt to market research, <br /> conditions, and customer demands through our advanced technology.
            </p>
          </div>
          <div className="lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 px-10">
            <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">
              Open positions
            </h2>
            <div className="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12">
              {["UX Designer", "Motion Designer", "iOS Developer", "Product Designer", "UX Researcher", "Project Manager"].map((job, index) => (
                <div key={index} className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                  <h3 className="text-gray-900 text-xl font-medium leading-8 hover:text-indigo-600">{job}</h3>
                  <button
                    className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4"
                    onClick={() => openMailClient(job)}
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
            <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">
              Kaltics thrives on a spirit of agility
            </h3>
            <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">
              We want to provide a user-friendly experience with eye-catching design and develop products <br /> quickly with the ability to solve user problems.
            </p>
            {/* Rest of your content */}
          </div>
        </div>
      </section>
      <FooterNav />
    </>
  );
};

export default Career;

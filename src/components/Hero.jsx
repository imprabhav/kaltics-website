import Navbar from '../components/Navbar';
import da from "../assets/da.svg";
import cs from "../assets/cs.svg";
import sap from "../assets/sap.svg";
import cld from "../assets/cld.svg";
import dev from "../assets/dev.svg";
import script from "../assets/script.svg";

export default () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <Navbar />
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Read the launch post from here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Build with Kaltics
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={da} />
                <span className="block font-bold text-sm mt-0.5">
                  Data Analysis
                </span>
              </div>
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={dev} />
                <span className="block font-bold text-sm mt-0.5 text-center">
                  Product Development
                </span>
              </div>
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={sap} />
                <span className="block font-bold text-sm mt-0.5">
                  Sap Development
                </span>
              </div>
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={cs} />
                <span className="block font-bold text-sm mt-0.5">
                  Cyber Security
                </span>
              </div>
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={script} />
                <span className="block font-bold text-sm mt-0.5 text-center">
                  Script/Bot Development
                </span>
              </div>
              <div className="flex flex-col items-center gap-x-6 p-4 rounded-lg bg-indigo-50 cursor-pointer h-30 w-40">
                <img className="w-16 h-16 " src={cld} />
                <span className="block font-bold text-sm mt-0.5">
                  Cloud Services
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

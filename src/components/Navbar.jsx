import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/kalticsblack.png";

export default () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [state, setState] = useState(false); // State to handle the mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility
  const location = useLocation();

  const navigation = [
    { title: "Home", path: "/" },
    {
      title: "What We Do",
      subItems: [
        { title: "Data Analytics", path: "/dataanalysis" },
        { title: "Product Development", path: "/prod" },
        { title: "Cyber Security", path: "/cs" },
        { title: "SAP", path: "/sap" },
        { title: "Cloud Services", path: "/cld" },
        { title: "Script/Bot Development", path: "/script" },
      ],
    },
    { title: "Career", path: "/careers" },
    { title: "Blog", path: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block" id="home">
      <Link to="/">
        <img src={logo} width={150} height={50} alt="logo" />
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  const isContactPage = location.pathname === "/contact";

  return (
    <header>
      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 md:text-sm ${
          state
            ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div
          className={`gap-x-14 items-center max-w-screen-xl z-20 mx-auto mb-[-1rem] px-4 md:flex md:px-8 ${
            !isContactPage && isScrolled ? "fixed top-0 left-0 right-0 w-full z-10 " : ""
          }`}
          style={
            !isContactPage && isScrolled
              ? {
                  background: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(11px)",
                  WebkitBackdropFilter: "blur(11px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "10px",
                }
              : {}
          }
        >
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center font-[550] space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) =>
                item.subItems ? (
                  <li
                    key={idx}
                    className="text-gray-700 hover:text-gray-900 relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className="cursor-pointer">{item.title}</span>
                    {dropdownOpen && (
                      <ul
                        className="dropdown-menu absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10"
                        style={{
                          width: "8rem",
                          top: "100%",
                          marginTop: "-0.1rem",
                        }}
                      >
                        {item.subItems.map((subItem, subIdx) => (
                          <li
                            key={subIdx}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    key={idx}
                    className={`text-gray-700 hover:text-gray-900 ${
                      location.pathname === item.path
                        ? "text-blue-500 font-bold border-b-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Contact Us
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
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/kalticsblack.png";

// export default () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [state, setState] = useState(false); // State to handle the mobile menu toggle
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility
//   const location = useLocation();

//   const navigation = [
//     { title: "Home", path: "/" },
//     {
//       title: "What We Do",
//       subItems: [
//         { title: "Data Analytics", path: "/dataanalysis" },
//         { title: "Product Development", path: "/prod" },
//         { title: "Cyber Security", path: "/cs" },
//         { title: "SAP", path: "/sap" },
//         { title: "Cloud Services", path: "/cld" },
//         { title: "Script/Bot Development", path: "/script" },
//       ],
//     },
//     { title: "Career", path: "/careers" },
//     { title: "Blog", path: "/blogs" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const Brand = () => (
//     <div className="flex items-center justify-between py-5 md:block" id="home">
//       <Link to="/">
//         <img src={logo} width={150} height={50} alt="logo" />
//       </Link>
//       <div className="md:hidden">
//         <button
//           className="menu-btn text-gray-500 hover:text-gray-800"
//           onClick={() => setState(!state)}
//         >
//           {state ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );

//   const isContactPage = location.pathname === "/contact";

//   return (
//     <header>
//       <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
//         <Brand />
//       </div>
//       <nav
//         className={`pb-5 md:text-sm ${
//           state
//             ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
//             : ""
//         }`}
//       >
//         <div
//           className={`gap-x-14 items-center max-w-screen-xl z-20 mx-auto mb-[-1rem] px-4 md:flex md:px-8 ${
//             !isContactPage && isScrolled ? "fixed top-0 left-0 right-0 w-full z-10 " : ""
//           }`}
//           style={
//             !isContactPage && isScrolled
//               ? {
//                   background: "rgba(255, 255, 255, 0.3)",
//                   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                   backdropFilter: "blur(11px)",
//                   WebkitBackdropFilter: "blur(11px)",
//                   border: "1px solid rgba(255, 255, 255, 0.18)",
//                   borderRadius: "10px",
//                 }
//               : {}
//           }
//         >
//           <Brand />
//           <div
//             className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
//               state ? "block" : "hidden"
//             } `}
//           >
//             <ul className="flex-1 justify-center items-center font-[550] space-y-6 md:flex md:space-x-6 md:space-y-0">
//               {navigation.map((item, idx) =>
//                 item.subItems ? (
//                   <li
//                     key={idx}
//                     className="text-gray-700 hover:text-gray-900 relative"
//                     onMouseEnter={() => setDropdownOpen(true)}
//                     onMouseLeave={() => setDropdownOpen(false)}
//                   >
//                     <span className="cursor-pointer">{item.title}</span>
//                     {dropdownOpen && (
//                       <ul
//                         className="dropdown-menu absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10"
//                         style={{
//                           width: "8rem",
//                           top: "100%",
//                           marginTop: "-0.1rem",
//                         }}
//                       >
//                         {item.subItems.map((subItem, subIdx) => (
//                           <li
//                             key={subIdx}
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                           >
//                             <Link to={subItem.path}>{subItem.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ) : (
//                   <li key={idx} className="text-gray-700 hover:text-gray-900">
//                     <Link to={item.path} className="block">
//                       {item.title}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//             <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
//               <Link
//                 to="/contact"
//                 className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
//               >
//                 Contact Us
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };


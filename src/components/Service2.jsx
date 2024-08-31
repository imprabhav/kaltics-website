import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  { title: "Data Analytics", path: "/dataanalysis", iconColor: "purple-500", borderColor: "border-purple-500", bgColor: "bg-purple-500", subHeading: "Transform data into actionable insights with advanced analytics and visualization techniques. Leverage data-driven decisions to stay ahead of the competition." },
  { title: "Product Development", path: "/prod", iconColor: "indigo-500", borderColor: "border-indigo-500", bgColor: "bg-indigo-500", subHeading:"End-to-end development of websites and mobile apps tailored to enhance user experience and meet business objectives. Innovative product development to bring your vision to life." },
  { title: "SAP Development", path: "/sap", iconColor: "blue-400", borderColor: "border-blue-400", bgColor: "bg-blue-400", subHeading: "Custom SAP solutions to streamline and optimize your enterprise resource planning (ERP) processes. Empower your business with tailored SAP development for maximum efficiency."},
  { title: "Cyber Security", path: "/cs", iconColor: "red-500", borderColor: "border-red-500", bgColor: "bg-red-500", subHeading: "Safeguard your business with cutting-edge cybersecurity measures. Detect, prevent, and respond to threats with our comprehensive security solutions."},
  { title: "Script/Bot Development", path: "/script", iconColor: "green-500", borderColor: "border-green-500", bgColor: "bg-green-500", subHeading:"Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process."},
  { title: "Cloud Services", path: "/cld", iconColor: "yellow-400", borderColor: "border-yellow-400", bgColor: "bg-yellow-400", subHeading: "Efficient and scalable cloud solutions for storage, computing, and networking to support your business needs. Enhance your infrastructure with our seamless cloud integration."}
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div id="services" className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-10">
      <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 text-center">Our Services</h2>
      <p className="mb-12 text-lg text-gray-500 text-center">Explore the wide range of services we offer to elevate your business.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service.title}
            onClick={() => navigate(service.path)}
            className={`relative h-full p-6 bg-white border-2 ${service.borderColor} rounded-lg cursor-pointer transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl`}
          >
            <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${service.bgColor} rounded-lg opacity-20`}></span>
            <h3 className="my-4 text-xl font-bold text-gray-800">{service.title}</h3>
            <p className={`text-sm font-medium text-${service.iconColor} uppercase mb-4`}>------------</p>
            <p className="text-gray-600">{service.subHeading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

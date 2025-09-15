import React from "react";
import "./services.css";
import { FaCloud, FaLock, FaChartLine, FaBrain, FaBusinessTime, FaPalette, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Design seamless UI/UX and web experiences with cutting-edge technologies.",
    icon: <FaPalette />, 
  },
  {
    title: "App Development",
    description: "Build high-performance mobile applications for iOS and Android platforms.",
    icon: <FaMobileAlt />, 
  },
  {
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with secure and scalable cloud services.",
    icon: <FaCloud />,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with state-of-the-art security solutions.",
    icon: <FaLock />,
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage Gen AI to automate and enhance your business processes.",
    icon: <FaBrain />,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive business growth and innovation.",
    icon: <FaBusinessTime />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our <span className="highlight">Expertise</span></h2>
          <p className="services-description">
            We craft tailored technology solutions that drive success and innovation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
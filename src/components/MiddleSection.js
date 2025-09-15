import React, { useEffect } from "react";
import "./middleSection.css";
import HomeImage from "../assets/images/Home2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./Header";

const BlobBackground = () => {
  return (
    <div className="blobs-container">
      <motion.div 
        className="blob purple-blob"
        initial={{ x: -100, y: -100, opacity: 0.3 }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="blob yellow-blob"
        initial={{ x: 100, y: 100, opacity: 0.3 }}
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          transition: {
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />
    </div>
  );
};

const MiddleSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      <Header />
      <motion.section 
        className="middle-section" 
        id="middle"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <BlobBackground />
        <div className="text-content">
          <motion.div variants={itemVariants}>
            <div className="mini-heading">INNOVATE WITH CONFIDENCE</div>
          </motion.div>
          
          <motion.div className="transform-text" variants={itemVariants}>
            <span>T</span>ransform <br /> Your <span className="business-text">Business</span>
          </motion.div>
          
          <motion.div className="solutions-text" variants={itemVariants}>
            WITH CUTTING-EDGE SOLUTIONS
          </motion.div>
          
          <motion.div className="expert-container" variants={itemVariants}>
            <p className="expert-text">
              <span className="expert-highlight">Expert tech consultancy</span> by <span className="iit-highlight">IITians</span> who built India's first earthquake warning system
            </p>
          </motion.div>
          
          <motion.div className="btn-holder" variants={itemVariants}>
            <button 
              className="consultation-btn" 
              onClick={() => handleScroll("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Free Consultation
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="image-content"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          <img src={HomeImage} alt="Tech Solutions" className="main-image" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MiddleSection;
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './reviewPage.css';
import fullStar from "../assets/images/fullstar.png";
import halfStar from "../assets/images/halfstar.png";
// import emptyStar from "../assets/images/emptystar.png";

const ReviewPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions",
      rating: 5,
      comment: "Absolutely transformed our workflow! The team delivered beyond our expectations with their innovative approach and attention to detail.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateX",
      rating: 4.5,
      comment: "Working with this team was a game-changer. Their technical expertise and creative solutions helped us scale our platform seamlessly.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager, DigiCore",
      rating: 4.5,
      comment: "Exceptional service and support throughout our project. They consistently delivered high-quality work on tight deadlines.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <div className="review-page">
      <div className="review-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="review-title"
        >
          What Our Clients Say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="review-subtitle"
        >
          Trusted by innovative companies worldwide
        </motion.p>
      </div>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

const ReviewCard = ({ review, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  const renderStars = () => {
    // First card - 5 full stars
    if (index === 0) {
      return (
        <div className="stars-container">
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
        </div>
      );
    }
    // Second and third cards - 4.5 stars
    else {
      return (
        <div className="stars-container">
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={fullStar} alt="Full star" className="star-img" />
          <img src={halfStar} alt="Half star" className="star-img" />
        </div>
      );
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="review-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        z: 100
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <NeonBorder />
      <div className="card-content">
        <div className="card-header">
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="user-info">
            <h3 className="user-name">{review.name}</h3>
            <p className="user-role">{review.role}</p>
          </div>
        </div>
        <div className="rating">
          {renderStars()}
        </div>
        <p className="comment">{review.comment}</p>
        <div className="card-footer">
          <div className="quote-icon">❝</div>
        </div>
      </div>
    </motion.div>
  );
};

const NeonBorder = () => {
  return (
    <div className="neon-border">
      <motion.div 
        className="neon-line top"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="neon-line right"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />
      <motion.div 
        className="neon-line bottom"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />
      <motion.div 
        className="neon-line left"
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }}
      />
    </div>
  );
};

export default ReviewPage;
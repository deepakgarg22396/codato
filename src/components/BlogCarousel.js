import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./BlogCarousel.css";
import blog1img from "../assets/images/con1.jpg";
import blog2img from "../assets/images/con2.jpg";
import blog3img from "../assets/images/con3.jpg";
import blog4img from "../assets/images/con4.jpg";
import blog5img from "../assets/images/con5.jpg";

const blogs = [
  {
    id: 1,
    title: "Microservices Performance Optimization",
    author: "Alex Johnson",
    date: "March 17, 2025",
    readTime: "8 min read",
    summary: "Advanced techniques for scaling microservices architecture to handle millions of requests with minimal latency.",
    image: blog1img,
    category: "APIs",
    color: "#A45CFF",
    icon: "⚙️"
  },
  {
    id: 2,
    title: "AI in Modern Web Applications",
    author: "Sarah Chen",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    summary: "How to integrate machine learning models directly into frontend development workflows.",
    image: blog2img,
    category: "AI",
    color: "#A45CFF",
    icon: "🧠"
  },
  {
    id: 3,
    title: "The Future of Cloud Computing",
    author: "Michael Rodriguez",
    date: "Fev 07, 2025",
    readTime: "10 min read",
    summary: "Exploring serverless architecture and edge computing in modern cloud infrastructure.",
    image: blog3img,
    category: "Cloud",
    color: "#A45CFF",
    icon: "☁️"
  },
  {
    id: 4,
    title: "UX Design Principles for 2023",
    author: "Emma Wilson",
    date: "Oct 20, 2024",
    readTime: "7 min read",
    summary: "Creating intuitive user experiences in complex applications with cognitive load reduction.",
    image: blog4img,
    category: "Design",
    color: "#A45CFF",
    icon: "🎨"
  },
  {
    id: 5,
    title: "Blockchain for Enterprise Solutions",
    author: "David Kim",
    date: "May 20, 2024",
    readTime: "9 min read",
    summary: "Practical applications of blockchain technology beyond cryptocurrency in enterprise systems.",
    image: blog5img,
    category: "DLTs",
    color: "#A45CFF",
    icon: "⛓️"
  }
];

const BlogCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <section className="blog-section" id="blogs">
      <div className="blog-header">
        <motion.h2 
          className="blog-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="heading-gradient">Latest Insights</span>
        </motion.h2>
        <motion.p 
          className="blog-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore our collection of technical articles
        </motion.p>
      </div>
      
      <div className="cards-container">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="blog-card"
            onClick={() => handleCardClick(blog.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 30px rgba(164, 92, 255, 0.2)"
            }}
            style={{ 
              borderLeft: `4px solid ${blog.color}`,
              backgroundColor: `${blog.color}08`
            }}
          >
            <div className="card-decoration" style={{ backgroundColor: blog.color }}></div>
            <div className="card-icon">{blog.icon}</div>
            
            <div className="image-container">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="blog-image"
                loading="lazy"
              />
            </div>
            
            <div className="blog-details">
              <div className="category-badge" style={{ backgroundColor: blog.color }}>
                {blog.category}
              </div>
              
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              
              <h3 className="blog-title">{blog.title}</h3>
              
              <p className="blog-summary">{blog.summary}</p>
              
              <div className="blog-author">
                <div 
                  className="author-avatar" 
                  style={{ backgroundColor: blog.color }}
                >
                  {blog.author.charAt(0)}
                </div>
                <span>{blog.author}</span>
              </div>
            </div>
            
            {/* <div className="read-more">
              Read Article →
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogCarousel;
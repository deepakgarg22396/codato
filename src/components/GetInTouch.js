import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import "./getInTouch.css";
import contactImage from "../assets/images/getin.png";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://codato.in/subscribe",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-container"
      >
        {/* Left Side Image - Visible on all screens */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={contactImage}
            alt="Contact Us"
            className="image-responsive"
          />
        </motion.div>

        {/* Right Side Contact Form */}
        <div className="contact-card">
          <h2 className="contact-title">
            Get in <span className="highlight">Touch</span>
          </h2>
          <p className="contact-subtitle">
            We'd love to hear from you! Fill out the form below.
          </p>
          {success && (
            <motion.p 
              className="contact-success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {success}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <User className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <MessageSquare className="input-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="input-field textarea"
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
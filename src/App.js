import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MiddleSection from "./components/MiddleSection";
import StatsSection from './components/StatsSection';
import "./App.css";
import TrustedByUs from "./components/TrustedByUs";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import GetInTouch from "./components/GetInTouch";
import BlogCarousel from "./components/BlogCarousel";
import BlogPage from "./components/BlogPage";
import BackgroundWrapper from './components/BackgroundWrapper';
import ReviewPage from "./components/ReviewPage";

const Home = () => (
  <>
    <MiddleSection />
    <StatsSection />
    <TrustedByUs />
    <TechStack />
    <Services />
    <ReviewPage />
    <BlogCarousel />
    <GetInTouch />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <BackgroundWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
};

export default App;
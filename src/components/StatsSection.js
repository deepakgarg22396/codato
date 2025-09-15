import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./statsSection.css";

const StatsSection = () => {
  const [counterKey, setCounterKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <div className="countup">
            <CountUp key={counterKey} className="countup-number" start={0} end={7} duration={2} />
            <span className="plus-sign">+</span>
          </div>
          <p className="stat-label">Years of Experience</p>
        </div>
        
        <div className="stat-item">
          <div className="countup">
            <CountUp key={counterKey} className="countup-number" start={0} end={150} duration={3} />
            <span className="plus-sign">+</span>
          </div>
          <p className="stat-label">Skilled Professionals</p>
        </div>
        
        <div className="stat-item">
          <div className="countup">
            <CountUp key={counterKey} className="countup-number" start={0} end={100} duration={2} />
            <span className="plus-sign">+</span>
          </div>
          <p className="stat-label">Projects Worldwide</p>
        </div>
        
        <div className="stat-item">
          <div className="countup">
            <CountUp key={counterKey} className="countup-number" start={0} end={99} duration={2} />
            <span className="plus-sign">%</span>
          </div>
          <p className="stat-label">Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
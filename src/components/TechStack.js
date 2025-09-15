import React, { useEffect, useRef } from "react";
import "./techStack.css";
import react from "../assets/images/react.png";
import python from "../assets/images/python.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import angular from "../assets/images/angular.png";
import swift from "../assets/images/swift.png";
import mysql from "../assets/images/mysql.png";
import android from "../assets/images/android.png";
import generativeai from "../assets/images/generativeai.png";
import postgre from "../assets/images/postgre.png";
import java from "../assets/images/java.png";
import illustrator from "../assets/images/illustrator.png";
import figma from "../assets/images/figma.png";
import openai from "../assets/images/openai.png";
import azure from "../assets/images/azure.png";
import aws from "../assets/images/aws.png";
import docker from "../assets/images/docker.png";
import mongo from "../assets/images/mongo.png";
import oracle from "../assets/images/oracle.png";
import go from "../assets/images/go.png";
import github from "../assets/images/github.png";
import flutter from "../assets/images/flutter.png";
import gcp from "../assets/images/gcp.png";
import html from "../assets/images/html.png";

const TechStack = () => {
  const solarSystemRef = useRef(null);

  // Tech facts positioned in specific quadrants
  const techFacts = [
    { text: "JavaScript was created in 10 days!", position: { top: '20%', left: '20%' } },
    { text: "Python is named after Monty Python", position: { top: '20%', right: '20%' } },
    { text: "React was first deployed on Facebook", position: { bottom: '20%', left: '20%' } },
    { text: "Go was created at Google in 2007", position: { bottom: '20%', right: '20%' } },
    { text: "First computer bug was a real moth", position: { top: '40%', left: '10%' } },
    { text: "TypeScript = JavaScript + Types", position: { top: '40%', right: '10%' } },
  ];

  // Star positions
  const starPositions = [
    { top: '10%', left: '10%' }, { top: '15%', left: '25%' },
    { top: '10%', right: '10%' }, { top: '15%', right: '25%' },
    { bottom: '10%', left: '10%' }, { bottom: '15%', left: '25%' },
    { bottom: '10%', right: '10%' }, { bottom: '15%', right: '25%' }
  ];

  // Orbit configuration
  const orbits = [
    { radius: 80, icons: [react, javascript] },
    { radius: 140, icons: [angular, android, postgre, java] },
    { radius: 200, icons: [illustrator, python, azure, figma, typescript, swift] },
    { radius: 260, icons: [go, github, flutter, mysql, html, generativeai, docker, gcp] }
  ];

  useEffect(() => {
    let animationId;
    const animate = () => {
      if (!solarSystemRef.current) return;
      
      const isMobile = window.innerWidth < 768;
      const orbitElements = solarSystemRef.current.querySelectorAll('.orbit');
      
      orbitElements.forEach((orbit, index) => {
        const speeds = isMobile ? [0.04, -0.03, 0.02, -0.016] : [0.02, -0.015, 0.01, -0.008];
        const speed = speeds[index];
        
        const rotation = (prevRotation) => {
          const newRotation = (prevRotation + speed) % 360;
          orbit.style.transform = `rotate(${newRotation}deg)`;
          return newRotation;
        };
        
        const prevRotation = parseFloat(orbit.dataset.rotation || 0);
        orbit.dataset.rotation = rotation(prevRotation);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="techstack" className="tech-stack-section">
      <h1 className="stylish-heading">
        Find the <span className="highlighted">Best</span> Technology for
        <br />
        Your Product
      </h1>

      <div className="solar-system" ref={solarSystemRef}>
        
        {starPositions.map((pos, index) => (
          <div 
            key={`star-${index}`}
            className="star"
            style={pos}
          />
        ))}

        {/* Strategically placed tech facts */}
        {techFacts.map((fact, index) => (
          <div 
            key={`fact-${index}`} 
            className="tech-fact"
            style={fact.position}
          >
            {fact.text}
          </div>
        ))}

        <div className="central-core">
          <div className="core-glow"></div>
        </div>
        
        {/* Orbit tracks */}
        {orbits.map((orbit, i) => (
          <div 
            key={`track-${i}`} 
            className={`orbit-track orbit-${i+1}`}
            style={{ 
              width: `${orbit.radius * 2}px`, 
              height: `${orbit.radius * 2}px` 
            }}
          ></div>
        ))}
        
        {/* Orbiting icons */}
        {orbits.map((orbit, orbitIndex) => (
          <div 
            key={`orbit-${orbitIndex}`}
            className={`orbit orbit-${orbitIndex+1}`}
            data-rotation="0"
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`
            }}
          >
            {orbit.icons.map((icon, iconIndex) => {
              const angle = (iconIndex * 360) / orbit.icons.length;
              return (
                <div 
                  className="orbiting-icon" 
                  key={`${orbitIndex}-${iconIndex}`}
                  style={{
                    transform: `rotate(${angle}deg) translateX(${orbit.radius}px) rotate(-${angle}deg)`
                  }}
                >
                  <div className="icon-container">
                    <img 
                      src={icon} 
                      width="24" 
                      height="24" 
                      alt="Tech icon" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
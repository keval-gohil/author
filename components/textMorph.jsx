"use client"
import React, { useEffect, useRef } from 'react';

const TextMorph = () => {
  const elts = useRef({
    text1: null,
    text2: null,
  });

  const texts = [
    "DevOps",
    "Developer",
    "Designer",
    "Architect",
    "Analyst",
    "Admin",
  ];

  const morphTime = 1;
  const cooldownTime = 1;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  useEffect(() => {
    elts.current.text1.textContent = texts[textIndex % texts.length];
    elts.current.text2.textContent = texts[(textIndex + 1) % texts.length];

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    const setMorph = (fraction) => {
      elts.current.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.current.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.current.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.current.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.current.text1.textContent = texts[textIndex % texts.length];
      elts.current.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    const doCooldown = () => {
      morph = 0;

      elts.current.text2.style.filter = "";
      elts.current.text2.style.opacity = "100%";

      elts.current.text1.style.filter = "";
      elts.current.text1.style.opacity = "0%";
    }

    const animate = () => {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <span className="text1" ref={el => (elts.current.text1 = el)}></span>
        <span className="text2" ref={el => (elts.current.text2 = el)}></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold" x="0" y="0" width="100%" height="100%">
            <feColorMatrix in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default TextMorph;

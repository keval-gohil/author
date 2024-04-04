"use client"

import React, { useEffect, useState } from 'react';

const FAQ = () => {
  useEffect(() => {
    const handleButtonClick = (event) => {
      const question = event.target.closest('.faq__question');
      if (!question) return;
      const answer = question.nextElementSibling;
      // hide previously opened answer and show the clicked answer
      const currentAnswer = document.querySelector('.faq__answer[aria-hidden="false"]');
      if (currentAnswer === answer) {
        // close the already open answer
        answer.setAttribute('aria-hidden', 'true');
        answer.parentNode.classList.remove('faq__item--expanded');
        question.setAttribute('aria-expanded', 'false');
      } else {
        // hide previously open answer and show the clicked answer
        if (currentAnswer) {
          currentAnswer.setAttribute('aria-hidden', 'true');
          currentAnswer.parentNode.classList.remove('faq__item--expanded');
          currentAnswer.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
        answer.setAttribute('aria-hidden', 'false');
        answer.parentNode.classList.add('faq__item--expanded');
        question.setAttribute('aria-expanded', 'true');
      }
    };

    const faq = document.querySelector('.faq');
    faq.addEventListener('click', handleButtonClick);

    return () => {
      faq.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <section className="faq">

      <div className="faq__item">
        <button className="faq__question" aria-expanded="false" aria-controls="answer1">
            Who am I?
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <p className="faq__answer-text">
            In my case, I am a Code Architect shaping the web with user-centric experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="faq__item">
        <button className="faq__question" aria-expanded="false" aria-controls="answer1">
        What is Kditor? and Why do we use it?
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <p className="faq__answer-text">
            Kditor is a real-time code editor built upon Firebase, designed to streamline collaboration among developers, It facilitates seamless collaboration among team members, enabling them to edit code simultaneously.
            </p>
          </div>
        </div>
      </div>

      <div className="faq__item">
        <button className="faq__question" aria-expanded="false" aria-controls="answer1">
            What is Komponents and Kffects UI?
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <p className="faq__answer-text">
            Komponents is a web app featuring numerous built-in UI components for Next.js and Node.js environments, complemented by the Kffects UI CDN.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default FAQ;

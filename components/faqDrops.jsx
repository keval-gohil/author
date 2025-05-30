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
          Who am I...
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <div className="faq__answer-text">
              <ul className="about-me">
                <li>In my case, I am a Code Architect shaping the web with user-centric experiences.</li>
                <li>A BCA graduate (Class of 2024), proud to have secured 1st rank, demonstrating my dedication and hard work.</li>
                <li>A storyteller through video edits, capturing emotions in just a few frames.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="faq__item">
        <button className="faq__question" aria-expanded="false" aria-controls="answer1">
          About favoritism...
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <div className="faq__answer-text">
              <ul className="about-me">
                <li>A creative soul with a passion for designing transitions that speak louder than words.</li>
                <li>An artist at heart, I find joy in sketching, drawing, and exploring visual creativity.</li>
                <li>Fitness enthusiast, committed to staying active and maintaining balance through workouts.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="faq__item">
        <button className="faq__question" aria-expanded="false" aria-controls="answer1">
          About work, what I do...
          <i className="faq__icon iconamoon--arrow-right-2"></i>
        </button>
        <div className="faq__answer" id="answer1" aria-hidden="true">
          <div className="faq__answer-inner">
            <div className="faq__answer-text">
              <ul className="about-me">
                <li>Patiently passionate about patience – a virtue I bring to every project I take on – whether I’m shaping user interfaces or architecting full-stack applications.</li>
                <li>A perfectionist when it comes to crafting seamless transitions – mic drop moments guaranteed.</li>
                <li>As a developer and editor, with an unwavering focus on learning and growing, I continue to explore new creative dimensions every day.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default FAQ;

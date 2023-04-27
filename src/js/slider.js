(function () {
  'use strict';
  const HORIZONTAL_MOBILE_PADDING = 16;
  const DESKTOP_WIDTH = 1024;
  const MAX_SLIDE_WIDTH = 576;
  let slideWidth;
  let transition;
  let totalSlides;
  const slideList = document.querySelector('.form__list');
  const slides = document.querySelectorAll('.form__item');
  const sliderNextBtns = document.querySelectorAll('.form__next');
  const sliderBackBtns = document.querySelectorAll('.form__back');
  const numberSlideList = document.querySelectorAll('.form__step-number');
  const totalSlideList = document.querySelectorAll('.form__step-all');

  defineSlideWidth();
  addSlideNumbering();

  function defineSlideWidth() {
    if (window.screen.width >= DESKTOP_WIDTH) {
      slideWidth = MAX_SLIDE_WIDTH;
    } else {
      slideWidth = window.screen.width - HORIZONTAL_MOBILE_PADDING * 2;
    }

    slideList.style.width = `${slideWidth}px`;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.width = `${slideWidth}px`;
    }
  };

  function addSlideNumbering() {
    totalSlides = slides.length;
    
    for (let i = 0; i < numberSlideList.length; i++) {
      const slideNumber = i + 1;
      numberSlideList[i].innerHTML = slideNumber;
    }

    for (let i = 0; i < totalSlideList.length; i++) {
      totalSlideList[i].innerHTML = totalSlides;
    }
  }

  for (let i = 0; i < sliderNextBtns.length-1; i++) {
    sliderNextBtns[i].addEventListener('click', () => {
      showNextSlide(i);
    })
  }

  for (let i = 0; i < sliderBackBtns.length; i++) {
    sliderBackBtns[i].addEventListener('click', () => {
      showBackSlide();
    })
  }

  function showNextSlide(i) {
    transition = -slideWidth*(i + 1);
    slideList.style.transform = `translateX(${transition}px)`;
  }

  function showBackSlide() {
    transition = transition+slideWidth;
    slideList.style.transform = `translateX(${transition}px)`;
  }

  window.addEventListener('resize', () => {
    defineSlideWidth();
  });
})()
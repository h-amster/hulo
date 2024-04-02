"use strict"

import Swiper from 'swiper';

const stepButtons = document.querySelectorAll('.process__step-button');

stepButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const box = e.target.parentElement.parentElement;
    const content = e.target.parentElement.parentElement.children[2];

    box.classList.toggle('process__step--open');

    console.log(box, content);

    if (content.style.maxHeight) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  })
})

const goTopBtn = document.querySelector('.footer__back-top');

goTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 175,
  slidesPerView: 1,
  breakpoints: {
    900: {
      slidesPerView: 1.3,
    },
  }
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(function(slide, index) {
  slide.addEventListener('click', () => {
    swiper.slideTo(index);
  });
});


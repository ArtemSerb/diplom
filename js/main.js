$(function() {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
    });
  });
  window.onload = () => {
  const facilitiesSlides = [
    ...document.querySelectorAll('.slider-facilities__image'),
  ];

  const facilitiesSlider = new Swiper('.facilities__slider', {
    observer: true,
    observeParents: true,
    thumbs: {
      swiper: {
        el: '.facilities__nav',
        slidesPerView: facilitiesSlides.length,
        direction: 'vertical',
      },
    },

    initialSlide: 1,

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  const spacesSlider = document.querySelector('.slider-spaces');
  const spacesSlides = [...spacesSlider.querySelectorAll('.swiper-slide')];
  const spacesCurrentSlide = spacesSlider.querySelector(
    '.slider-spaces__current'
  );
  const spacesAllSlides = spacesSlider.querySelector('.slider-spaces__all');

  const spacesSwiper = new Swiper('.slider-spaces', {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.spaces-next',
      prevEl: '.spaces-prev',
    },

    pagination: {
      el: '.slider-spaces__progressbar',
      type: 'progressbar',
    },

    watchOverFlow: true,

    loop: true,
    speed: 800,

    slidesPerView: 3,
    spaceBetween: 30,

    on: {
      init: function () {
        spacesAllSlides.textContent = setZeroFormat(spacesSlides.length);
      },
      slideChange: function (slider) {
        let currentSlide = ++slider.realIndex;
        spacesCurrentSlide.textContent = setZeroFormat(currentSlide);
      },
    },

    breakpoints: {
      //when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      //when window width is >= 480px
      767.98: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
      },
    },
  });
  const gallerySlider = new Swiper('.gallery__slider', {
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },

    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 800,
  });
  const reviewsSlider = new Swiper('.reviews__slider', {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },

    pagination: {
      el: '.slider-reviews__progressbar',
      type: 'progressbar',
    },

    slidesPerView: 'auto',
    speed: 800,
    loop: true,
    spaceBetween: 30,
  });
  function setZeroFormat(item) {
    let result = item >= 10 ? item : '0' + item;
    return result;
  }
};
let burgerMenu = document.querySelector('.burger-header');
let menu = document.querySelector('.nav-header__list');

if (burgerMenu != null) {
  burgerMenu.addEventListener('click', function (e) {
    if (!burgerMenu.classList.contains('_active')) {
      burgerMenu.classList.toggle('_active');
      menu.classList.toggle('_active');
      return;
    } else {
      burgerMenu.classList.toggle('_active');
      menu.classList.toggle('_active');
    }
  });
}

  
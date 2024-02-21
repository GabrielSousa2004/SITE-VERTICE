var swiper = new Swiper(".integrantes", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween:5
    },
    500: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 4,
      
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".ant"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
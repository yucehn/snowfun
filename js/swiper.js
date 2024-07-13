var swiper = new Swiper(".skiResort-swiper", {
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      }
    },
  });

  var swiper = new Swiper(".strategy-swiper", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      }
    },
  });
document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // other Swiper options...
    });
  });

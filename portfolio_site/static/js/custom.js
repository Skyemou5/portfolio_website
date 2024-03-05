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

  // document.querySelectorAll('.project-images-grid img').forEach(image => {
  //   image.addEventListener('click', function() {
  //     document.getElementById('large-image').src = this.src;
  //     document.getElementById('image-overlay').style.display = 'flex';
  //   });
  // });
  
  // document.getElementById('close-overlay').addEventListener('click', function() {
  //   document.getElementById('image-overlay').style.display = 'none';
  // });

  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.image-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const src = this.getAttribute('href');
        const overlay = document.getElementById('image-overlay');
        const largeImage = document.getElementById('large-image');
        const closeOverlay = document.getElementById('close-overlay');
  
        largeImage.src = src;
        overlay.style.display = 'flex';
  
        closeOverlay.onclick = function() {
          overlay.style.display = 'none';
        };
      });
    });
  });
  
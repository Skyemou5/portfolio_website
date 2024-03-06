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

// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('.image-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       const src = this.getAttribute('href');
//       const overlay = document.getElementById('image-overlay');
//       const largeImage = document.getElementById('large-image');
//       const closeOverlay = document.getElementById('close-overlay');

//       largeImage.src = src;
//       overlay.style.display = 'flex';

//       closeOverlay.onclick = function() {
//         overlay.style.display = 'none';
//       };
//     });
//   });
// });

// function setupLightbox(links) {
//   links.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       const src = this.getAttribute('href') || this.getAttribute('src');
//       const overlay = document.getElementById('image-overlay');
//       const largeImage = document.getElementById('large-image');
//       const closeOverlay = document.getElementById('close-overlay');

//       largeImage.src = src;
//       overlay.style.display = 'flex';

//       closeOverlay.onclick = function() {
//         overlay.style.display = 'none';
//         largeImage.src = ''; // Clear the image src
//       };
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Setup lightbox for individual images with 'image-link' class
//   const imageLinks = document.querySelectorAll('.image-link');
//   setupLightbox(imageLinks);

//   // Setup lightbox for images inside 'image-grid' class
//   // Assumes image-grid images are wrapped in an <a> tag with 'href' pointing to the large image
//   const gridImages = document.querySelectorAll('.image-grid a');
//   setupLightbox(gridImages);
// });

// 



document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('image-overlay');
  const largeImage = document.getElementById('large-image');
  const closeOverlay = document.getElementById('close-overlay');

  // Function to handle opening the overlay
  function openOverlay(src) {
    largeImage.src = src;
    overlay.style.display = 'flex';
  }

  // Function to handle closing the overlay
  function closeOverlayFunc() {
    overlay.style.display = 'none';
    largeImage.src = ''; // Clear the image src
  }

  // Wrap .image-grid images with <a> if not already wrapped
  const gridImages = document.querySelectorAll('.image-grid img:not(:has(>img))');
  gridImages.forEach(img => {
    const src = img.src; // Get the image source
    const aTag = document.createElement('a');
    aTag.href = src;
    aTag.className = 'image-link';
    img.parentNode.insertBefore(aTag, img);
    aTag.appendChild(img);
  });

  // Initialize lightbox functionality for all .image-link
  const imageLinks = document.querySelectorAll('.image-link');
  imageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openOverlay(this.href);
    });
  });

  // Clicking the overlay background (but not the image itself) closes the overlay
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlayFunc();
    }
  });

  // Clicking the close button closes the overlay
  closeOverlay.addEventListener('click', closeOverlayFunc);

  // Prevent clicking the image from propagating to the overlay
  largeImage.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

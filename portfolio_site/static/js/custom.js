// document.addEventListener('DOMContentLoaded', () => {
//     var mySwiper = new Swiper('.swiper-container', {
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       // other Swiper options...
//     });
//  });

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

  if (overlay && largeImage && closeOverlay) {
    // Function to handle opening the overlay
    function openOverlay(src) {
      largeImage.src = src;
      overlay.style.display = 'flex';
    }

    // Function to handle closing the overlay
    function closeOverlayFunc() {
      overlay.style.display = 'none';
      largeImage.src = '';
    }

    // Wrap .image-grid images with <a> tags and add event listeners
    const gridImages = document.querySelectorAll('.image-grid img:not(:has(>img))');
    gridImages.forEach(img => {
      const src = img.getAttribute('src'); // Get the image source
      const aTag = document.createElement('a');
      aTag.href = src;
      aTag.className = 'image-link';
      img.parentNode.insertBefore(aTag, img);
      aTag.appendChild(img);

      // Adding click event listener to the newly created <a> tag
      aTag.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        openOverlay(this.href);
      });
    });

    // Initialize lightbox functionality for all .image-link
    document.querySelectorAll('.image-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
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
  }
});


// Banner Parallax
// document.addEventListener('DOMContentLoaded', () => {
//   const banner = document.querySelector('.banner');

//   if (banner) {
//     const maxHeight = banner.offsetHeight;
    
//     window.addEventListener('scroll', () => {
//       let scrollDistance = window.pageYOffset;
//       let backgroundPositionY = Math.max(0, maxHeight + scrollDistance * 0.2);
//       banner.style.backgroundPosition = `30% ${backgroundPositionY}px`;
//     });
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const banner = document.querySelector('.banner');

//   if (banner) {
//     // Adjust the rate of parallax effect based on the device
//     const parallaxRate = window.innerWidth > 768 ? 0.1 : 0.5;
    
//     window.addEventListener('scroll', () => {
//       requestAnimationFrame(() => {
//         const scrollDistance = window.scrollY;
//         const bannerRect = banner.getBoundingClientRect();
//         const startOffset = (window.innerHeight - bannerRect.height) / 2;

//         let backgroundPositionY = startOffset - scrollDistance * parallaxRate;
//         // Prevent the image from moving too far up or down
//         backgroundPositionY = Math.min(bannerRect.height, Math.max(0, backgroundPositionY));

//         banner.style.backgroundPosition = `50% ${backgroundPositionY}px`;
//       });
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.banner');

  if (banner) {
    window.addEventListener('scroll', () => {
      // Calculate the new position of the background
      let scrollOffset = window.pageYOffset;
      let backgroundPositionY = scrollOffset * 0.2; // Change 0.2 to adjust the parallax speed
      
      // Apply the new background position, moving down, but not past the bottom of the banner
      banner.style.backgroundPosition = `center calc(100% + ${backgroundPositionY}px)`;
    });
  }
});



// document.addEventListener('DOMContentLoaded', () => {
//   const banner = document.querySelector('.banner');
  
//   if (banner) {
//     const bannerRect = banner.getBoundingClientRect();
//     const startOffset = bannerRect.top + window.scrollY; // Banner's initial offset from top
//     const maxHeight = banner.offsetHeight; // The banner's height

//     window.addEventListener('scroll', () => {
//       const scrollDistance = window.scrollY - startOffset; // Distance scrolled from banner's top
//       let backgroundPositionY = Math.min(maxHeight, scrollDistance * 0.3); // Ensure it doesn't go past the top edge
//       banner.style.backgroundPosition = `50% ${backgroundPositionY}px`;
//     });
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const banner = document.querySelector('.banner');

//   if (banner) {
//     // Get the initial background size and position
//     const bannerRect = banner.getBoundingClientRect();
//     const initialOffset = bannerRect.height;

//     window.addEventListener('scroll', () => {
//       // Calculate the offset for the background position
//       const scrollDistance = window.pageYOffset;
//       const backgroundPositionY = Math.min(0, initialOffset - scrollDistance * 0.5);

//       // Apply the background position style, ensuring it doesn't go past the top edge
//       banner.style.backgroundPosition = `center ${backgroundPositionY}px`;
//     });
//   }
// });



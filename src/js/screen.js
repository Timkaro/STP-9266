// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';

// let swiperInstance = null;

// function setStaticView(isStatic) {
//   const swiperEl = document.querySelector('.swiper-wrapper');
//   if (!swiperEl) return;
//   if (isStatic) {
//     swiperEl.classList.add('static-view');
//   } else {
//     swiperEl.classList.remove('static-view');
//   }
// }

// function initSwiper() {
//   const isMobile = window.innerWidth < 1200;

//   if (isMobile && !swiperInstance) {
//     setStaticView(false);
//     swiperInstance = new Swiper('#sc-swiper', {
//       loop: true,
//       modules: [Navigation, Keyboard],
//       slidesPerView: 1,
//       spaceBetween: 20,
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//       },
//       navigation: {
//         nextEl: '[data-next="next"]',
//         prevEl: '[data-prev="prev"]',
//       },
//     });
//   } else if (!isMobile && swiperInstance) {
//     swiperInstance.destroy(true, true);
//     swiperInstance = null;
//     setStaticView(true);
//   } else if (!isMobile) {
//     setStaticView(true);
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   initSwiper();
//   window.addEventListener('resize', initSwiper);
// });
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation, Keyboard]);

const swiper = new Swiper('#sc-swiper', {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '[data-next="next"]',
    prevEl: '[data-prev="prev"]',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

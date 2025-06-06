import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation, Keyboard]);

const swiper = new Swiper('#story-swiper', {
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
      spaceBetween: 30,
    },
  },
});

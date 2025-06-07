import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('#story-swiper', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
      320: {
      slidesPerView: 1,
      spaceBetween: 20,
      },

      1200: {
      slidesPerView: 3,
      spaceBetween: 104,
      }, 
      }
});
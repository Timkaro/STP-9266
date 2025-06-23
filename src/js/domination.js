import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let domSwiperInstance = null;

function initDomSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1200 && !domSwiperInstance) {
    domSwiperInstance = new Swiper('#dom-swiper', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 1200 && domSwiperInstance) {
    domSwiperInstance.destroy(true, true);
    domSwiperInstance = null;
  }
}

window.addEventListener('load', initDomSwiper);
window.addEventListener('resize', initDomSwiper);

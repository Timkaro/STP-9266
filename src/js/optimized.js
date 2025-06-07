import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let optSwiperInstance = null;

function initOptSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1200 && !optSwiperInstance) {
    optSwiperInstance = new Swiper('#opt-swiper', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 1200 && optSwiperInstance) {
    optSwiperInstance.destroy(true, true);
    optSwiperInstance = null;
  }
}

window.addEventListener('load', initOptSwiper);
window.addEventListener('resize', initOptSwiper);
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let ctaSwiperInstance = null;

function initCtaSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1200 && !ctaSwiperInstance) {
    ctaSwiperInstance = new Swiper('#cta-swiper', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '#cta-swiper .swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 1200 && ctaSwiperInstance) {
    ctaSwiperInstance.destroy(true, true);
    ctaSwiperInstance = null;
  }
}

window.addEventListener('load', initCtaSwiper);
window.addEventListener('resize', initCtaSwiper);

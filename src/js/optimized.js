import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

let swiperInstance = null;

function setStaticView(isStatic) {
  const swiperEl = document.querySelector('.swiper-wrapper');
  if (!swiperEl) return;
  if (isStatic) {
    swiperEl.classList.add('static-view');
  } else {
    swiperEl.classList.remove('static-view');
  }
}

function initSwiper() {
  const isMobile = window.innerWidth < 1200;

  if (isMobile && !swiperInstance) {
    setStaticView(false);
    swiperInstance = new Swiper('#opt-swiper', {
      loop: true,
      modules: [Navigation, Keyboard],
      slidesPerView: 1,
      spaceBetween: 50,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        nextEl: '[data-next="next-opt"]',
        prevEl: '[data-prev="prev-opt"]',
      },
    });
  } else if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    setStaticView(true);
  } else if (!isMobile) {
    setStaticView(true);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  window.addEventListener('resize', initSwiper);
});

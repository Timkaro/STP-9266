import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('#cta-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
});

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay} from 'swiper/modules';
import 'swiper/css';

const imagenes = [
    '/TechIcons/astro.svg',
    '/TechIcons/tailwindcss.svg',
    '/TechIcons/react.svg',
    '/TechIcons/mysql.svg',
    '/TechIcons/java.svg',
    '/TechIcons/javascript.svg',
    '/TechIcons/bootstrap.svg',
    '/TechIcons/vercel.svg',
    '/TechIcons/ionic.svg',
    '/TechIcons/git.svg',
    '/TechIcons/typescript.svg',
    '/TechIcons/css.svg',
    '/TechIcons/html5.svg',
    '/TechIcons/angular.svg',

]

export default function SwiperTech() {
    return (
        <section className="xl:size-9/12 lg:size-11/12 md:size-[100%] sm:size-[60%] size-96 mt-10">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect={'coverflow'}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            className="coverflow"
          >
            {imagenes.map((p, index) => {
              return (
                <SwiperSlide key={index} >
                  <img src={p} alt="" class="lg:w-40 md:w-40 sm:w-36 h-36 px-5 block" />
                </SwiperSlide>
              );
            })}
          </Swiper>
      </section>
    );
  }
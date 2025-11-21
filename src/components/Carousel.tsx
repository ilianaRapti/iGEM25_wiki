
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay, Mousewheel, EffectFade} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"

import { Footer } from "./Footer";
import { Link } from "react-router-dom";

// last so they override other styles if needed
import "./Carousel.css"
import "./Footer.css"

export function Carousel({ urls, variant }: { urls: string[]; variant?: 'home' | 'default' }) {
   const isHome = variant === 'home';
      
    return (
      <>
        <div className={`carousel ${isHome ? 'home-carousel' : ''}`} >
          <Swiper
          id="home-swiper"
          className={isHome ? 'home-swiper' : undefined}
          modules={[ Pagination, Autoplay, Mousewheel, EffectFade ]}
          autoplay={ false }
          direction="vertical"
          mousewheel= {{ forceToAxis: true, releaseOnEdges: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoHeight={ false }
          slidesPerView={ 1 }
          spaceBetween={ 0 }>
            { urls.map((url, index) => (
                <SwiperSlide key={index} className="slide-bg" style={{ backgroundImage: `url(${url})`}}>
                  <img src={url} alt="" id= { "home" + index.toString() }/>                  
                </SwiperSlide>
            ))}
            <SwiperSlide id="footer-slide">
              <div  className="footer-slide-wrapper">
                <div className="home-end">
                    <h3>Our Nominations</h3>
                    <div className="nomination-links">
                      <Link to="/parts" className="nominations-link">
                        <img className="nomination" src="https://static.igem.wiki/teams/5684/wikipics/home/parts.webp" alt="nomination" />
                      </Link>
                      <Link to="/enterpreneurship" className="nominations-link">
                        <img className="nomination" src="https://static.igem.wiki/teams/5684/wikipics/home/new-entrep.webp" alt="nomination" />
                      </Link>
                      <Link to="/inclusivity" className="nominations-link">
                        <img className="nomination" src="https://static.igem.wiki/teams/5684/wikipics/home/new-inc.webp" alt="nomination" />
                      </Link>
                    </div>
                </div>
                <div id="footer-slide-container">
                  <Footer/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    )
}

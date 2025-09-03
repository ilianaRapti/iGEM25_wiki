import { stringToSlug } from "../utils";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import './Footer.css';
import 'swiper/css';
import 'swiper/css/pagination'

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="myfooter">
      <div className="container">
        <div className="footer-top">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/footer/amadryads-logo.webp"
            alt="Amadryads Logo"
            className="footer-logo"
          />

          <div className="footer-socials">
            <a href="mailto:igemioannina@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/mailicon.webp" alt="Email"/>
            </a>

            <a href="https://www.facebook.com/igemioannina/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/facebookicon.webp" alt="Facebook"/>
            </a>

            <a href="https://www.instagram.com/igemioannina/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/instagramicon.webp" alt="Instagram"/>
            </a>
            
            <a href="https://www.tiktok.com/@igemioannina" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/tiktokicon.webp" alt="Tiktok"/>
            </a>

            <a href="https://igemioannina.unit.uoi.gr/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/wordpressicon.webp" alt="Wordpress"/>
            </a>

            <a href="https://www.linkedin.com/in/igem-ioannina-a417012b1/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.igem.wiki/teams/5684/wikipics/footer/linkedin.webp" alt="Linkedin"/>
            </a>
          </div>
        </div>

        <div className="footer-carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{delay: 2500, disableOnInteraction: false}}
            pagination={{clickable: true}}
            loop={true}
            slidesPerView={3}
            spaceBetween={8}
          >
            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/antisel.webp" alt="antisel"/>
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/helppharm.webp" alt="helppharm"/>
            </SwiperSlide>

             <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/ite.webp" alt="ite"/>
            </SwiperSlide>  
    
            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/kd.webp" alt="kd"/>
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/perifereia.webp" alt="perifereia"/>
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/pfi.webp" alt="pfi"/>
            </SwiperSlide>  
            
            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/polyeco.webp" alt="polyeco"/>
            </SwiperSlide> 

            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/sayyes.webp" alt="sayyes"/>
            </SwiperSlide> 

            <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/sygenta.webp" alt="sygenta"/>
            </SwiperSlide>

             <SwiperSlide>
              <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/uoi.webp" alt="uoi"/>
            </SwiperSlide> 
          </Swiper>
        </div>

        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2025 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

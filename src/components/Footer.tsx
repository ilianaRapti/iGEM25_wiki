import { stringToSlug } from "../utils";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import { Link } from "react-router-dom";

// last so they override other styles if needed
import './Footer.css';


export function Footer({ onReady }: { onReady?: (swiper: any) => void }) {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="myfooter">
      <div className="footer-container">
        <img src="https://static.igem.wiki/teams/5684/wikipics/footer/footer-bg-final.webp" alt="Footer Background" className="footer-bg"/>
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
          <Link to="/sponsors" className="sponsors-link">
            <div className="footer-carousel">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                pagination={{clickable: true}}
                loop={true}
                slidesPerView={3}
                spaceBetween={8}
                onInit={onReady}
              >

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-helppharm.webp" alt="helppharm"/>
                </SwiperSlide>

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-perifereia.webp" alt="perifereia"/>
                </SwiperSlide>

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-pfi.webp" alt="pfi"/>
                </SwiperSlide>  
                
                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-polyeco.webp" alt="polyeco"/>
                </SwiperSlide> 

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-sygenta.webp" alt="sygenta"/>
                </SwiperSlide>

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/c-uoi.webp" alt="uoi"/>
                </SwiperSlide> 

                <SwiperSlide>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/sponsors/dimitriou.webp" alt="dimitriou"/>
                </SwiperSlide> 
              </Swiper>
            </div>
          </Link>
          {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
          <div className="flex footer-credits">
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

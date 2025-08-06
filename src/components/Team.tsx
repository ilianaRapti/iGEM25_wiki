import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {Swiper as SwiperType } from "swiper/types";
import "swiper/css"
import "./Team.css";
//import { Members } from "../contents";

const teamMembers = [
    {id: 1, name: "Ifigeneia", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/ifigeneia-wiki.webp"},
    {id: 2, name: "Aristotelis", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/telis-wiki.webp"},
    {id: 3, name: "Eva", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/eva-wiki.webp"},
    {id: 4, name: "Giannis", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/giannis-wiki.webp"},
    {id: 5, name: "Giorgos", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/giorgos-wiki.webp"},
    {id: 6, name: "Iliana", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/iliana-wiki1.webp"},
    {id: 7, name: "Thomas", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/thomas-wiki.webp"},
    {id: 8, name: "Sokratis", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/sokratis-wiki.webp"},
    {id: 9, name: "Zisis", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/zhshs-wiki.webp"},
    {id: 10, name: "Mairi", photo: "https://static.igem.wiki/teams/5684/wikipics/teampics/mairi-wiki.webp"},

];

const Team: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const swiperRef = useRef<SwiperType>();

    const handleMouseEnter = (id: number) => {
        setHoveredId(id);
        swiperRef.current?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
        swiperRef.current?.autoplay?.start();
    }

    return(
        <section className="team-section">
            <h2>Meet our team!</h2>
            <div className="carousel-wrapper">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                onSwiper={(swiper)=> (swiperRef.current = swiper)}
                autoplay={{delay:2500, disableOnInteraction: false}}
                modules={[Autoplay]}
                className="team-carousel"  
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className={`team-member ${
                            hoveredId !== null && hoveredId !== member.id ? "blurred" : ""}
                        `}
                        onMouseEnter={() => handleMouseEnter(member.id)}
                        onMouseLeave={handleMouseLeave}
                        >
                            <img src={member.photo} alt={member.name}/>
                            <p>{member.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>  
            </div>
        </section>
    );
};
               
export default Team;
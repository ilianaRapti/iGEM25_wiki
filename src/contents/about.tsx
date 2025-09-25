//import Team from "../components/Team";
import VideoHeader from "./header-video";
import "./about.css" 

export function About() {  
  return (
    <>
        <VideoHeader/> {/*added video as header*/}
      {/*my team carousel*/}
     {/*<div className="row mt-4">
        <div className="col">
          <Team />
        </div>
      </div>*/}
      <div className="about-wrapper first-wrapper">
        <div className="about-container first-container">
          <div className="about-text">
            <h1 className="about-title">Greece is losing its plane trees—fast</h1>
            <p>
              Once-majestic sentinels that line rivers, shade village squares, and
              anchor ecosystems are dying from a relentless invader:{" "}
              <strong>Ceratocystis platani</strong>, the fungus that causes canker
              stain disease.
            </p>
            <p>
              What began as isolated outbreaks has become a nationwide emergency.
            </p>
            <p>
              Confirmed infections now stretch from the misty lakeshores of
              Ioannina and the valleys of Epirus to the ravines of the Peloponnese,
              the plains of Thessaly, and the riverbanks of Central Greece.
            </p>
          </div>
        </div>
     

        <img
          src="https://static.igem.wiki/teams/5684/wikipics/about-whyitmatters/map.webp" 
          alt="map"
          className="map-image"
        />
      </div>



      <div className="about-wrapper second-wrapper">
        <div className="about-container second-container">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/about-whyitmatters/tree-img.webp"
            alt="Plane trees left"
            className="second-image-left"
          />

          <div className="about-text">
            <h1 className="about-title">Collapse of Greece’s plane forests</h1>
            <p>
              Forestry reports warn that tens of thousands of trees are already gone,
              and every stream or contaminated tool can carry the spores farther.
            </p>
            <p>
              Without decisive action, Greece faces the silent collapse of entire
              platanus forests: ecosystems that protect rivers from erosion, cool
              towns during heat waves, and sustain rich biodiversity.
            </p>
          </div>
        </div>
      </div>


      <div className="about-wrapper third-wrapper">
        <div className="about-container third-container">
          <img 
            src="https://static.igem.wiki/teams/5684/wikipics/about-whyitmatters/igem-about.webp" 
            alt="iGEM IOANNINA Logo" 
            className="top-left-image"
          />

          <img 
            src="https://static.igem.wiki/teams/5684/wikipics/about-whyitmatters/icon1.webp" 
            alt="Extra plane trees"
            className="third-image-floating"
          />

          <div className="about-text">
            <h1 className="about-title">Our mission begins at home</h1>
            <p>
              When our iGEM Ioannina team encountered the motto<br/><br/>
              <h2><b>"Local people solving local problems"</b></h2><br/><br/>
              we knew it described our mission. This disaster is not distant; it is unfolding in our backyards, threatening the natural and cultural identity of an entire country.
            </p>
          </div>
        </div>
      </div>

      
      <div className="about-wrapper fourth-wrapper">
        <div className="about-container fourth-container">
        <div className="about-text">
          <h1 className="about-title">Why it matters</h1>
          <p>
           Living and studying in Epirus, we see the rapid loss of plane 
           trees in our own landscapes. Their decline threatens biodiversity,
            river ecosystems, and the cultural identity of our villages. By 
            developing AMADRYADS, we aim to safeguard these iconic trees and
            preserve the natural and cultural heritage they represent.
          </p>

    
          <div className="amadryads-image">
            <img src="https://static.igem.wiki/teams/5684/wikipics/name.webp" alt="AMADRYADS" />
          </div>
          
          <h1 className="about-title">Our project is more than science</h1>
          <p>
          It is a national call to safeguard heritage, biodiversity, and
          community life: proof that local innovation can confront a problem
          that touches every corner of Greece.
          </p>
        </div>
        </div>
      </div>

        <section className="about-references-wrapper">
          <div className="about-references">
          <h2 className="references-title">References</h2>
          <ol>
            <li>
              <a href="https://www.ertnews.gr/perifereiakoi-stathmoi/larisa/metaxromatiko-elkos-sta-platania-tis-koiladas-ton-tempon/" target="_blank" rel="noopener noreferrer">
                Mitrousias, E. (2023, February 28). Canker stain on the plane trees of the Vale of Tempe. ertnews.gr.
              </a>
            </li>

            <li>
              <a href="https://arta2day.gr/" target="_blank" rel="noopener noreferrer">
                Pappas, K. (2019, February 8). Canker stain is decimating the plane trees.
              </a>
            </li>

            <li>
              <a href="https://epirusgate.gr/to-metachromatiko-elkos-chtypise-ta-platania-stin-krania-prevezas-paremvasi-zita-i-adelfotita-kranioton/" target="_blank" rel="noopener noreferrer">
                Epirusgate. (2025, August 7). Canker stain “struck” the plane trees in Kranea, Preveza – The Kranea Brotherhood calls for intervention. EPIRUSGATE.
              </a>
            </li>

            <li>
              <a href="https://www.iefimerida.gr/ellada/ioannina-enas-mykitas-katastrefei-dasi-apo-platania" target="_blank" rel="noopener noreferrer">
                Newsroom iEfimerida.gr. (2020, October 25). Ioannina: A fungus is destroying plane-tree forests. iefimerida.gr. Retrieved September 19, 2025
              </a>
            </li>

            <li>
              <a href="https://www.lifo.gr/stiles/optiki-gonia/giati-pethainoyn-ta-platania-stin-ellada](https://www.lifo.gr/stiles/optiki-gonia/giati-pethainoyn-ta-platania-stin-ellada" target="_blank" rel="noopener noreferrer">
                Karatzioy, N. (2024, March 27). Why are the plane trees in Greece dying? LiFO.gr. Retrieved September 19, 2025
              </a>
            </li>

            <li>
              <a href="https://myvolos.net/ta-platania-tou-piliou-i-to-chroniko-eno/" target="_blank" rel="noopener noreferrer">
                Myvolos. (2024, July 14). The plane trees of Pelion, or the chronicle of a foretold death? Myvolos. Retrieved September 19, 2025
              </a>
            </li>

            <li>
              <a href="https://www.patrisnews.com/katastrofikos-mykitas-apili-afanismo-ta-platanodasi-tis-ilias/" target="_blank" rel="noopener noreferrer">
                Spyropoulou, N. (2017, May 13). Destructive fungus threatens to wipe out the plane-tree forests of Ilia. PatrisNews – Patris Ileias Newspaper. Retrieved September 19, 2025
              </a>
            </li>
            
            <li>
              <a href="https://www.ypaithros.gr/se-kindyno-ola-ta-platania-tis-choras-eftasan-ta-70-000-osa-xerathikan/" target="_blank" rel="noopener noreferrer">
                Diamantopoulos, C. (2025, August 12). “All the plane trees of the country are at risk – 70,000 have already dried out.” ypaithros.gr. Retrieved September 19, 2025
              </a>
            </li>

            <li>
              <a href="https://www.ertnews.gr/ert3/ta-platania-pethainoun-ston-louro-potamo/](https://www.ertnews.gr/ert3/ta-platania-pethainoun-ston-louro-potamo/" target="_blank" rel="noopener noreferrer">
                Dimitrakopoulou, E. (2025, April 3). The plane trees are dying along the Louros River. ertnews.gr. Retrieved September 19, 2025              
              </a>
            </li>

            <li>
              <a href="https://www.lifo.gr/now/perivallon/fthiotida-se-karantina-platanodasos-1000-stremmaton-logo-astheneias-poy-skotonei-ta" target="_blank" rel="noopener noreferrer">
                LiFO. (2022, November 27). Fthiotida: A 1,000-acre plane-tree forest placed in “quarantine” due to a disease that kills centuries-old trees. LiFO.gr. Retrieved September 19, 2025              
              </a>
            </li>

            <li>
              <a href="https://www.agriniopress.gr/ligosteyoyn-dramatika-ta-platania-sti-dogri-trichonidas-foto/" target="_blank" rel="noopener noreferrer">
                PressRoom. (2022, August 8). Plane trees are dramatically decreasing in Dogri, Trichonida (photo). AgrinioPress. Retrieved September 19, 2025
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
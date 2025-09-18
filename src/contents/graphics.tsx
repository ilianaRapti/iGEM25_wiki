import { useEffect, useState } from "react";
import "./graphics.css";

export function Graphics() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "colors", title: "Colors" },
    //{ id: "references-1", title: "References" },
    { id: "logo-igem", title: "Logo of iGEM IOANNINA 2025" },
    { id: "logo-amad", title: "Logo of AMADRYADS" },
    //{ id: "references-2", title: "References" },
    { id: "typography", title: "Typography" },
    { id: "accessibility", title: "Accessibility" },
    { id: "promotion", title: "Promotion" },
  ];

  const [activeId, setActiveId] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="graphics-container">
      <main className="graphics-main">
        <section id="introduction">
          <h2>Introduction</h2>
            <p>
              Graphics is where we make the project readable
              at a glance. We design the logo, color system, 
              type, and the wiki layout. We turn protocols and models 
              into clear diagrams and illustrations. We keep one look 
              across the wiki, slides, and social. Accessibility comes first:
              color blind friendly palettes, strong contrast, alt text, and 
              scalable SVGs. We draw from the plane tree and from Epirus 
              without losing scientific accuracy. Working closely with all 
              the departments of iGEM IOANNINA 2025, we turn complex ideas 
              into visuals that are easy to follow and hard to forget.
            </p>
        </section>

        <section id="colors">
          <h2>Colors</h2>
          <p>
            Green is our primary color for both subject matter and accessibility. 
            The project focuses on plane trees and conservation, so a green-first 
            identity communicates that purpose and keeps the visual language coherent 
            across the wiki and outreach. We follow guidance from Nature and from the 
            Netherlands Cancer Institute on figures that are readable by people with
            color vision deficiency. We avoid rainbow colormaps and combinations of
            red and green, we keep color sets small and we select palettes that 
            match the data type, with labels or patterns so meaning is not carried
            by color alone (Katsnelson, 2021; Netherlands Cancer Institute, n.d.). 
            In practice, we use a monochromatic range of greens and encode 
            differences with luminance by moving from light to dark. This remains
            legible in grayscale and improves readability for common forms of color 
            vision deficiency (Katsnelson, 2021). Accents are used only for functional 
            signals. Purple #823D86 and yellow #FFE052 appear in 
            transient interface elements such as pop ups, while core scientific 
            figures stay within the green system for consistency and clarity. 
            We also reviewed early drafts with the Coblis simulator to check how 
            graphics render for different types of color vision deficiency and to 
            catch issues before publication (Colblindor, n.d.).
            </p>

            <div className="colors-img">
              <figure>
                <img
                    src="https://static.igem.wiki/teams/5684/wikipics/graphics/colors.webp"
                    alt="colors"
                />
                <figcaption>Figure 1. Project color palette with corresponding color codes</figcaption>
              </figure>
            </div>
        </section>

        <section id="references-1">
            <h2>References</h2>
            <div className="graphics-references">
                <ol>
                    <li>
                        <a
                            href="https://doi.org/10.1038/d41586-021-02696-z"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Katsnelson, A. (2021). Colour me better: fixing figures for colour blindness. Nature, 598(7879), 224–225..
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.nki.nl/about-us/responsible-research/guidelines-color-blind-friendly-figures"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Guidelines color blind friendly figures | Netherlands Cancer Institute.(n.d.). Netherlands Cancer Institute.
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.color-blindness.com/coblis-color-blindness-simulator/#google_vignette"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CoBlIS — Color Blindness Simulator – Colblindor. (n.d.).
                        </a>
                    </li>
                </ol>
            </div>
        </section>
        <section id="logo-igem">
          <h2>Logo of team iGEM IOANNINA 2025</h2>
            <p>
              Our 2025 logo evolves last year’s mark. The outer silhouette traces Lake Pamvotida in Ioannina, 
              a nod to our home at the University of Ioannina. Inside, concentric lines suggest the growth 
              rings of a plane tree. Around the lake runs a DNA helix drawn as a branch with plane leaves, 
              linking synthetic biology with conservation. The composition is simple so it reads at a glance, 
              works in our green palette or in single color, and remains recognizable at small sizes. It keeps 
              continuity with the team’s identity while speaking directly to this year’s project.
            </p>

            <div className="logo-igem-img">
              <figure>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/team-logo.webp"
                alt="logo igem"
              />
              <figcaption>Figure 2. Logos of iGEM Ioannina 2025 and iGEM Ioannina 2024</figcaption>
            </figure>
            </div>
        </section>

        <section id="logo-amad">
          <h2>Logo of our project - AMADRYADS</h2>
            <p>
                The project name comes from the Hamadryads of Greek myth, nymphs whose lives were bound to their trees.
                The word combines *hama* “together” with *dryas* “tree,” reflecting a tradition in which a hamadryad lived and died with the tree 
                it inhabited. Over time the term was used for tree nymphs more broadly (Mythopedia, nd).
            </p>

            <p>
                Our mark turns that idea into a clear emblem. A stylized dryad appears in profile, holding a 
                leaf close to the chest. The outer rim carries a ribbon with simple banding that echoes a DNA 
                backbone, linking our biological approach with stewardship of the local landscape. The palette 
                stays within our green system, with small purple and yellow accents to match the interface 
                accents, so the logo reads at a glance and remains consistent with the rest of the identity.
            </p>

            <p>
                The symbol speaks directly to the project’s purpose: protecting plane trees from canker stain disease caused 
                by Ceratocystis platani, which has damaged plane populations across Southern Europe (Panconesi, 1999). 
                The composition is simple so it scales cleanly from banner to favicon,
                works on light and dark backgrounds, and can be set in a single color when needed.
            </p>

            <div className="logo-amad-img">
              <figure>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/project-logo.webp"
                alt="amadryads logo"
              />
              <figcaption>Figure 3. AMADRYADS project logo</figcaption>
            </figure>
            </div>
        </section>

        <section id="references-2">
            <h2>References</h2>
            <div className="graphics-references">
                <ol>
                    <li>
                        <a
                            href="https://mythopedia.com/topics/dryads-and-hamadryads/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mythopedia. (n.d.). Dryads and Hamadryads – Mythopedia.                         
                        </a>
                    </li>
                    <li>
                        Panconesi, A. (1999). Canker stain of plane trees: a serious danger to urban plantings in Europe. Journal of Plant Pathology, 81, 3–15.
                    </li>
                </ol>
            </div>
        </section>
        
        <section id="typography">
          <h2>Typography</h2>
                          <p>Our visual identity is built around Poppins Regular, used across the wiki 
                            for a clean and consistent look. Its geometric shapes provide excellent readability 
                            for both headings and body text, staying modern and easy on the eyes even in long passages. 
                            The characters are simple and balanced, avoiding unnecessary curves that could cause visual 
                            fatigue.For the project title, we highlight it with the Siouta font, an elegant typeface designed
                            in Ioannina, Greece. This local touch adds a distinctive character to the main project’s
                            logo while keeping the overall style minimal and cohesive.
                          </p>

                          <h2>References</h2>
                          <div className="graphics-references">
                              <ol>
                                  <li>
                                      <a
                                          href="https://fontesk.com/siouta-font/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          Reference Fontesk. (2024, July 14). Siouta Font [Font]. Fontesk.                        
                                      </a>
                                  </li>
                              </ol>
                          </div>
        </section>
        <section id="accessibility">
              <h2>Accessibility</h2>
              <p>The iGEM Ioannina 2025 wiki is designed with inclusive features that let visitors personalize the interface for greater comfort and readability. 
                These options support users with different visual or cognitive needs and help everyone navigate the site with ease.
                Key tools include:
              </p>

              <ul style={{color: "#40916c"}}>
                <li><strong>Text Size Control:</strong> Readers can enlarge or reduce text to match their visual
                preferences, improving legibility for those with low vision.</li>
                <li><strong>Color & Contrast Modes:</strong>  High-contrast and dark themes are available to aid 
                people with color-vision deficiencies or light sensitivity.</li>
                <li><strong>Font Flexibility:</strong>  Alternative typefaces can be selected to assist 
                individuals with dyslexia or other reading challenges.</li>
                <li><strong>Spacing Adjustments:</strong>  Users may modify line height and letter spacing to 
                reduce eye strain and improve comprehension.</li>
              </ul>
              <p>These features ensure that our wiki remains accessible, comfortable, and user-friendly for a wide and diverse audience.</p>
        </section>

        <section id="promotion">
            <h2>Graphic design and promotion of our project</h2>
              <h5>Promotion Materials</h5>
                <p>
                    Our promotional materials were designed to spark curiosity and make the project approachable 
                    for audiences inside and outside the lab. The collection includes two main elements: stickers 
                    and brochures, both created within the same visual identity system.
                </p>
            <h5>Stickers</h5>
            <p>
                We produced a diverse set of stickers, from formal versions featuring our AMADRYADS logo and
                plane tree symbols to playful designs and memes that invite interaction. Each one uses the
                green palette with limited accent colors, so the set feels coherent while still leaving 
                room for humor and creativity. The stickers were distributed at events and workshops as 
                small keepsakes, helping people remember the project and spread awareness in an informal
                way.
            </p>

            <div className="stickers1">
            <figure>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/stickers.webp"
                alt="stickers 1"
              />
              <figcaption>Figure 4. Sticker collection designed by iGEM Ioannina 2025 to engage the public with plane tree conservation</figcaption>
            </figure>
            </div>

            <div className="stickers2">
              <figure>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/stickers-1.webp"
                alt="stickers 2"
              />
              <figcaption>Figure 5. Educational identity cards illustrating the fungal pathogen Ceratocystis platani</figcaption>
            </figure>
            </div>
            <h5>Brochures</h5>
            <p>
                Alongside the stickers, we designed brochures that summarize the scientific and cultural aspects of the project. 
                The brochures explain the threat of Ceratocystis platani and present our biocontrol approach in clear 
                language, supported by diagrams and images. Text is concise, figures are accessible for color-vision-deficient 
                readers, and QR codes provide direct access to the wiki for further details. Both the Greek and English 
                editions were used depending on the audience, ensuring that local communities and international visitors
                could engage with the material.Together, the stickers and brochures extend the reach of our graphics work beyond the digital space, 
                turning the identity of AMADRYADS into tangible pieces that inform, entertain, and connect with the public.
            </p>

            <div className="brochures">
              <figure>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/brochures.webp"
                alt="brochures"
              />
              <figcaption>Figure 6. Informational brochure about Canker Stain Disease developed by iGEM Ioannina 2025</figcaption>
            </figure>
            </div>
        </section>

    </main>

    <button
      className="graphics-toc-toggle"
      onClick={() => setTocOpen(!tocOpen)}
    >
      ➤
    </button>

    <nav className={`graphics-toc ${tocOpen ? "open" : ""}`}>
      <ul>
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={activeId === sec.id ? "active" : ""}
              onClick={() => setTocOpen(false)} 
            >
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/graphics/graphics-toc.webp"
                alt=""
                className="graphics-icon"
              />
              {sec.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
}

export default Graphics;
import { useEffect, useState } from "react";
import "./entrepreneurship.css";

export function Entrepreneurship() {
  const sections = [
    { id: "intro", title: "About us" },
    { id: "part1", title: "Our Mission" },
    { id: "part2", title: "Our Work" },
    { id: "summary", title: "Summary" },
  ];

  const [activeId, setActiveId] = useState<string>("");

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
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Main Content */}
      <main style={{ marginRight: "250px", padding: "20px", flex: 1 }}>
        <section id="intro" className="section">
          <div className="section-content">
            <div className="left-col">
              <h2>About Us</h2>
              <img
                src=""
                alt="About us"
                className="section-img"
              />
            </div>
            <div className="text">
              <p>
                TEST....
              </p>
            </div>
          </div>
        </section>

        <section id="part1" className="section alt">
          <div className="section-content">
            <div className="left-col">
              <h2>Tech Fuse 2025</h2>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/halocrop/techfuse-1.webp"
                alt="Mission"
                className="section-img"
              />
            </div>
            <div className="text">
              <p>
                Every journey must begin from somewhere! Our first formal competition as iGEM 2025 was in the Techfuse 2025 Event in Ioannina. 
                The event took place from the 13th to the 15th of March.
              </p>
            </div>
          </div>
        </section>

        <section id="part2" className="section">
          <div className="section-content">
            <div className="left-col">
              <h2>Our Work</h2>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Work"
                className="section-img"
              />
            </div>
            <div className="text">
              <p>
                From supporting local businesses to developing international
                collaborations, we aim to create a strong network of innovative
                thinkers and doers.
              </p>
            </div>
          </div>
        </section>

        <section id="summary" className="section alt">
          <div className="section-content">
            <div className="left-col">
              <h2>Summary</h2>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Summary"
                className="section-img"
              />
            </div>
            <div className="text">
              <p>
                Together, we believe in building a sustainable future through
                entrepreneurship, creativity, and dedication.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Table of Contents */}
      <nav className="toc">
        <ul>
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeId === sec.id ? "active" : ""}
              >
                <img
                  src="https://static.igem.wiki/teams/5684/wikipics/halocrop/green-holo-crop-trans.webp"
                  alt=""
                  className="halo-icon"
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

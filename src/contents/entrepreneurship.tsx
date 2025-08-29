import { useEffect, useState } from "react";
import "./entrepreneurship.css";

export function Entrepreneurship() {
  const sections = [
    { id: "intro", title: "About us" },
    { id: "part1", title: "title 1" },
    { id: "part2", title: "title 2" },
    { id: "summary", title: "title 3" },
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
      {/*Contents*/}
      <main style={{ marginRight: "250px", padding: "20px", flex: 1 }}>
        <section id="intro" style={{ height: "100vh" }}>
          <h2>About Us</h2>
          <p>Text...</p>
        </section>

        <section id="part1" style={{ height: "100vh" }}>
          <h2>Title 1</h2>
          <p>Text...</p>
        </section>

        <section id="part2" style={{ height: "100vh" }}>
          <h2>Title 2</h2>
          <p>Text...</p>
        </section>

        <section id="summary" style={{ height: "100vh" }}>
          <h2>Title 3</h2>
          <p>Summary...</p>
        </section>
      </main>

      <nav className="toc">
        <ul>
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeId === sec.id ? "active" : ""}
              >
                <img src="https://static.igem.wiki/teams/5684/wikipics/halocrop/green-holo-crop-trans.webp" alt="" className="halo-icon"/>
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

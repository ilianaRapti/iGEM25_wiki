import "./competitions.css";

export function Competitions() {
  return (
    <>
      <div id="competitions-content">
        <div className="competition-container" id="competition-container-1">
          <div className="competition-card" id="competition-card-1">
            <p>
              <b>The UoI Innovation Generator 2025</b> was an intensive startup
              accelerator by the{" "}
              <b>University of Ioannina’s Innovation & Entrepreneurship Unit</b>
              , run with Mantis Beyond Innovation, that guided students,
              graduates, and researchers in turning ideas into ventures.
              Spanning bootcamps, mentoring sessions, and a public pitch
              competition at the Science & Technology Park of Epirus, it drew
              over 100 participants and 35+ proposals across fields like
              GreenTech, MedTech, ICT, FoodTech, and EduTech. The top 25 teams
              advanced, with standout winners such as Halocrops receiving
              awards, mentorship, and visibility, making the program a
              cornerstone of Epirus’s innovation ecosystem.
              Result: Honorary Distinction and Continuous support from Mantis Beyond Innovations
            </p>
          </div>
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/competitions/competition-1st.webp"
            id="competition-1-img"
          />
        </div>
        <div className="competition-container" id="competition-container-2">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/competitions/competition-2nd.webp"
            id="competition-2-img"
          />
          <div className="competition-card" id="competition-card-2">
            <p>
              <b>
                In 2025, the Piraeus Startup Accelerator—part of Piraeus Bank’s
                corporate responsibility initiative “Equall – Για μια Κοινωνία
                Ισότιμων Ανθρώπων (for a society of equal people)”
              </b>
              —made its debut in Ioannina with the empowering event “Driving
              Innovation in the Startup Ecosystem #Ioannina” held at the JOIST
              Innovation Space. The program aimed to bolster youth
              entrepreneurship and the region’s innovation ecosystem by offering
              startups and aspiring founders access to tools, mentorship,
              networking, and strategies to develop their ideas into Minimum
              Viable Products and competitive ventures, an effort reflected in
              more than 200 attendees from academia, business, and local
              institutions. 
              Result: Direct entry at the Peireus Startup Accelerator phase 2, Secured small funding
            </p>
          </div>
        </div>
        <div className="competition-container" id="competition-container-3">
          <div className="competition-card" id="competition-card-3">
            <p>
              <b>
                In 2025, the NBG Business Seeds Innovation & Technology
                Competition
              </b>
              —the longest-running innovation contest in Greece hosted by the
              National Bank of Greece invites entrepreneurs, researchers, and
              innovators to submit pioneering ideas in FinTech, Digital
              Ecosystems (including PropTech), Advanced Technologies & AI, and
              Environment/Climate Change (ESG). Participants will benefit from
              structured mentorship, networking opportunities with leading
              institutions like KEMEL, the Archimedes Center, Onassis
              Foundation, and Mastercard, and a chance to compete for
              substantial cash prizes (€20,000, €12,000, €8,000) alongside
              special awards in PropTech (€4,000) and Financial Empowerment (up
              to €10,000). Additionally, the top 10 teams received high-profile
              publicity and further mentoring, with prospects for collaboration,
              product integration, or equity investment by the Bank.
              Result: Hasnt happened yet, hopefully first place
            </p>
          </div>
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/competitions/competition-3rd.webp"
            id="competition-3-img"
          />
        </div>
      </div>
    </>
  );
}

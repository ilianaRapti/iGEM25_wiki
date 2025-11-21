import "./blind-sci.css"

export const BlindSci = {
  id: 18,
  title: "Ioannina's Association of the Blind",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-cover-bg.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-assoc-bg-collab3.webp",
  description: (
    <div className="blind1-section-sci">
    <div className="blind1-text-container-sci">
      {/* Introduction section */}
        <p>
            Visiting <b>the Association of the Blind of Ioannina</b> was a powerful example of 
            how <b>science communication</b> can overcome barriers. Our goal was to present our work in a 
            way that was both clear and inclusive.
            <br></br>
            <br></br>
            
            We introduced iGEM and our project, explaining complex ideas using simple, yet 
            descriptive language. The highlight of the visit was presenting our <b>two children's 
            books in Braille</b>, created to explain our project through storytelling. The president 
            of the Association praised their quality and detailed descriptions, expressing 
            excitement about sharing them with the community. 
        </p>
    </div>

    <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-img-collab1.webp"
        alt="our team at the association"
        className="blind-img1-sci"
    />
      {/* Organization section */}
      <div className="blind2-section-sci-conf">
        <div className="blind2-text-sci-conf">
          <p>
            This interaction sparked new initiatives. We agreed to <b>record a podcast episode</b>  discussing 
            the importance of inclusivity in science and how everyone should have 
            equal access to knowledge. We also planned a <b>joint social media</b> post to share the 
            experience and reach broader audiences.
            <br></br>

           By adapting our communication strategies and materials, we made synthetic biology 
           accessible to a group often excluded from scientific conversations. This visit 
           reinforced our belief that <b>science communication is most effective when it is inclusive, 
           interactive, and adjusted to the audience’s needs</b>.
          </p>
        </div>
      </div> 
    </div>     
  ),
  adhdText:(
    <div className="shared-adhd-text-inclu">

      <p><b>What Happened</b></p>
      <ul>
        <li>Visit to <b>Association of the Blind of Ioannina</b>.</li>
        <li>Presented iGEM, our project, and our outreach actions.</li>
        <li>Shared <b>Braille children's books</b> about our project.</li>
        <li>Planned a podcast on inclusivity and science.</li>
      </ul>

      <p><b>Why It Matters</b></p>
      <ul>
        <li>Turned complex science into accessible stories.</li>
        <li>Built a bridge between <b>scientists and visually impaired communities</b>.</li>
        <li>Encouraged dialogue about equal opportunities in STEM.</li>
      </ul>

      <p><b>Impact</b></p>
      <ul>
        <li>Books will reach more readers thanks to the Association’s support.</li>
        <li>Podcast will <b>spread awareness</b> to an even wider audience.</li>
        <li>Joint social media post will promote <b>visibility and connection</b>.</li>
      </ul>

    </div>
  ),
};
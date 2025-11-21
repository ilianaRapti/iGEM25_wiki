import "./blind-collab.css"
import "./shared.css"

export const BlindCollab = {
  id: 7,
  title: "Ioannina's Association of the Blind",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-cover-bg.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-assoc-bg-collab3.webp",
  description: (
    <div className="blind1-section-coll">
        <div className="blind1-text-container-coll">
        {/* Introduction section */}
            <p>
            Collaboration was at the heart of our visit to <b>the Association of the 
            Blind of Ioannina</b>. Our aim was not only to present our work but also to 
            <b> build a partnership</b> that would continue beyond a single event.
            <br></br><br></br>

            During the visit, we shared our project and team mission, while the 
            Association introduced us to their initiatives for supporting 
            visually impaired individuals. The exchange was productive and inspiring.
            </p>
        </div>

      {/* Organization section */}
        <div className="blind2-section-coll">

            <div className="blind2-text-coll">
            <p>

                We donated our <b>two Braille children's books</b>, created by our team, 
                to explain our project through accessible storytelling. These books 
                will be circulated among community members, helping them engage with 
                synthetic biology and environmental science.
                <br></br>
                <br></br>

                Together, we planned future steps:
                <ul>
                    <li>Recording a podcast episode with the Association’s president to discuss inclusivity and equal access to science.</li>
                    <li>Creating a joint social media post to raise awareness and encourage others to consider accessibility in their outreach.</li>
                </ul>
            </p>
            </div>
        </div>
        <div className="blind3-section-coll">
            <div className="blind3-text-coll">
                <p>
                    This collaboration demonstrated how scientists and community 
                    organizations can work hand-in-hand to make science accessible, 
                    relevant and empowering for everyone.
                </p>
            </div>
        </div>
        <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-img-collab1.webp"
        alt="Team at the association"
        className="blind-img-coll"
        />
    </div>      

),
    adhdText: (
  <div className="shared-adhd-text-inclu">

    <p><b>Goal</b></p>
    <ul>
      <li>Build a <b>partnership</b> with the Association of the Blind.</li>
      <li>Share resources and <b>work together</b> on accessible science education.</li>
    </ul>

    <p><b>Actions</b></p>
    <ul>
      <li>Presented our project and outreach activities.</li>
      <li>Donated <b>Braille</b> books explaining our project to younger audiences.</li>
      <li>Planned <b>future collaboration</b>:
        <ul>
          <li>A podcast episode on inclusivity.</li>
          <li>Joint social media posts to spread awareness.</li>
        </ul>
      </li>
    </ul>

    <p><b>Why It Matters</b></p>
    <ul>
      <li>Creates a <b>long-term partnership</b> between scientists and the community.</li>
      <li>Expands the reach of our project beyond traditional audiences.</li>
      <li>Supports equal access to science and education.</li>
    </ul>

  </div>
    ),
};
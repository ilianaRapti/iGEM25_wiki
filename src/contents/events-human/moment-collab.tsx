import "./moment-collab.css"

export const MomentCollab = {
  id: 2,
  title: "iGEM Moment",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/moment/moment-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/curiosity-bg2.webp",
  description: (
    <div className="mom-section-coll">
    <div className="mom-text-container-coll">
      {/* Introduction section */}
        <p>
           Collaboration lies at the heart of iGEM, and our 
           <b> iGEM MOMENT</b> initiative was designed to embody that 
           spirit on a global scale.
           <br></br><br></br>

           The idea was simple but powerful: by sharing glimpses of our teams’ 
           everyday lives, we could create a <b>collective portrait of the worldwide 
           iGEM community</b>. We reached out to teams across continents, 
           inviting them to send us photos and videos that captured the fun, 
           creative and human side of their work.
        </p>
    </div>

      {/* Organization section */}
      <div className="smom-section-coll">

        <div className="smom-text-coll">
          <p>
            As submissions came in, we saw a vibrant mosaic of experiences. 
            Teams shared snapshots of lab life, team outings, inside jokes 
            and unique traditions. These contributions reminded us that while 
            every project is different, we are all connected by a shared 
            passion for synthetic biology and innovation.
            <br></br><br></br><br></br><br></br>

            By posting this content on our social media platforms, 
            we built more than just an online gallery. We created <b>a 
            virtual meeting point</b>, where teams could see and celebrate 
            each other’s journeys. This helped foster <b>mutual respect and 
            understanding</b>, strengthening the bonds between teams who may 
            never meet in person.
          </p>
        </div>

        <div className="last-mom-text-coll">
          <p>
            In the end, iGEM MOMENT proved that collaboration is not only 
            about technical work or joint experiments. It is also about 
            <b> sharing stories, building connections, and supporting one 
            another</b> as members of a global scientific family. This initiative 
            laid the foundation for deeper collaborations in the future, 
            both within and beyond the competition.
          </p>
        </div>
      </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/moment/moment-img.webp"
            alt="igem moment"
            className="mom-img-coll"
        />
      </div>
      

    ),
    adhdText: (
    <div className="shared-adhd-text-inclu">

        <p><b>Goal</b></p>
        <ul>
          <li>Strengthening <b>connections between iGEM teams worldwide</b>.</li>
          <li>Create a <b>shared space for creativity and fun</b>.</li>
        </ul>

        <p><b>How It Worked</b></p>
        <ul>
          <li>We <b>contacted teams</b> from different countries and continents.</li>
          <li>Asked them to send:
            <ul>
              <li>Photos and videos showing <b>team life</b> and behind-the-scenes moments.</li>
            </ul>
          </li>
          <li>Combined everything into a <b>global social media project</b>.</li>
        </ul>

        <p><b>Why It Matters for Collaboration</b></p>
        <ul>
          <li>Encouraged teams to <b>share their unique experiences</b>.</li>
          <li>Built a <b>sense of community and mutual support</b>.</li>
          <li>Connected teams beyond their individual projects.</li>
        </ul>

        <p><b>Impact</b></p>
        <ul>
          <li>Many teams participated enthusiastically.</li>
          <li>Created a <b>network of iGEMers</b> who felt closer to each other.</li>
          <li>Strengthened the idea that <b>iGEM is a global family</b> working together.</li>
        </ul>

  </div>
    ),
};
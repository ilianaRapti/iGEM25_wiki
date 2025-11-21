import "./round-collab.css"
import "./shared.css"

export const RoundCollab = {
  id: 3,
  title: "Round Table SKG",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/round-table/round-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/round-table/bg-rnd.webp",
  description: (
    <div className="round-section-coll">
    <div className="round-text-container-coll">
      {/* Introduction section */}
        <p>
           Our team had the pleasure of collaborating with 
           <b> iGEM Thessaloniki</b> through a round table event 
           entitled “The iGEM Competition: Challenges and 
           Strategies in the Wet Lab & Dry Lab.” Two of our 
           members were invited to participate in this discussion, 
           which brought together Greek iGEM teams in an open and 
           constructive dialogue.
        </p>
    </div>

      {/* Organization section */}
      <div className="sround-section-coll">

        <div className="sround-text-coll">
          <p>
            The session gave representatives from each team 
            the chance to reflect on their journey, share the 
            difficulties they encountered and exchange practical 
            insights on effective approaches in both the Wet Lab 
            and Dry Lab. Moderated by one of  iGEM  Thessaloniki‘s 
            team members, the conversation encouraged the free flow of 
            ideas and experiences, strengthening the spirit of collaboration 
            within the iGEM community.
          </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/round-table/round-speak.webp"
            alt="round-pres"
            className="roundpres-img-coll"
        />

        <div className="last-round-text-coll">
          <p>
            In addition, we had the opportunity to present our project, 
            emphasizing its significance and impact on the preservation of 
            plane trees, while also building new friendships with the members 
            of the other team.
          </p>
        </div>
      </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/round-table/round-fun.webp"
            alt="round-fun"
            className="roundfun-img-coll"
        />
      </div>
      

    ),
    adhdText: (
    <div className="shared-adhd-text-inclu">

        <ul>
          <li>We joined a <b>round table event with iGEM Thessaloniki</b>: “<i>The iGEM Competition: Challenges and Strategies in the Wet Lab & Dry Lab</i>.”</li>
          <li>Two of our members took part in the discussion.</li>
          <li>Event goal: bring <b>Greek iGEM teams together</b> to:
            <ul>
              <li>Share their journeys</li>
              <li>Talk about challenges</li>
              <li>Exchange tips and strategies</li>
            </ul>
          </li>
          <li>Moderation: by a Thessaloniki team member → kept ideas flowing freely.</li>
          <li>Outcome: stronger collaboration & community spirit among iGEM teams.</li>
          <li>Bonus: we got to <b>present our project on plane tree preservation</b> and highlight its importance.</li>
        </ul>
      </div>
    ),
};
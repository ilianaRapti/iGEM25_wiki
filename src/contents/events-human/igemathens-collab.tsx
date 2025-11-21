import "./igemathens-collab.css"

export const iAthensCollab = {
  id: 5,
  title: "iGEM Athens",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igem-ath-collab-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igem-ath-collab-bg2.webp",
  description: (
    <div className="ath-section-coll">
        <div className="ath-text-container-coll">
        {/* Introduction section */}
            <p>
            On July 18th-20th we were invited to attend the iGEM FEST organized by 
            iGEM Athens. We were warmly welcomed at the Department of Medical School 
            at the National and Kapodistrian University of Athens (NKUA) by iGEM 
            Athens to attend lectures and workshops, as well as to participate at 
            a group discussion on the last day of the fest among representatives 
            from all the Greek iGEM teams.
            </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igems-all-2.webp"
            alt="igem ath x igem ioa"
            className="ath-img1-coll"
        />

      {/* Organization section */}
        <div className="ath2-section-coll">

            <div className="ath2-text-coll">
            <p>
                Throughout the festival, we attended interesting lectures 
                delivered by professors from the National and Kapodistrian 
                University of Athens (NKUA) and the National Technical University 
                of Athens (NTUA) on contemporary topics in biology and 
                chemistry. We also took part in scientific workshops, 
                in which we sharpened useful scientific skills.
                <br></br>
                <br></br>

                On the final day, we were given the opportunity to present our project 
                to the audience, including our wet lab, dry lab, business plan and 
                human practices progress. We were more than happy to engage with the 
                audience and respond to their thoughtful questions and receive 
                encouraging positive feedback. Equally, we listened to the presentations 
                of the fellow rest of iGEM Greek teams. It was very inspiring to have an 
                insight into their approaches, exchange ideas and reflect on our progress.
                <br></br>
                <br></br>

                Overall, the festival was a meaningful experience that strengthened 
                our scientific knowledge, enriched our teamwork and connected us 
                with the broader IGEM community.
            </p>
            </div>
        </div>
        <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igem-ath.webp"
        alt="igem fest"
        className="fest-img-coll"
        />
    </div>      

),
    adhdText: (
        <div className="shared-adhd-text-inclu">

            <p><b>Where</b></p>
            <ul>
            <li>Department of Medical School, NKUA, Athens</li>
            </ul>

            <p><b>Who</b></p>
            <ul>
            <li>Organized by iGEM Athens, all Greek iGEM teams joined</li>
            </ul>

            <p><b>What We Did</b></p>
            <ul>
            <li>Attended lectures by professors (biology + chemistry topics)</li>
            <li>Joined hands-on workshops → learned useful scientific skills</li>
            <li>On the last day:
                <ul>
                <li>Presented our project (wet lab, dry lab, business plan, human practices)</li>
                <li>Answered questions + got positive feedback</li>
                <li>Watched other Greek teams’ presentations → inspiring exchange of ideas</li>
                </ul>
            </li>
            </ul>

            <p><b>Why It Mattered</b></p>
            <ul>
            <li>Learned more science</li>
            <li>Improved teamwork</li>
            <li>Built stronger connections with iGEM community</li>
            </ul>

        </div>
    ),
};
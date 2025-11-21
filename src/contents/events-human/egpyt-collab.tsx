import "./egypt-collab.css"
import "./shared.css"

export const EgpytCollab = {
  id: 8,
  title: "iGEM AFCM/EGPYT",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/egypt/egypt-collab-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/egypt/egypt-collab-bg2.webp",
  description: (
    <div className="egy1-section-coll">
        <div className="egy1-text-container-coll">
        {/* Introduction section */}
            <p>
            As part of our collaborations this season, we had the pleasure of 
            working with <b>iGEM AFCM/Egypt</b> on several creative and impactful projects. 
            Our journey together began with the translation of our two fairytales, 
            for  which the team helped us adapt it into Standard Arabic and Egyptian Arabic. 
            Building on that success, we were then invited to translate their team’s 
            asthma guidebook, “PRESS TO BREATHE”, into <b>Greek</b>.
            </p>
        </div>

        <div className="egy2-text-container-coll">
        {/* Introduction section */}
            <p>
            This guide proved to be both valuable and insightful, offering practical 
            information on asthma symptoms, variations of the condition, risk factors, and 
            triggers. While working on the translation, we also learned about traditional 
            remedies still in use today and explored how to respond effectively in emergencies 
            when someone is experiencing severe <b>asthma symptoms</b>.
            </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/egypt/egypt-img1-collab.webp"
            alt="asthma"
            className="asthma-img1-coll"
        />

      {/* Organization section */}
        <div className="egy3-section-coll">

            <div className="egy3-text-coll">
            <p>
                For us, this collaboration was more than just exchanging translations. It was 
                an opportunity to connect with another iGEM team, exchange knowledge, 
                and grow together. The process strengthened our communication skills, 
                expanded our understanding of asthma, and gave us a chance to contribute 
                to a resource that can support people living with this chronic illness.
                <br></br>
                <br></br>

                We are grateful for the meaningful partnership with iGEM AFCM/Egypt and 
                look forward to meeting them in person at the Grand Jamboree!
            </p>
            </div>
        </div>
        <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/egypt/afcm-logo-collab.webp"
        alt="egypt logo"
        className="egylogo-img-coll"
        />
    </div>      

),
    adhdText: (
        <div className="shared-adhd-text-inclu">

            <p><b>Collaboration with iGEM AFCM/Egypt.</b></p>
            <ul>
            <li>Started with <b>fairytale translations</b> → into <b>Standard Arabic & Egyptian Arabic</b>.</li>
            <li>Next: translated their <b>asthma guidebook “PRESS TO BREATHE”</b> into Greek.</li>
            </ul>

            <p><b>Guidebook Content</b></p>
            <ul>
            <li>Asthma symptoms & variations</li>
            <li>Risk factors & triggers</li>
            <li>Traditional remedies</li>
            <li>Emergency response tips</li>
            </ul>

            <p><b>What We Gained</b></p>
            <ul>
            <li>Improved communication skills</li>
            <li>Learned more about asthma & treatments</li>
            <li>Contributed to a useful resource for patients</li>
            <li>More than translation → it was <b>knowledge exchange + friendship</b></li>
            <li>Looking forward to meeting them at the <b>Grand Jamboree</b>!</li>
            </ul>

        </div>
    ),
};
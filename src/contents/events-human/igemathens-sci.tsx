import "./igemathens-sci.css"
import "./shared.css"

export const iAthensSci = {
  id: 9,
  title: "iGEM Athens",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igem-ath-collab-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/science-communication/igem-ath/igem-ath-scico.webp",
  description: (
    <div className="ath1-section-sci">
        <div className="ath1-text-container-sci">
        {/* Introduction section */}
            <p>
            On July 18th–20th, our team participated in the iGEM FEST organized by 
            iGEM Athens at the National and Kapodistrian University of Athens. 
            While the event included lectures, workshops, and discussions, for us 
            it was above all a unique opportunity to communicate our science in a 
            space where the audience — fellow iGEM teams and other students from 
            universities of Athens — could directly relate to the nature of our work.
            </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/igem-ath/igem-ath.webp"
            alt="igem fest"
            className="ath1-img-sci"
        />

      {/* Organization section */}
            <div className="ath2-section-sci">
                <div className="ath2-text-sci">
                <p>
                    The festival was organized by iGEM Athens and hosted at the Department of 
                    Medicine of NKUA. Greek iGEM teams from across the country gathered to attend 
                    lectures from professors of NKUA and NTUA, join skill-building workshops, and,
                    on the final day, present their projects and exchange feedback.
                    <br></br><br></br>

                    Our team was represented by two members, who presented “Amadryads”, 
                    During the final day of the festival, we presented our project, 
                    covering our wet lab, dry lab, business and human practices progress. 
                    The presentation required us to not only explain the technical aspects 
                    of our work but also to make them understandable and engaging for an 
                    audience of peers.
                    <br></br><br></br>

                    At the same time, we listened to the presentations of other iGEM teams. 
                    This gave us the chance to compare how different groups communicated their science, 
                    identify effective strategies and reflect on how we could improve our own 
                    communication.
                </p>
                </div>
            </div>
        </div>
    ),
    adhdText: (
        <div className="shared-adhd-text-inclu">

            <p><b>Event</b></p>
            <ul>
            <li><b>iGEM FEST</b> (July 18–20, NKUA, Athens)</li>
            <li>Included lectures, workshops, and discussions</li>
            </ul>

            <p><b>For the team</b></p>
            <ul>
            <li>Key opportunity to <b>communicate science to peers (other iGEM teams)</b> → audience could directly relate.</li>
            </ul>

            <p><b>What We Did</b></p>
            <ul>
            <li>Attended lectures (biology + chemistry) and skill-building workshops</li>
            <li>On the last day: </li>
            <ul>
                <li>Presented our project (wet lab, dry lab, business, human practices)</li>
                <li>Made our science clear and engaging for peers</li>
                <li>Got questions + constructive feedback</li>
                <li>Listened to other teams’ presentations → learned new communication strategies</li>
            </ul>
        
            </ul>

        </div>
    ),
};
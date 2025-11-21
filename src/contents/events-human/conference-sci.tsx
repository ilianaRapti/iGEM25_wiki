import "./conference-sci.css"

export const ConfSci = {
  id: 4,
  title: "One-day Conference",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/science-communication/conference/cover-conference.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/science-communication/conference/conf-bg.webp",
  description: (
    <div className="conf-section-sci">
    <div className="conf-text-container-sci">
      {/* Introduction section */}
        <p>
            On September 6th, our team organized a one-day conference titled 
            <b> “The Plane Tree and the Canker Stain Disease” </b> at the Department of 
            Biological Applications and Technologies. The event brought together 
            faculty members and researchers, representatives of the Forest Service 
            and municipal organizations, concerned citizens, and online participants 
            from other regions.
            <br></br>
            <br></br>

           The central goal of the workshop was not only to inform the public about 
           the threat posed by canker stain disease (<i>Ceratocystis platani</i>) but also 
           to communicate our project, our suggested solution and our progress. 
        </p>
    </div>

    <img
        src="https://static.igem.wiki/teams/5684/wikipics/science-communication/conference/team-confer.webp"
        alt="icon"
        className="team-conf-sci"
    />
      {/* Organization section */}
      <div className="organization-section-sci-conf">
        <div className="organization-text-sci-conf">
          <p>
            From the very beginning, our team designed the event around clarity, 
            accessibility, and engagement:           
            <br></br>

           <ul>
            <li><b>Promotion and outreach</b>: Posters and social media campaigns announced the event in simple, inviting language, ensuring that the purpose and relevance of the workshop were clear even before participants arrived.</li>
            <li><b>Materials as communication tools</b>: Our storybooks, available in both Braille and print, and the puzzle inspired by one of the stories served as interactive entry points into the scientific theme.</li>
           <li><b>Treatment</b>: Infected trees are chemically treated and removed to prevent further spread.</li>
           <li><b>Hybrid format</b>: By offering both in-person and online attendance, we expanded our reach and ensured that our message could travel beyond the physical room.</li>
           </ul>
          </p>
        </div>
      </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/science-communication/conference/thom-confere.webp"
            alt="icon1"
            className="thom-conf-sci"
        /> 
      
      
      {/* Implementation section */}
      <div className="implementation-section-sci-conf">
        <div className="impl-conf-sci center-sci-conf">
          <p>
            During the conference, we placed strong emphasis on <b>simplifying 
            complex biology without losing accuracy</b>: 
            <br></br><br></br> 
            <ul>
                <li>
                    We began with the <b>Project Reveal video</b>, which visually 
                    introduced the context of the disease and the cultural 
                    importance of plane trees.
                </li>
                <li>
                    We provided a clear <b>introduction to iGEM</b>, framing our project 
                    within a global scientific initiative and giving the audience 
                    a sense of purpose and direction.
                </li>
                <li>
                    Our <b>Wet Lab team members explained the biology of the 
                    disease</b>—how the fungus spreads and affects plane trees—through 
                    storytelling, analogies, and visual aids. This helped non-specialists 
                    follow the logic of the science while keeping experts engaged.
                </li>
            </ul>
            <br></br><br></br>
            Science communication was not one-directional. The event encouraged dialogue and exchange:
            <br></br><br></br>
            <ul>
                <li>
                    Citizens voiced their worries and shared personal stories about the loss of 
                    plane trees in their communities.
                </li>
                <li>
                    Scientists responded in real time, explaining possible scientific 
                    approaches, clarifying misconceptions, and highlighting the early-stage 
                    nature of our research.
                </li>
            </ul>
            <br></br><br></br>
            This created an atmosphere of trust, where science was not 
            presented as distant or abstract, but as collaborative and responsive to 
            societal needs.
          </p>
        </div>  
        <div className="impl-conf-sci-last center-sci-conf-last">
          <p>
            By the end of the event, participants left with: 
            <br></br><br></br> 
            <ul>
                <li>
                    <b>A clearer understanding of the science</b> behind canker 
                    stain disease and the rationale of our proposed solution.
                </li>
                <li>
                    <b>Realistic expectations</b> about what our research can achieve at this stage.
                </li>
                <li>
                    <b>A sense of connection to the project</b>, with many offering expertise, 
                    contacts, or personal support for our next steps.
                </li>
            </ul>
            <br></br><br></br>
            The event thus became a bridge—linking scientific research with the 
            lived experiences of the local community.
          </p>
        </div>        
        </div>
    </div>

        
  ),

  adhdText: (
    <div className="shared-adhd-text-inclu">
    <p>
      <ul>
        <li>On September 6th, our team hosted a one-day conference titled <b>“The Plane Tree and the Canker Stain Disease”</b> at the Department of Biological Applications and Technologies.</li>
        <li>Who attended: professors, researchers, Forest Service and municipal representatives, citizens, and online participants from other regions.</li>
      </ul>

        <b>Main goal</b>: 
        <ul>
          <li>Inform the public about canker stain disease <i>(Ceratocystis platani)</i> and share our project, solution, and progress.</li>
        </ul>


      <b>How We Made It Engaging</b>
      <ul>
        <li><b>Promotion</b>: posters and social media in simple, inviting language.</li>
        <li><b>Interactive materials</b>: storybooks (in Braille and print) and a themed puzzle.</li>
        <li><b>Hybrid format</b>: in-person + online to reach a wider audience.</li>
      </ul>

      <b>During the Conference</b>
      <ul>
        <li>Started with a <b>Project Reveal video</b> introducing the disease and cultural value of plane trees.</li>
        <li>Explained what iGEM is and how our project fits within it.</li>
        <li>Wet Lab members described the fungus and its spread using visuals, analogies, and storytelling to make the science clear for everyone.</li>
      </ul>

      <b>Audience Interaction</b>
      <ul>
        <li>Citizens shared stories and worries about losing plane trees.</li>
        <li>Scientists responded live, explained research limitations, and addressed misconceptions.</li>
      </ul>

      <b>Results</b>
      <ul>
        <li>Attendees left with:</li>
        <ul>
          <li>A better grasp of the disease and our scientific approach.</li>
          <li>Realistic expectations about our progress.</li>
          <li>A sense of connection and willingness to support our next steps.</li>
        </ul>
      </ul>

      <b>Outcome</b>
      <br></br>
        The event became a <b>bridge between science and the local community</b>, turning complex research into shared understanding and collaboration.
    </p>
  </div>
  ),
};
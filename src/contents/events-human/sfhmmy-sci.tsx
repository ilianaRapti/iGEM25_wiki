import "./sfhmmy-sci.css"

export const SfhmmySci = {
  id: 1,
  title: "ECESCON",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/science-communication/sfhmmy/scico-sfhmmy.webp",
  description: (
    <div className="sfhmmy-section-sci">
    <div className="sfhmmy-text-container-sci">
      {/* Introduction section */}
        <p>
            At <b>ECESCON 2025</b>, we hosted a hands-on workshop designed not only to teach 
            technical skills but to <b>bridge the gap between science and the public</b>. Survival 
            analysis, a vital statistical tool used in cancer research, clinical trials, and 
            engineering reliability studies, is often seen as intimidating or inaccessible.
        </p>
    </div>
      {/* Organization section */}
      <div className="sf-organization-section-sci">

        <div className="sf-organization-text-sci">
          <p>
          Our approach focused on <b>clear communication</b>. Instead of relying on dense theory,
          we used storytelling, real-world examples, and interactive coding to bring participants
          along step-by-step. Each person worked on their own laptop, coding in real time as we
          explained concepts like Kaplan–Meier curves, log-rank tests and Cox models.
          </p>
        </div>
      </div>
      
      {/* Implementation section */}
      <div className="sf-implementation-section-sci">
        <div className="sf-impl-block-edu sf-center-sci">
          <p>
            The workshop showed how <b>statistical tools tell stories</b> — stories 
            about patient outcomes, treatment effects and system performance. 
            By combining practice with accessible explanations, participants not 
            only learned survival analysis but also how to explain it to others.
          </p>
        </div>
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomessfy-section-sci">
        
          <div className="outcomessfy-text-sci">
            <p>
             By the end of the session, participants left with a new skillset and a renewed
              understanding of how <b>science communication empowers</b> communities to engage with 
              complex problems. This was more than a workshop; it was a demonstration of how 
              science can be <b>open, inclusive,</b> and <b>impactful</b> when shared effectively.
            </p>
          </div>
          
        </div>
      </div>

    ),

    adhdText:(
      <div className="shared-adhd-text-inclu">

      <p><b>Event</b></p>
      <ul>
        <li><b>ECESCON 2025</b>, Ioannina, Greece (April 25–27, 2025)</li>
        <li>Hands-on workshop: <b>Survival Analysis and Risk Estimation in R</b></li>
      </ul>

      <p><b>Goal</b></p>
      <ul>
        <li>Make <b>complex statistical concepts</b> like survival analysis accessible</li>
        <li>Show how science and engineering connect through data</li>
        <li>Encourage public understanding of biomedical research</li>
      </ul>

      <p><b>How We Did It</b></p>
      <ul>
        <li>Interactive session with <b>live coding</b> on R</li>
        <li>Participants worked with real-world datasets</li>
        <li>Visualizations and step-by-step explanations made the content <b>clear and engaging</b></li>
      </ul>

      <p><b>Why It Matters</b></p>
      <ul>
        <li>Science communication turns intimidating concepts into practical, understandable tools</li>
        <li>Participants gained the confidence to <b>talk about science clearly</b>, not just to do it</li>
        <li>Strengthens trust and collaboration between <b>scientists and society</b></li>
      </ul>

    </div>
    ),
};
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
      <div className="organization-section-sci">

        <div className="organization-text-sci">
          <p>
          Our approach focused on <b>clear communication</b>. Instead of relying on dense theory,
          we used storytelling, real-world examples, and interactive coding to bring participants
          along step-by-step. Each person worked on their own laptop, coding in real time as we
          explained concepts like Kaplan–Meier curves, log-rank tests and Cox models.
          </p>
        </div>
      </div>
      
      {/* Implementation section */}
      <div className="implementation-section-sci">
        <div className="impl-block-edu center-sci">
          <p>
            The workshop showed how <b>statistical tools tell stories</b> — stories 
            about patient outcomes, treatment effects and system performance. 
            By combining practice with accessible explanations, participants not 
            only learned survival analysis but also how to explain it to others.
          </p>
        </div>
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-sci">
        
          <div className="outcomes-text-sci">
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
};
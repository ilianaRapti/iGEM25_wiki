import "./israel-sci.css"

export const IsraelSci = {
  id: 8,
  title: "iGEM Meetup by TAU",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/israel/isr-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/science-communication/israel/isr-sci-bg1.webp",
  description: (
    <div className="isr1-section-sci">
    <div className="isr1-text-container-sci">
      {/* Introduction section */}
        <p>
           On August 28, 2025, iGEM Ioannina <b>participated in an international 
           online meet-up hosted by iGEM TAU (Tel Aviv University, Israel)</b>. 
           The event brought together twelve iGEM teams from around the world, 
           creating a platform for sharing projects, practicing science communication, 
           and building connections across borders.
           <br></br><br></br>

           The meeting began with a round of introductions, where each team presented 
           its university and area of focus. This warm, welcoming atmosphere set 
           the stage for open dialogue and constructive feedback. Following this, 
           the principal investigator of iGEM TAU delivered a keynote talk introducing 
           synthetic biology fundamentals and presenting his lab’s research on toehold 
           switches, an advanced RNA regulatory tool with applications in diagnostics 
           and biosensing. This talk inspired discussions among teams about potential 
           applications and collaborations.
        </p>
    </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/science-communication/israel/isr-sci-img2.webp"
            alt="isr-icon"
            className="isr1-img-sci"
        />

      {/* Organization section */}
      <div className="isr2-section-sci">

        <div className="isr2-text-sci">
          <p>
            During the main part of the event, each team gave a five-minute 
            presentation of their 2025 project, followed by a live Q&A session. 
            After every talk, attendees completed a peer evaluation form, scoring 
            clarity, engagement, visual design, and creativity.
          </p>
        </div>

            <div className="isr3-text-sci">
            <p>
                Our team was represented by two members, who presented “Amadryads”, 
                a project focused on protecting plane trees from Ceratocystis platani, 
                the lethal fungus causing canker stain disease. We explained the 
                ecological importance of plane trees, the urgent need to prevent 
                their destruction, and the details of our approach:
                <br></br>

                <ul>
                <li>Using CRISPR-Cas13d to target and degrade the pathogen’s RNA.</li>
                <li>Adding a toehold riboswitch for dual safety and specificity.</li>
                <li>Employing chitosan nanoparticles as an eco-friendly, non-viral delivery system.</li>
                </ul>

                To make the science more engaging, we connected our project to mythology, 
                naming it “Amadryads” after tree guardians from Greek legends, symbolizing 
                protection and care for nature. Our presentation focused on storytelling, 
                clear visual slides, and simple language to ensure that even participants 
                without a background in plant pathology could fully understand our work.
            </p>
            </div>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/israel/present-isr-collab.webp"
            alt="igem presentation"
            className="isrpres-img-sci"
        />

        <div className="isr4-section-sci">
        <div className="isr4-text-sci">
          <p>
            At the end of the event, teams voted on the presentations. <b>iGEM 
            Ioannina was ranked first overall, receiving the Best Presentation 
            Award</b> for clarity, engagement, and scientific impact.
            <br></br>

            This recognition was more than just a prize — <b>it validated our 
            efforts to make complex CRISPR technology understandable and to 
            communicate synthetic biology in a way that builds trust and excitement</b>. 
            The meet-up also gave us <b>valuable feedback</b> to improve our presentation 
            before the Grand Jamboree and helped us expand our international network, 
            opening doors for future joint outreach and educational activities.
            <br></br>

            Participating in this event showed us <b>how science communication can 
            connect people across cultures and disciplines</b>. By explaining our 
            project clearly and creatively, we not only raised awareness of an 
            environmental issue but also strengthened the role of synthetic biology 
            as a field that is accessible to everyone.
          </p>
        </div>
        </div>
         <img
            src="https://static.igem.wiki/teams/5684/wikipics/science-communication/israel/isr-sci-img1.webp"
            alt="igem ranked"
            className="win-img-sci"
        />
      </div>
    ),
    adhdText: (
    <div className="shared-adhd-text-inclu">

        <p><b>Date & Host</b></p>
        <ul>
          <li>August 28, 2025</li>
          <li>Host: iGEM TAU (Tel Aviv University, Israel)</li>
          <li>Teams: 12 iGEM teams participated</li>
        </ul>

        <p><b>Goal</b></p>
        <ul>
          <li>Practice explaining science clearly</li>
          <li>Get feedback from peers</li>
          <li>Connect with other international teams</li>
        </ul>

        <p><b>Highlight</b></p>
        <ul>
          <li>iGEM Ioannina won the Best Presentation Award</li>
        </ul>

        <p><b>Key Points</b></p>
        <ul>
          <li>Icebreaker: Friendly team introductions → built open atmosphere</li>
          <li>Keynote Talk: TAU’s PI explained synthetic biology and introduced toehold switches for biosensing</li>
          <li><b>Team Presentations: Each team:</b>
            <ul>
              <li>5-minute talks + live Q&A</li>
              <li>Peer voting on clarity, engagement, and visuals</li>
            </ul>
          </li>
          <li><b>Our Project – “Amadryads”</b>:
            <ul>
              <li>Problem: Plane trees dying from Ceratocystis platani</li>
              <li>Solution: CRISPR-Cas13d to destroy fungal RNA</li>
              <li>Safety: Toehold riboswitch to control Cas13d</li>
              <li>Delivery: Eco-friendly chitosan nanoparticles</li>
              <li>Storytelling: “Amadryads” = mythic tree guardians</li>
            </ul>
          </li>
          <li><b>Result:</b>
            <ul>
              <li>Won Best Presentation Award</li>
              <li>Built international network for future collaborations</li>
              <li>Learned how to explain CRISPR clearly to diverse audiences</li>
            </ul>
          </li>
        </ul>

      </div>
    ),
};
import "./prison-edu.css"

export const PrisonEdu = {
  id: 2,
  title: "Nigrita Prison",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/prison-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/nigrita-prison-bg.webp",
  description: (
    <div className="sfhmmy-section-edu">
    <div className="sfhmmy-text-container-edu">
      {/* Introduction section */}
        <p>
            This activity was one of our most meaningful educational initiatives. 
            By partnering with the <b>Second Chance School</b> inside Nigrita Prison, we aimed 
            to <b>bring science to a community often excluded from academic spaces</b>. 
            Our session focused on synthetic biology, environmental protection and 
            our project to combat a dangerous fungal pathogen affecting plane trees
        </p>
    </div>

    <img
        src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/6.webp"
        alt="introduction"
        className="introduction-sfhmmy-edu"
    />
      {/* Organization section */}
      <div className="organization-section-edu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/7.webp"
          alt="Organization"
          className="organization-image-priedu1"
        />
        <div className="organization-text-priedu">
          <p>
           Before launching the activity, we worked carefully to ensure it was safe and 
           appropriate. We contacted iGEM HQ for approval, then collaborated closely 
           with prison educators to plan the session. Together, we designed a program 
           that was clear, accessible, and respectful of the participants’ context.<br></br><br></br>

            <b>Privacy was a priority</b>. During the video call, only the teacher’s face was 
            visible, allowing students to feel comfortable participating without fear 
            of exposure. We also prepared two different feedback forms: one for students 
            and one for teachers, to gather insights and improve future sessions.
          </p>
        </div>
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/img-edu-pri.webp"
          alt="Img"
          className="organization-image2-priedu"
        />
      </div>
      
      {/* Implementation section */}
      <div className="implementation-section-edu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/8.webp"
          alt="Implementation"
          className="implementation-image-edu-pri1"
        />

        <div className="impl-prison-edu center-edu-pri1">
          <p>
            The session began with a simple introduction to synthetic biology, using 
            everyday examples to explain key concepts. We then presented our project 
            and discussed the ecological problem of plane tree disease. Because the 
            students were already studying <b>climate change</b>, this created a natural 
            bridge between their curriculum and our topic.
            <br></br><br></br>
            The most valuable part of the session was the discussion. 
            Students shared personal experiences with nature and local environmental 
            challenges, and we listened carefully. This exchange transformed the event 
            into an <b>interactive learning experience</b> where everyone’s voice was heard.     
          </p>
        </div>

        <img
          src="https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/boardgame.webp"
          alt="Students board game"
          className="board-game"
        />
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-edu">
          <div className="outcomes-text-edu-pri">
            <p>
              The feedback was extremely positive.
              <ul>
                <li><b>100% of students and teachers</b> rated the session 5/5 for clarity, organization, and relevance.</li>
                <li>Students said the presentation helped them connect science to their daily lives and understand the importance of protecting the environment</li>
                <li>Teachers praised the team’s clear and accessible communication style, noting how it inspired active participation.</li>
              </ul>
            </p>
          </div>
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
            alt="Outcomes&Results"
            className="outcomes-image-edu-pri1"
          />
      </div>
        {/* Why is it important section */}
          <div className="important-section-edu">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/10.webp"
              alt="Important"
              className="important-image-edu-pri1"
            />
            <div className="important-text-edu-pri">
              <p>  
                This initiative showed how education can empower individuals, even in 
                settings where access to science is limited. By making complex concepts 
                understandable and connecting them to real-world issues, we encouraged 
                students to see themselves as part of the environmental conversation.
              </p>
            </div>
          </div>
        {/* What did we gain section */}
        <div className="gain-section-edu">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/11.webp"
            alt="What did we gain"
            className="gain-image-edu-pri1"
          />
          <div className="gain-text-edu-pri">
            <p>
              Our team learned how to adapt our teaching methods for a sensitive context, 
              balancing clarity with respect. This experience deepened our understanding 
              of education as a tool for inclusivity, showing that learning is a shared 
              process that benefits everyone involved.
            </p>
          </div>
        </div>
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/img-edu-pri2.webp"
          alt="img2"
          className="image-edu-pri2"
        />
      </div>
    
  ),
  adhdText: (
    <p>
      ΣΦΗΜΜΥ = φοιτητικό συνέδριο. Παρουσιάσαμε το project μας και μιλήσαμε με επισκέπτες.
    </p>
  ),
};
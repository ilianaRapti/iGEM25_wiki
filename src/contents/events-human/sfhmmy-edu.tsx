import "./sfhmmy-edu.css"

export const SfhmmyEdu = {
  id: 1,
  title: "ECESCON",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/bgfairytails.webp",
  description: (
    <div className="sfhmmy-section-edu">
    <div className="sfhmmy-text-container-edu">
      {/* Introduction section */}
        <p>
            Education is central to advancing science. Many engineering students graduate without exposure to statistical tools used in biology and medicine.
            <br></br><br></br>
            To address this gap, we designed a workshop focused on <b>survival analysis</b>. This topic is highly relevant across multiple fields:
            <ul>
              <li><b>Medical research:</b> cancer studies, cardiovascular diseases, clinical trials.</li>
              <li><b>Engineering:</b> reliability testing for machines and systems.</li>
            </ul>
            By introducing survival analysis through R programming, we gave students a practical way to explore real-world datasets and strengthen their problem-solving abilities.
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
          className="organization-image-edu"
        />
        <div className="organization-text-edu">
          <p>
           The preparation included: <br></br>

            <ul>
              <li><b>Topic selection:</b> Choosing survival analysis due to its interdisciplinary applications.</li>
              <li><b>Workshop design:</b> Creating step-by-step coding exercises and clear visuals.</li>
              <li>Materials:</li>
                <ul>
                    <li>Preprocessed datasets</li>
                    <li>R code snippets</li>
                    <li>Guide for participants to follow</li>
                </ul>
                <li><b>Feedback system:</b> Google Form distributed through a QR code at the end</li>
            </ul>
            We worked closely with ECESCON organizers to ensure the session would meet the audience’s educational needs.
          </p>
        </div>
      </div>
      
      {/* Implementation section */}
      <div className="implementation-section-edu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/8.webp"
          alt="Implementation"
          className="implementation-image-edu-sfhmmy"
        />

        <div className="impl-block-edu center-edu">
          <p>
            The session began with a short introduction to <b>R</b> so that even complete beginners 
            could participate. Each participant had a laptop and coded in real-time alongside our 
            instructor.
            <br></br><br></br>

            Participants practiced:
            <ul>
              <li>Kaplan–Meier curves to visualize survival probability over time.</li>
              <li>Log-rank tests to statistically compare survival curves.</li>
              <li>Cox proportional hazards models to estimate the effects of different variables.</li>
            </ul>
            These exercises connected theory to practice, showing how statistics can answer biological and technical questions.
            <br></br>
            By the end, participants could:
            <ul>
              <li>Run survival analyses independently.</li>
              <li>Interpret results meaningfully.</li>
              <li>Recognize the importance of statistical methods in diverse scientific fields.</li>
            </ul>
          </p>
        </div>
        <div className="references-edu">
        <h2 className="references-edu-title">References</h2>
        </div>
        <div className="edu-references">
            <ol>
            <li>Cole, S. R., & Hudgens, M. G. (2010). Survival analysis in infectious disease research: describing events in time. AIDS, 24(16), 2423–2431.<a href=" https://doi.org/10.1097/qad.0b013e32833dd0ec" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1097/qad.0b013e32833dd0ec</a></li>
            <li>Clark, T. G., Bradburn, M. J., Love, S. B., & Altman, D. G. (2003). Survival Analysis Part I: Basic concepts and first analyses. British Journal of Cancer, 89(2), 232–238.<a href=" https://doi.org/10.1038/sj.bjc.6601118" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1038/sj.bjc.6601118</a></li>
            <li>Laitinen, E. K. (2005). Survival Analysis and Financial Distress Prediction: Finnish evidence. Review of Accounting and Finance, 4(4), 76–90. <a href="https://doi.org/10.1108/eb043438" target="_blank" rel="noopener noreferrer">https://doi.org/10.1108/eb043438</a></li>
            </ol>
        </div>

            <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/pc.webp"
                alt="Implementation PC"
                className="impl-pc-image"
            />
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-edu">
         {/*Img Left*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/aggeliki-workshop.webp"
            alt="Outcomes&Results left"
            className="outcomes-image-left-edu"
          />
          <div className="outcomes-text-edu-sfhmmy">
            <p>
              <b>Survey results </b>(highlights):
              <ul>
                <li>R experience before workshop:</li>
                  <ul><li><b>81.3%</b> had no prior experience.</li></ul>
                <li>Clarity of explanations:</li>
                  <ul><li><b>81.3%</b> rated <b>4 or 5</b> out of 5.</li></ul>
                <li>Relevance of datasets:</li>
                  <ul><li><b>75% </b>rated the examples as highly relevant.</li></ul>
                <li>Overall satisfaction:</li>
                  <ul><li><b>62.5% </b>rated 4 or 5.</li></ul>
              </ul>
            </p>
          </div>
          {/*Img Title*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
            alt="Outcomes&Results"
            className="outcomes-image-edu-sfhmmy"
          />

          {/*Img Right*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/igemioasfhmmy.webp"
            alt="Outcomes&Results right"
            className="outcomes-image-right-edu"
          />
          <div className="outcomes-text-edu-sfhmmy1">
            <p>
              Participant comments praised the <b>visualizations</b>, the interactive format, and the <b>energy of the team</b>.
              Some suggested slightly <b>faster pacing</b> and providing more datasets for practice.
              Many participants asked for our teaching materials afterward to continue learning.
            </p>
          </div>
      </div>
      {/* Why is it important section */}
          <div className="important-section-edu">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/10.webp"
              alt="Important"
              className="important-image-edu-sfhmmy"
            />
            <div className="important-text-edu-sfhmmy">
              <p>  
                Workshops like this <b>equip students with practical skills</b> they can apply immediately.<br></br>
                By teaching survival analysis, we connected <b>theory with real-world problem-solving</b>, bridging biology, medicine, and engineering.<br></br>
                This session helped participants <b>see the value of interdisciplinary approaches</b> and encouraged lifelong learning.
              </p>
            </div>
          </div>
        {/* What did we gain section */}
        <div className="gain-section-edu">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/11.webp"
            alt="What did we gain"
            className="gain-image-edu-sfhmmy"
          />
          <div className="gain-text-edu-sfhmmy">
            <p>
              Our team learned how to:<br></br>
              <ul>
                <li>Design educational content for audiences with <b>mixed skill levels</b>.</li>
                <li>Use feedback to refine teaching techniques.</li>
                <li>Communicate complex concepts clearly.</li>
              </ul>
              This experience strengthened our belief that <b>education drives innovation</b> and that sharing knowledge is essential to building a strong scientific community.            </p>
          </div>
        </div>
        {/* iGem Thess Img */}
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/img-thess.webp"
          alt="IOA x THESS"
          className="iThess-image-edu"
        />
      </div>
    
  ),
  adhdText: (
    <p>
      ΣΦΗΜΜΥ = φοιτητικό συνέδριο. Παρουσιάσαμε το project μας και μιλήσαμε με επισκέπτες.
    </p>
  ),
};
import "./sfhmmy.css"
import "./shared.css"

export const Sfhmmy = {
  id: 1,
  title: "ECESCON",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/sfymmh-bg1.webp",
  description: (
    <div className="sfhmmy-section-inclu">
    <div className="sfhmmy-text-container-inclu">
      {/* Introduction section */}
        <p>
          On April 25–27, 2025, our team participated in the Electrical and Computer 
          Engineering Student Conference (ECESCON) in Thessaloniki, aiming to foster 
          inclusivity by connecting with students and researchers from fields beyond 
          synthetic biology. Recognizing that many engineering and computer science 
          students lack access to tools for statistical and biological data analysis, 
          we organized an interactive workshop titled <b>“Survival Analysis and Risk 
          Estimation in R”</b>. During the session, participants used their laptops to 
          follow step-by-step guidance from one of our team members, learning to 
          apply advanced analytical concepts through hands-on exercises. 
          This initiative bridged knowledge gaps between disciplines, making survival 
          analysis accessible and empowering attendees to explore its applications 
          within their own areas of study.
        </p>
    </div>

    <img
        src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/6.webp"
        alt="ΣΦΗΜΜΥ"
        className="introduction-sf-inclu"
    />
      {/* Organization section */}
      <div className="organization-section-inclu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/7.webp"
          alt="Organization"
          className="organization-image-inclu"
        />
        <div className="organization-text-inclu">
          <p>
            Our team first reached out to the ECESCON organizing 
            committee to explore how we could best contribute. Through 
            these discussions, we identified a need for practical 
            data analysis training, particularly focused on statistical 
            modeling techniques.
          </p>
          <p>
            <b>Key steps in the organization phase included:</b>
          </p>
          <ul>
            <li><b>Identifying the topic:</b> Selecting survival analysis as a topic with wide applications, from healthcare to engineering systems.</li>
            <li><b>Preparing teaching materials:</b> Developing clear slides, pre-processed datasets, and R code snippets for participants to follow.</li>
            <li><b>Ensuring accessibility:</b> Structuring the workshop so participants of all levels, including complete beginners, could engage meaningfully.</li>
            <li><b>Collecting feedback:</b> Creating a Google Form with a QR code distributed at the end of the session to evaluate its effectiveness.</li>
          </ul>
          <p>
            We also ensured that participants would have everything they needed to follow along by advising them beforehand to bring laptops with R and RStudio installed.
          </p>
        </div>
      </div>
      
      {/* Implementation section */}
      <div className="implementation-section-inclu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/8.webp"
          alt="Organization"
          className="implementation-image-inclu"
        />

        <div className="impl-block-inclu right-inclu">
          <p>
            The workshop was held as a <b>fully interactive session</b>, where one of our team members specialized in R led participants through each concept step-by-step.

            <ul>
              <li>The session began with a <b>brief introduction to R</b>, ensuring even complete beginners could follow.</li>
              <li>Participants worked directly with provided datasets, typing code alongside the instructor in real-time.</li>
              <li>The teaching approach combined <b>theory with hands-on practice</b>, with participants applying concepts such as survival functions, log-rank tests, and Cox proportional hazards models immediately after learning them.</li>
              <li>Real-world datasets and examples were used to illustrate how survival analysis is applied in various fields.</li>
            </ul>
          </p>
        </div>

        <div className="impl-block-inclu left-inclu">
          <p>

          </p>
        </div>

        <div className="impl-block-inclu right1-inclu">
         <p>
          During the workshop, participants became familiar with <b>key techniques 
          of survival analysis</b> in R, using real-world datasets. Through practical 
          examples, they learned how to analyze and interpret the relationship 
          between covariates and the risk of an event.
          The main points covered were:
            <ul>
              <li><b>Kaplan–Meier</b> curves to visualize the survival probability of different groups over time.</li>
              <li><b>Log-rank test</b> to statistically compare survival curves between groups.</li>
              <li><b>Cox proportional hazards model</b> to estimate the effect of variables such as age, sex, or clinical factors on event risk.</li>
            </ul>
                
            These methods are central in <b>cancer studies, cardiovascular research, 
            pharmacological trials,</b> and even the <b>assessment of mechanical system 
            reliability</b>.
            <br></br>
            By combining theory with hands-on coding in R, the workshop 
            provided engineering students with <b>a clear understanding of how 
            statistical tools bridge medicine, biology</b>, and <b>technical sciences</b>, 
            while emphasizing the importance of <b>interdisciplinary approaches</b>.
          </p>
        </div>

      <div className="impl-block-inclu right2-inclu">
         <p>
            This approach created an active learning environment that encouraged 
            questions and peer-to-peer interaction. Many participants stayed after 
            the session to ask for additional guidance and requested access to the 
            workshop materials for further study.
            <br></br><br></br>

            Survival analysis is a method used to estimate the time until the occurrence 
            of an event. Such events may include mortality, disease relapse, or treatment 
            response. The same methods are also applied in epidemiology 
            (Cole & Hudgens, 2010), engineering (Clark et al., 2003), 
            and financial risk assessment (Laitinen, 2005).
            <br></br><br></br>

            By combining theory with hands-on coding in R, the workshop provided engineering 
            students with a clear understanding of how statistical tools bridge medicine, 
            biology, and technical sciences, while emphasizing the importance of 
            interdisciplinary approaches.
          </p>
        </div>
      </div>
      <div className="references-sfhmmy1-inclu">
        <h2 className="references-sfhmmy1-title-inclu">References</h2>
      </div>
      <div className="sfhmmy1-references-inclu">
        <ol>
          <li>Cole, S. R., & Hudgens, M. G. (2010). Survival analysis in infectious disease research: describing events in time. AIDS, 24(16), 2423–2431.<a href="https://doi.org/10.1097/qad.0b013e32833dd0ec" target="_blank" rel="noopener noreferrer">https://doi.org/10.1097/qad.0b013e32833dd0ec</a></li>
          <li>Clark, T. G., Bradburn, M. J., Love, S. B., & Altman, D. G. (2003). Survival Analysis Part I: Basic concepts and first analyses. British Journal of Cancer, 89(2), 232–238.<a href="https://doi.org/10.1038/sj.bjc.6601118" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/sj.bjc.6601118</a></li>
          <li>Laitinen, E. K. (2005). Survival Analysis and Financial Distress Prediction: Finnish evidence. Review of Accounting and Finance, 4(4), 76–90.<a href="https://doi.org/10.1108/eb043438" target="_blank" rel="noopener noreferrer">https://doi.org/10.1108/eb043438</a></li>
        </ol>
      </div>

        {/* Outcomes&Results section */}
        <div className="outcomes-section-inclu">
         {/*Img Left*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/aggeliki-workshop.webp"
            alt="Outcomes&Results left"
            className="outcomes-image-left-inclu"
          />
          <div className="outcomes-text-inclu">
            <p>
              The workshop received <b>high engagement</b>, with participants 
              coming from multiple universities and backgrounds:
                <ul>
                  <li><b>Level of study:</b></li>
                  <ul>
                    <li>Undergraduate (4th–6th semester): 62.5%</li>  
                    <li>Undergraduate (7th semester and above): 31.3%</li>
                    <li>Postgraduate: 6.3%</li>
                  </ul>
                  <li><b>Fields represented </b>: Primarily Electrical and 
                  Computer Engineering students from institutions such as the 
                  Aristotle University of Thessaloniki (AUTH), 
                  Democritus University of Thrace and University of Thessaly.
                  </li>               
                </ul>
            </p>
          </div>
          {/*Img Title*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
            alt="Outcomes&Results"
            className="outcomes-image-inclu"
          />

          {/*Img Right*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/igemioasfhmmy.webp"
            alt="Outcomes&Results right"
            className="outcomes-image-right-inclu"
          />

            <div className="outcomes-text1-inclu">
              <p className="greentxt-outcomes-inclu">
                Notably, 81.3% of attendees had no prior experience with R, 
                demonstrating that the workshop reached a beginner audience 
                and successfully introduced them to a new skill set.
                <br></br><br></br>

                <b>Key feedback highlights</b>:
                <ul>
                  <li><b>Clarity of explanations</b>: 81.3% rated the survival analysis concepts as clear or very clear.</li>
                  <li><b>Relevance of datasets</b>: 75% rated the real-world datasets as highly relevant (score of 5/5).</li>
                  <li><b>Usefulness of preparatory materials</b>: 75% found them useful or very useful.</li>
                  <li><b>Achievement of objectives</b>: 68.8% felt the workshop fully or mostly achieved its goals.</li>
                  <li><b>Overall satisfaction</b>: 62.5% rated their experience as highly satisfying (4 or 5 out of 5).</li>
                </ul>
                <br></br><br></br>
                Participant comments highlighted:
                <br></br><br></br>
                <i>“The visualizations were amazing and made complex concepts easy to grasp.”</i><br></br>
                <i>“I loved the energy of the team presenting and all the material provided.”</i><br></br>
                <i>“My life is now divided into two eras: Before RStudio (B.R.) and After RStudio (A.R.). Thank you for awakening the statistical soulmate I never knew I needed.”</i>
                <br></br><br></br>
                
                Suggestions for improvement included adding deeper theoretical content, increasing interactivity and adjusting pacing.    
              </p>
              <p>

              
              </p>
          </div>
          {/* Why is it important section */}
          <div className="important-section-inclu">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/10.webp"
              alt="Important"
              className="important-image-inclu"
            />
            <div className="important-text-inclu">
              <p>  
                This workshop was a step toward <b>inclusive education in interdisciplinary 
                science</b>. By introducing engineering and computer science students 
                to statistical tools widely used in biological research, we 
                lowered barriers to entry into the field of synthetic biology.
                <br></br><br></br>

                Many of these students had <b>no prior experience with R</b>, yet by the 
                end of the session, they were able to perform basic analyses and 
                visualize their results. This demonstrates the power of accessible 
                teaching methods and highlights how inclusivity also means <b>sharing 
                tools and knowledge across disciplines</b>.
                <br></br><br></br>

                Through this initiative, we contributed to building a more diverse 
                scientific community where individuals from different academic 
                backgrounds can collaborate, innovate and grow together.
              </p>
            </div>
          </div>
          {/* What did we gain section */}
          <div className="gain-section-inclu">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/11.webp"
              alt="What did we gain"
              className="gain-image-inclu"
            />
            <div className="gain-text-inclu">
              <p>
                From this experience, we learned:<br></br>
                <ul>
                  <li>How to design educational activities that accommodate participants with varying skill levels.</li>
                  <li>The importance of feedback in refining teaching approaches — especially the need for pacing and balancing theory with practice.</li>
                  <li>That bridging gaps between disciplines fosters new collaborations and insights, enriching both our project and the participants’ perspectives.</li>
                </ul>
                Most importantly, we saw firsthand how inclusivity can take the form 
                of <b>knowledge-sharing</b>, ensuring that advanced analytical methods are 
                accessible to all, regardless of their starting point.
              </p>
            </div>
          </div>
        </div>
        
      {/* iGem Thess Img */}
      <img
        src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/sfhmmy/img-thess.webp"
        alt="IOA x THESS"
        className="iThess-image-inclu"
      />

      <div className="content-full ref-box text_color_light">
              <h2>References:</h2>
              <p>Cole, S. R., & Hudgens, M. G. (2010). Survival analysis in infectious disease research: describing events in time. AIDS, 24(16), 2423–2431. <a target="_blank" href="https://doi.org/10.1097/qad.0b013e32833dd0ec" >https://doi.org/10.1097/qad.0b013e32833dd0ec</a></p>
              <p>Clark, T. G., Bradburn, M. J., Love, S. B., & Altman, D. G. (2003). Survival Analysis Part I: Basic concepts and first analyses. British Journal of Cancer, 89(2), 232–238. <a target="_blank" href="https://doi.org/10.1038/sj.bjc.6601118" >https://doi.org/10.1038/sj.bjc.6601118</a></p>
              <p>Laitinen, E. K. (2005). Survival Analysis and Financial Distress Prediction: Finnish evidence. Review of Accounting and Finance, 4(4), 76–90.  <a target="_blank" href="https://doi.org/10.1108/eb043438" >https://doi.org/10.1108/eb043438</a></p>
            </div>
    </div>

  ),
  adhdText: (
    <div className="shared-adhd-text-inclu">
    <p>
      <b>Introduction</b>
      <ul>
        <li><b>Who</b>: Engineering students</li>
        <li><b>Where</b>: ECESCON Conference</li>
        <li><b>When</b>: April 25–27, 2025</li>
        <li><b>Goal</b>:</li>
          <ul>
            <li>Teach R programming for biological data</li>
            <li>Promote inclusivity by bridging disciplines</li>
            <li>Empower students with new skills</li>
          </ul>
      </ul>

      <b>Organization</b>
      <ul>
        <li>Chose <b>Survival Analysis and Risk Estimation</b> as topic</li>
        <li>Prepared:</li>
        <ul>
          <li>Real datasets</li>
          <li>Step-by-step coding guides</li>
          <li>Visual slides</li>
          <li>Feedback form with QR code</li>
        </ul>
      </ul>

      <b>Implementation</b>
      <ul>
        <li>Beginner-friendly session</li>
        <li>Participants coded alongside instructor</li>
        <li>Key concepts covered:</li>
        <ul>
          <li>Kaplan-Meier curves</li>
          <li>Log-rank tests</li>
          <li>Cox proportional hazards models</li>
        </ul>
        <li>Real-world datasets to connect theory to practice</li>
      </ul>

      <b>Outcome and Results</b>
      <ul>
        <li>81.3% had <b>no prior R experience</b></li>
        <li>Ratings:</li>
        <ul>
          <li>Clarity: 81.3% very clear</li>
          <li>Relevance: 75% highly relevant</li>
          <li>Satisfaction: 62.5% highly satisfied</li>
        </ul>
        <li>Participants loved visualizations and interactive style</li>
      </ul>

      <b>Why Is This Important</b>
      <ul>
        <li>Makes statistical tools accessible to all</li>
        <li>Bridges gaps between fields</li>
        <li>Encourages interdisciplinary participation</li>
      </ul>

      <b>What We Gained</b>
      <ul>
        <li>Improved our teaching and communication skills</li>
        <li>Learned to design for <b>mixed skill levels</b></li>
        <li>Built new connections for future collaborations</li>
      </ul>
    </p>
    </div>















  ),
};
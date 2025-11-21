import "./elepap-edu.css"
import "./shared.css"

export const ELEPAPedu = {
  id: 99,
  title: "ELEPAP (1st visit)",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/elepap/bg.webp",
  background: "",
  description: (
    <div>

      <div className="section elepap-edu-row1" style={{ paddingBottom: "150px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-1.webp" alt="Introduction" />
        </div>
        <div className="content">
          <div className="content-grid">

            <div style={{ gridColumn: "span 4", paddingRight: "100px", marginLeft: "-100px" }}>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/elepap/image-1.webp"
                alt="Reading stories with students"
                style={{ width: "100%" }}
              />
            </div>

            <div className="text_color_dark" style={{ gridColumn: "span 4", marginLeft: "-100px", marginRight: "-100px" }}>
              <p>As part of Rare Disease Day on February 28th, our team ran a collaborative event with ELEPAP (Hellenic Society for the Protection and Rehabilitation of Disabled Persons) to make science accessible to all members of the community. For the educational framing of this activity, the focal learning topic was <b>plane trees</b> (<i>Platanus orientalis</i>) — presented as a local, culturally relevant example — while the broader pedagogical aim was to introduce basic synthetic-biology ideas in plain language and through multisensory experience.</p>
            </div>

            <div style={{ gridColumn: "span 4", paddingLeft: "100px", marginRight: "-100px" }}>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/elepap/image-2.webp"
                alt="Chemical experiments at ELEPAP"
                style={{ width: "100%", marginTop: "100px" }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="section elepap-edu-row2" style={{ marginTop: "-140px", paddingBottom: "50px" }}>
        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-2.webp" alt="Organization" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_light">
              <p>ELEPAP's mission and our planning provided the educational context and support for the activity. ELEPAP is a long-standing philanthropic, non-profit organization in Greece offering education and rehabilitation for children and adults with motor disabilities and neurodevelopmental disorders. We coordinated with the social worker and specialized staff, visited the facilities, and held a team brainstorming session to finalize learning activities for both the adult and children’s departments. Based on the social worker’s guidance, we were advised that most children have autism spectrum disorder, so the key point was to clearly explain what we were describing, illustrating it with images, as visual representation is essential for understanding. In the adult department, there were no specific restrictions; however, we adapted some activities on the spot under the specialists’ guidance. Activities planned included: <b>clay crafts using leaves, painting (freehand and leaf outlines), cooking (cookies), science experiments, storytelling, puppet theatre and songs.</b></p>
            </div>
          </div>
        </div>
      </div>

      <div className="section elepap-edu-row3" style={{ paddingBottom: "50px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-3.webp" alt="Implementation" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_dark">
              <p>Sequence and instructional methods used during the 4-hour workshop (≈45 participants, including children aged 4–10 and adults aged ~20–70+):</p>
              <ul className="fancy-li">
                <li>
                  <b>Ice-breaker (circle introductions / fun fact):</b>  established rapport, allowed facilitators to adjust speech volume and pacing and assessed participant comfort. It also served as a formative check before instruction.
                </li>
                <li>
                  <b>Storytelling with tactile exploration and live guitar:</b> we read the illustrated fairytale “I Have Lost My Color and I’m Trying to Find It” while holding the book for tactile exploration and narrating through sight and sound, live guitar accompanied the reading and later supported a movement close. Storytelling functioned as an entry point to themes of diversity and as a bridge to botanical and synthetic-biology concepts.
                </li>
                <li>
                  <b>Concept introduction:</b> plane trees were presented (their roles: providing shade, purifying air, offering wood) and synthetic biology was described in plain language as “using nature’s building blocks to solve problems”, linking story themes to scientific ideas.
                </li>
                <li>
                  <b>Art stations & crafts:</b> participants traced and colored large plane-tree templates, painted (freehand and leaf outlines), and molded soft clay into plane-tree leaves to reinforce botanical features through hands-on, multisensory practice. Adaptive tools (thicker markers, larger templates) supported participation regardless of fine-motor ability.
                </li>
                <li>
                  <b>Hands-on science demonstrations:</b> vinegar + baking soda (foaming, CO₂) and red cabbage pH indicator tests (color shifts with lemon juice or baking soda) were narrated slowly with attention to real-time visual changes to stimulate observation skills.
                </li>
                <li>
                  <b>Music, singing and movement:</b> practical participation for adults, live guitar, group singing, and impromptu dance closed the session and reinforced social and emotional learning.
                </li>
                <li>
                  <b>Real-time adaptation & specialist collaboration:</b> ELEPAP staff guided modifications on the spot to meet individual preferences and needs, ensuring instruction remained accessible and learner-centered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section elepap-edu-row4">
        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-4.webp" alt="Outcomes & Results" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_black">
              <p>Observed educational outcomes and evidence collected during and immediately after the workshop:</p>
              <ul>
                <li><b>Engagement across modalities:</b> participants engaged verbally and nonverbally in discussion, participated in art and clay stations, and observed as well as reacted to the science demonstrations.</li>
                <li><b>Concept uptake:</b> participants demonstrated understanding of plane-tree functions (shade, air purification, wood) and responded to a plain-language introduction to synthetic biology.</li>
                <li><b>Inclusive participation:</b> multisensory methods (sensory-based books, modified instruments, live music, visual demonstrations) enabled broad participation regardless of sensory or motor differences.</li>
                <li><b>Assessment sources:</b> continuous formative assessment came from participant responses during Q&A, observation of participation at stations, and translation of nonverbal cues by facilitators. Post-activity debriefing with facility specialists supplied reflective qualitative data on how the activities supported learning and accessibility.</li>
                <li><b>Affective outcomes:</b> the session fostered empathy, cross-generational connection and a sense of shared accomplishment, supporting affective learning goals.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-5.webp" alt="Why is it important?" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-span text_color_black">
              <p>This activity demonstrates that educational outreach in STEM is most effective when it is <b>inclusive, multisensory, and co-designed</b> with specialists. Adaptive design and active listening convert presence into meaningful participation, allowing learners with diverse cognitive and sensory needs to access scientific ideas. Developing a fully illustrated, tactile storybook (planned next) and conducting follow-up visits (also planned) provide a sustainable educational legacy that extends learning beyond a single event.</p>
            </div>

            <div className="image-span">
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/elepap/image-3.webp"
                alt="PFSB Worksohp for Alphafold"
                style={{ width: "70%", marginLeft: "50px", marginTop: "50px" }}
              />
            </div>
          </div>
        </div>

        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-6.webp" alt="What we gain" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_light">
              <p>From an educational perspective, the team gained practical insights into designing accessible learning experiences: the value of real-time adaptation, specialist collaboration and multimodal teaching strategies (storytelling, sensory-based exploration, art, hands-on demos, music, cooking, and movement). We improved our ability to communicate scientific concepts plainly and empathetically and learned how diverse learners perceive and express knowledge—lessons that will inform future inclusive STEM education efforts.</p>
            </div>

            <div className="content-full" style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/elepap/image-4.webp"
                alt="ELEPAP Children"
                style={{ width: "80%", marginBottom: "40px" }}
              />
            </div>

            <div className="content-full ref-box text_color_light">
              <h2>References:</h2>
              <p>Hu J, Zhang J, Hu L, Yu H and Xu J (2021) Art Therapy: A Complementary Treatment for Mental Disorders. Front. Psychol. 12:686005. doi: <a target="_blank" href="https://doi.org/10.3389/fpsyg.2021.686005" >10.3389/fpsyg.2021.686005</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>),
  adhdText: (
   <div className="shared-adhd-text-inclu">

    <p><b>Introduction</b></p>
    <ul>
      <li>Event: Rare Disease Day — Feb 28.</li>
      <li>Goal: bring science to everyone.</li>
      <li>Topic: plane trees (Platanus) + a simple intro to synthetic biology.</li>
      <li>Format: 4-hour workshop, ~25 people, ages ~20–70+.</li>
    </ul>

    <p><b>Organization</b></p>
    <ul>
      <li>Partner: ELEPAP (social worker + specialists).</li>
      <li>We visited the facility and planned activities with ELEPAP.</li>
      <li>Planned activities: clay crafts (using leaves), painting (freehand & leaf outlines), cooking (cookies), science experiments, storytelling, puppet theatre, songs.</li>
      <li>Activities were adapted with specialist guidance.</li>
    </ul>

    <p><b>Implementation</b></p>
    <ul>
      <li><b>Start:</b> Circle ice-breaker — name + fun fact.</li>
      <li><b>Storytelling:</b> read <i>“I Have Lost My Color and I’m Trying to Find It”</i>.</li>
      <li>Hold the book for tactile exploration.</li>
      <li>Play live guitar during the reading.</li>
      <li><b>Group Q&A:</b> ask about colors, animals, message. Specialists help translate nonverbal responses.</li>
      <li><b>Introduce concepts:</b> plane trees (shade, clean air, wood). Explain synthetic biology plainly: “using nature’s building blocks to solve problems.”</li>
      <li><b>Art & craft stations:</b>
        <ul>
          <li><b>Trace & color</b> large plane-tree templates.</li>
          <li><b>Paint</b> (freehand and leaf outlines).</li>
          <li><b>Clay</b>: mold soft clay into plane-tree leaves (textures, veins).</li>
          <li>Use <b>adaptive tools</b> (thicker markers, larger templates).</li>
        </ul>
      </li>
      <li><b>Science demos:</b>
        <ul>
          <li><b>Vinegar + baking soda</b> → foaming / CO₂.</li>
          <li><b>Red cabbage pH test </b>→ color change with lemon or baking soda.</li>
          <li>Narrate steps slowly and show the visual change.</li>
        </ul>
      </li>
      <li><b>Music / singing / movement:</b> live guitar, group singing, impromptu dance to close.</li>
      <li><b>Cooking:</b> cookies (adult group activity).</li>
      <li><b>On-the-spot changes:</b> ELEPAP specialists guide real-time adaptations.</li>
    </ul>

    <p><b>Outcomes & Results</b></p>
    <ul>
      <li>People took part in the ice-breaker and story.</li>
      <li>Sensory-based book + guitar helped children engage.</li>
      <li>Participants used art, clay, and painting to express ideas about plane trees.</li>
      <li>Science practical experiments produced clear visual responses (foam, color shifts).</li>
      <li>Session ended with shared music and movement.</li>
      <li>Team debriefed with specialists after the workshop.</li>
    </ul>

    <p><b>Why This Matters</b></p>
    <ul>
      <li>The same activities (story, tactile access, art, demos, cooking, puppet theatre, songs, movement) gave multiple ways for people to access the same scientific ideas.</li>
      <li>Specialists’ guidance let the team adjust activities so everyone could join.</li>
    </ul>

    <p><b>What We Gained</b></p>
    <ul>
      <li>Fun + learning happened together through the listed activities.</li>
      <li>The team learned how participants perceive and express themselves using those activities.</li>
      <li>Debriefing with ELEPAP helped improve on-the-spot adaptations.</li>
    </ul>

  </div>
  ),
};
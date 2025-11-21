import "./symbiose-edu.css"
import "./shared.css"

export const symbioseEdu = {
  id: 8,
  title: "SymBioSE",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/symbiose/bg-0-2.webp",
  background: "",
  description: (
    <div>

      <div className="section symbiose-edu-row1" style={{ paddingBottom: "40px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-1.webp" alt="Introduction" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full">
              <p><b>SymBioSE is an annual European conference</b> dedicated to connecting young scientists with an interest in synthetic biology. It brings together attendees from diverse academic backgrounds and countries, providing a unique environment for learning and collaboration.</p>
              <p>Our participation in SymBioSE 2025 aimed to achieve two core educational objectives. First, we wanted to raise awareness about <b>canker stain disease</b>, a devastating plant condition caused by the fungus Ceratocystis platani, which poses a serious threat to plane trees. While this pathogen is highly relevant in certain countries, many attendees had never encountered it before or understood its ecological and economic implications.</p>
              <p>Second, we wanted to teach <b>practical skills</b> in molecular biology using Benchling, a powerful online platform for planning and documenting laboratory work. Many students had theoretical knowledge of molecular techniques but lacked hands-on experience with modern digital tools that support laboratory workflows. By addressing both of these gaps, we aimed to create a well-rounded educational experience that would benefit participants in their future research endeavors.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bleed-top symbiose-edu-row2" style={{ paddingBottom: "40px" }}>
        <div className="title-row title-img-right">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-2.webp" alt="Organization" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-span">
              <p>Our preparation process for SymBioSE involved careful planning to ensure that the content would be accessible and relevant to an international audience.</p>
              <p><b>For the presentation</b>, we developed clear, visually engaging slides that explained the biology of the plane tree pathogen and our synthetic biology solution. Since most attendees were graduate students with strong scientific backgrounds, we focused on precision and depth while avoiding excessive jargon that might create barriers to understanding.</p>
              <p><b>For the workshop</b>, our team designed a step-by-step guided activity using Benchling. This involved creating realistic biological problems that learners would need to solve, such as choosing the correct restriction enzymes for a cloning task or troubleshooting plasmid design issues. Each exercise was structured to mimic real challenges faced in molecular biology labs, making the session both educational and practical.</p>
              <p>Finally, we prepared <b>an evaluation form</b> accessible via QR code. This allowed attendees to provide structured evaluations of both the presentation and the workshop, helping us assess whether our educational goals were met.</p>
            </div>
            <div className="image-span">
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/symbiose/image-1.webp"
                alt="SymBioSE workshop"
                style={{ width: "100%" }} />
            </div>
          </div>

          <div className="content-full">
            <img
              className="tagline-img tagline-right"
              src="https://static.igem.wiki/teams/5684/wikipics/education/symbiose/tagline.webp"
              alt="From Workshop"
              style={{ marginRight: "-150px" }}
            />
          </div>

        </div>
      </div>

      <div className="section symbiose-edu-row3" style={{ paddingBottom: "30px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-3.webp" alt="Implementation" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="image-span" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/symbiose/image-3.webp"
                alt="info graphic"
                style={{ width: "100%", marginLeft: "-70px" }} />
            </div>

            <div className="content-span text_color_dark">
              <p>The educational program was split into two main components: <b>a scientific presentation and a hands-on workshop.</b></p>
              <p><b>Project Presentation</b></p>
              <p>Our presentation introduced participants to the pressing issue of canker stain disease. Many attendees were unfamiliar with this problem, as plane trees are not equally common across Europe. We began by explaining the biology of the fungus Ceratocystis platani, its symptoms, and how it spreads between trees, leading to widespread ecological damage and economic losses in affected regions.</p>
              <p>We then introduced our synthetic biology project, explaining step-by-step how our system works to combat this pathogen. Visual aids were key in making the content accessible, especially when discussing complex molecular mechanisms. By providing clear diagrams and real-world context, we helped attendees connect theoretical concepts to practical applications.</p>
              <p>The audience response was very positive. According to our feedback form:</p>

              <ul>
                <li>89.2% correctly identified <i>Ceratocystis platani</i> as the target fungus after the presentation.</li>
                <li>73% understood the regulatory strategies we employ in our system.</li>
                <li>However, only 27% identified the correct symptom of canker stain disease, revealing an area for improvement in how we communicate plant pathology concepts.</li>
              </ul>

              <p>The highlight of this session was winning the Best Undergraduate Presentation Award, which validated the educational impact of our work and our ability to communicate effectively with a diverse scientific audience.</p>

              <p><b>Benchling Workshop</b></p>
              <p>The second part of our educational contribution was a fully interactive Benchling workshop. Benchling is a cloud-based platform that allows researchers to plan experiments, design plasmids, and manage laboratory data. While many learners had heard of it, few had used it extensively.</p>
              <p>We began with a brief guided tour of the software, explaining its core features and how it fits into modern molecular biology workflows. Next, attendees were given a practical challenge: design a plasmid for a specific biological task while navigating common pitfalls, such as mismatched restriction enzyme sites or incorrect insert orientation.</p>
              <p>Throughout the session, audience worked step-by-step on their laptops while team members provided support and answered questions. This format transformed the workshop from a passive learning experience into an active problem-solving session.</p>
              <p>Survey results demonstrated the effectiveness of this approach:</p>

              <ul>
                <li>80% of participants rated the workshop’s usefulness as 4 or 5 out of 5.</li>
                <li>50% expressed interest in joining iGEM in the future, showing that the session inspired them to explore synthetic biology more deeply.</li>
              </ul>

              <p>Audience also provided qualitative feedback, noting that they learned how to:</p>
              <ul>
                <li>Identify and interpret enzyme recognition sites.</li>
                <li>Avoid common cloning design mistakes, such as incompatible cohesive ends.</li>
                <li>Think critically about the planning stage of lab work before entering the laboratory.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section symbiose-edu-row4" style={{ paddingBottom: "70px", marginTop: "-20px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-4.webp" alt="Outcomes & Results" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_dark">
              <p>The combination of a targeted scientific presentation and a practical workshop created a comprehensive educational experience.</p>
              <p>From the presentation, participants gained new knowledge about a plant disease that many had never encountered before. They also gained insights into how synthetic biology can be applied to real-world environmental challenges, broadening their perspective on the field.</p>
              <p>From the workshop, attendees walked away with tangible skills they could immediately apply in their research. By practicing plasmid design in a structured setting, they developed confidence and problem-solving abilities that will be valuable throughout their careers.</p>
              <p>Our feedback data confirmed that we successfully met our educational goals. The majority of audience rated both sessions highly, and the fact that many stayed afterward to ask further questions demonstrated a high level of engagement and curiosity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section symbiose-edu-row5" style={{ marginTop: "-80px" }}>
        <div className="title-row title-img-right">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-5.webp"
            alt="Why is it important?"
            style={{ marginRight: "-180px" }}
          />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_black">
              <p>This event demonstrated the power of education to <b>connect theory with practice</b>. By combining conceptual knowledge with hands-on learning, we empowered participants to not only understand synthetic biology but also to apply it in meaningful ways.</p>
              <p>The educational impact extended beyond the conference itself. Audience left with skills and perspectives they could bring back to their home institutions, potentially influencing their local research communities. This type of knowledge transfer helps build a stronger, more interconnected network of synthetic biology practitioners across Europe.</p>
              <p>Moreover, introducing attendees to tools like Benchling encourages the adoption of modern, digital lab practices, fostering efficiency and collaboration in research.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section symbiose-edu-row6" style={{ paddingBottom: "40px" }}>
        <div className="title-row title-img-right">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-6.webp" alt="What did we gain" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_light">
              <p>For our team, SymBioSE was an invaluable learning experience. Teaching advanced concepts to a highly educated, international audience challenged us to refine our communication strategies and adapt our methods to different learning styles.</p>
              <p>We learned how to design educational activities that balance clarity, depth and interactivity. The audience’s insights provided concrete insights into participant needs, which will guide our future outreach efforts.</p>
              <p>Most importantly, this workshop reaffirmed our belief that <b>education is the foundation of innovation and collaboration</b>. By sharing our knowledge openly, we not only supported the growth of individual participants but also contributed to the development of a broader synthetic biology community.</p>
            </div>
          </div>
        </div>
      </div>

    </div>),
  adhdText: (
    
  <div className="shared-adhd-text-inclu">
 <p><b>Introduction</b></p>
    <ul>
      <li>Event: SymBioSE 2025, Latvia.</li>
      <li>Audience: Mostly Master’s and PhD students.</li>
      <li>Educate participants about:
        <ul>
          <li>Plant disease threats like <i>Ceratocystis platani</i>.</li>
          <li>Molecular biology tools such as Benchling.</li>
          <li>Practical cloning and plasmid design techniques.</li>
        </ul>
      </li>
      <li>Many attendees were unfamiliar with plant pathogens or cloning software.</li>
      <li>We aimed to close this knowledge gap through teaching and hands-on practice.</li>
    </ul>

    <p><b>Organization</b></p>
    <ul>
      <li>Presentation materials: slides, visuals, and evaluation forms.</li>
      <li>Workshop plan: step-by-step guide + real biological challenge.</li>
    </ul>

    <p><b>Implementation</b></p>
    <ul>
      <li><b>Presentation:</b>
        <ul>
          <li>Explained canker stain disease and our approach.</li>
          <li>Simplified complex regulation strategies for clarity.</li>
          <li>Feedback showed:
            <ul>
              <li>89.2% knew target fungus.</li>
              <li>73% understood regulation.</li>
              <li>27% knew correct symptom → education needed.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Benchling Workshop:</b>
        <ul>
          <li>Quick walkthrough of platform features.</li>
          <li>Attendees designed plasmids and solved lab problems in real time.</li>
        </ul>
      </li>
    </ul>

    <p><b>Outcome and Results</b></p>
    <ul>
      <li>80% rated workshop usefulness 4 or 5/5.</li>
      <li>50% became interested in joining iGEM.</li>
      <li>Learners improved understanding of cloning concepts and plant disease awareness.</li>
    </ul>

    <p><b>Why Is This Important</b></p>
    <ul>
      <li>Strengthens synthetic biology education across Europe.</li>
      <li>Connects theory to practice.</li>
      <li>Builds a knowledgeable community ready to tackle real-world challenges.</li>
    </ul>

    <p><b>What We Gained</b></p>
    <ul>
      <li>Experience teaching technical skills to advanced learners.</li>
      <li>Feedback to refine future educational activities.</li>
      <li>Proof that education inspires collaboration and growth.</li>
    </ul>

  </div>
  ),
};
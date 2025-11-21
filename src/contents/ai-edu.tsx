import "./ai-edu.css"
import "./shared.css"

export const aiEdu = {
  id: 17,
  title: "AI for Educators",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/ai/bg.webp",
  background: "",
  description: (
    <div>

      <div className="section ai-edu-row1">
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-1.webp" alt="Introduction" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_light">
              <p>On September 13th we attended the event “AI for Educators” at JOIST, the innovation hub in Ioannina. The workshop explored how <b>Artificial Intelligence</b> is now an integral part of our everyday lives and how it can be applied in education and knowledge-sharing for many and diverse audiences, always with an emphasis on inclusivity and responsibility.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section ai-edu-row2" style={{ paddingBottom: "160px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/education/ai/title-10.webp" alt="Speakers and Key Insights" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_dark">
              <p><b>Dimitrios Exarchos</b>, Director of JOIST and of the E.I.S - Hellenic Institute for Packing and Agrifood Safety,
                addressed the risks connected to AI, the importance of protecting user rights and how academic impact
                may be influenced by the adoption of such technologies.</p>
              <p><b>Panagiotis Tsiotakis</b>, educator, analyzed how prompts can be designed and adapted effectively within teaching and learning contexts. He also presented a series of AI tools, explaining their functions, their limitations, and their potential impact on knowledge assessment. Emphasis was given to specialized educational applications, such as Matrix School, that are tailored to teaching and learning environments.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section ai-edu-row3" style={{ paddingBottom: "40px", marginTop: "-170px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-3.webp" alt="Implementation" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-span text_color_light" style={{ paddingTop: "60px" }}>
              <p>The sessions included practical demonstrations of AI prompts, discussions on model limitations and reflections on ethical issues. The event concluded with an open dialogue among the speakers,educators and participants, highlighting ways in which innovative AI practices can be integrated into the educational process. </p>
              <p>Beyond the knowledge acquired, the workshop offered us the chance to expand our network, exchange ideas with educators and experts, and receive valuable feedback on our actions. This experience reaffirmed the importance of leveraging AI not only as a technical tool but also as a bridge for inclusivity, collaboration, and communication across diverse communities.</p>
            </div>

            <div className="image-span" style={{ marginTop: "-120px" }}>
              <img src="https://static.igem.wiki/teams/5684/wikipics/education/ai/image-1.webp"
                alt="Vasso and Ioanna at JOIST"
                style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="section ai-edu-row4" style={{ paddingBottom: "40px" }}>
        <div className="title-row title-img-right">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-6.webp" alt="What did we gain" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="image-span" style={{ marginTop: "-120px" }}>
              <img src="https://static.igem.wiki/teams/5684/wikipics/education/ai/iamge-2.webp"
                alt="Vasso and Ioanna at JOIST"
                style={{ width: "100%" }} />
            </div>
            <div className="content-span text_color_dark">
              <p>Our participation allowed us to strengthen our skills in prompt design, gain exposure to new AI tools relevant to education, and better understand both the opportunities and risks of AI. It also helped us reflect on how AI can be a complementary tool to our own <b>creative</b> and <b>educational work</b>, supporting <b>idea generation, communication</b>, and <b>content development</b>.</p>
            </div>
          </div>
        </div>
      </div>

    </div>),
  adhdText: (
  <div className="shared-adhd-text-inclu">

    <p><b>Introduction</b></p>
    <ul>
      <li>On September 13th we joined the <i>“AI for Educators”</i> workshop at JOIST in Ioannina.</li>
      <li>The event showed how AI is part of our daily lives and how it can be used in education—always with a focus on <i>inclusivity</i> and <i>responsibility</i>.</li>
    </ul>

    <p><b>Speakers & Key Insights</b></p>
    <ul>
      <li><b>Dimitrios Exarchos (JOIST Director)</b> → spoke about AI risks, protecting user rights, and academic impact.</li>
      <li><b>Panagiotis Tsiotakis (Educator)</b> → explained how to design effective prompts, showcased AI tools, their strengths & limits, and highlighted specialized apps like Matrix School for teaching.</li>
    </ul>

    <p><b>Why It Matters</b></p>
    <ul>
      <li>Practical demos of prompts + discussions on limitations & ethics.</li>
      <li>Open dialogue with experts and educators.</li>
      <li>AI = not just a tool but a way to boost <i>inclusivity, collaboration, and communication</i>.</li>
      <li>Bonus: great networking + feedback on our own work.</li>
    </ul>

    <p><b>What We Gained</b></p>
    <ul>
      <li>Skills in <b>prompt design</b>.</li>
      <li>Exposure to new AI tools for education.</li>
      <li>Clearer view of AI opportunities & risks.</li>
      <li>Reflection: AI can support our creativity, communication, and content development.</li>
    </ul>

  </div>
  ),
};
import "./pfsbw-edu.css"
import "./shared.css"

export const PFSBwInclu = {
  id: 9,
  title: "PFSB Workshop",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/pfsb/bg.webp",
  background: "",
  description: (
    <div className="pfsb-edu-wrap">

      <div className="section pfsb-edu-row1" style={{ paddingBottom: "150px" }}>
        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-1.webp" alt="Introduction" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_dark">
              <p>On March 28 (2025) iGEM Ioannina organised a hands-on workshop on <b>AlphaFold</b> and <b>PyMOL</b> for the <b>3rd Panhellenic Student Conference of Bioscientists</b>. Beyond technical training, the team intentionally designed and delivered the event to be inclusive — lowering barriers for novices, neurodivergent learners, and participants with limited digital experience. All workshop materials and media were prepared in multiple accessible formats and the curriculum was iteratively refined through expert consultation and rehearsal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section pfsb-edu-row2" style={{ marginTop: "-140px", paddingBottom: "50px" }}>
        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-2.webp" alt="Organization" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_light">
              <p>Our primary pedagogical goal was to help bioscience students integrate structural-biology tools into their research by combining conceptual framing with practical, guided exercises. Parallel to that, we set clear inclusivity goals:</p>
              <ul>
                <li>make learning accessible across varied backgrounds and learning styles,</li>
                <li>provide multiple content formats (visual, textual, auditory), and</li>
                <li>allow flexible pacing and accommodations (extended time, step-by-step guides, and contact points for support).</li>
                <li>This dual focus (education + inclusivity) guided every design decision for the workshop.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section pfsb-edu-row3" style={{ paddingBottom: "150px" }}>
        <div className="title-row title-img-left" style={{ paddingLeft: "300px" }}>
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-3.webp" alt="Implementation" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-span text_color_dark">
              <p>We began with a preparatory meeting with Professor Charalambos Stamatis and Dr. Vasiliki-Michaela Patila to: (a) confirm that course materials could be reused with permission, and (b) co-design an inclusive, biologically-focused protocol. Their recommendations shaped the progressive learning curve, the balance between concept and hands-on practice, and the decision to prioritise biological insights over algorithmic complexity to remain relevant to our audience. When a new AlphaFold version changed interface and internals, we consulted Dr. Patila again and revised the plan to ensure the updated tool remained accessible to novices.</p>
            </div>
            <div className="image-span">
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/pfsb/image-1.webp"
                alt="PFSB Worksohp for Alphafold"
                style={{ width: "80%", paddingLeft: "50px" }}
              />
            </div>
            <div className="content-full">
              <img
                className="tagline-img tagline-right"
                src="https://static.igem.wiki/teams/5684/wikipics/education/pfsb/tagline-1.webp"
                alt="Worksohp delivery."
              />
            </div>

            <div className="content-full">
              <p>To reduce startup friction and support diverse learners, we produced and distributed the following resources ahead of the workshop:</p>
              <ul>
                <li>Installation guides (step-by-step, OS-specific) with screenshots and troubleshooting tips;</li>
                <li>Captioned tutorial videos for AlphaFold and PyMOL, each with searchable transcripts and short “chapter” markers so learners can jump to specific sections;</li>
                <li>Easy-read summaries (one-page) and plain-language bullet lists outlining learning goals and expected outcomes;</li>
                <li>Ready-to-use protein structure files and datasets to avoid time wasted on data prep;</li>
                <li>Accessible PDFs with large sans-serif fonts, high contrast palettes, and icons;</li>
                <li>Alt text and descriptive metadata for all images;</li>
                <li>Pauseable media and strictly no autoplay, plus clear instructions on how to request alternative formats or assistance.</li>
              </ul>
              <p>We also published a short accessibility statement with a named contact for accommodation requests (e.g., extended time, one-to-one support, or alternative file formats).</p>
              <p><b>Mock Session & Iteration</b></p>
              <p>A week before the conference we ran a full internal mock session. This rehearsal:</p>
              <ul>
                <li>identified timing bottlenecks and segments needing additional scaffolding,</li>
                <li>surfaced participant questions the team hadn’t anticipated (leading to expanded FAQ material), and</li>
                <li>clarified roles and transitions among instructors to reduce event-day stress.</li>
                <li>The mock run effectively served as user testing for clarity and pacing; feedback was incorporated immediately (more explicit subheadings, extra practice exercises, and clearer slide labels).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section pfsb-edu-row4">
        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-4.webp" alt="Outcomes & Results" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="image-span text_color_light">
              <p>We collected quantitative and qualitative feedback via an exit questionnaire. Key results:</p>
              <ul>
                <li>Theoretical Introduction: 82.6% rated it “Very clear.”</li>
                <li>Hands-On Exercises: 73.9% found them “Very useful.”</li>
                <li>Interactivity: 56.5% rated interactivity “Very effective.”</li>
                <li>Q&A: 95.7% felt their questions were fully addressed.</li>
                <li>Overall satisfaction: 3.0 / 5 (participants noted desire for deeper modules and longer duration).</li>
              </ul>
            </div>

            <div style={{ gridColumn: "span 2" }}></div>

            <div className="image-span text_color_light">
              <p>From an inclusivity perspective:</p>
              <ul>
                <li>Easy-read and transcript downloads were substantial, indicating demand for alternative formats.</li>
                <li>Several requests came in from schools and community groups for follow-up introductory sessions — evidence of broader accessibility impact.</li>
                <li>Feedback from the mock rehearsal improved clarity for lower-experience learners, as reported in the exit comments.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="title-row title-img-center">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-5.webp" alt="Why is it important?" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-full text_color_dark">
              <p>The workshop demonstrated that inclusive design increases reach and learning effectiveness. Concrete next steps include:</p>
              <li>develop a two-tiered series (introductory + advanced) to accommodate depth for engaged learners while keeping entry points accessible,</li>
              <li>codify and publish an Accessibility & Inclusivity Checklist (installation guides, accessible media, easy-read handouts, contact for accommodations) so future workshops are turnkey,</li>
              <li>run targeted sessions for under-represented groups (schools, elder-care programmes, neurodiverse learner groups) with tailored pacing and support, and</li>
              <li>continue iterative user testing with diverse participants to refine materials and delivery.</li>
            </div>
          </div>
        </div>

        <div className="title-row title-img-left">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/title-6.webp" alt="What we gain" />
        </div>
        <div className="content">
          <div className="content-grid">
            <div className="content-span text_color_light">
              <p>The workshop showed that a structured teaching flow and inclusive design significantly improved learning and engagement. Accessibility measures such as transcripts, easy-read guides, and flexible pacing extended our reach to diverse learners and even generated requests for follow-up sessions. Through expert input, rehearsal, and iteration, we built a scalable model that positions iGEM IOANNINA as a driver of accessible bioscience education.</p>
            </div>
            <div className="image-span">
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/education/pfsb/image-2.webp"
                alt="PFSB Worksohp for Alphafold"
                style={{ width: "100%", marginTop: "50px" }}
              />
            </div>
            <div className="content-full">
              <img
                className="tagline-img tagline-right"
                src="https://static.igem.wiki/teams/5684/wikipics/education/pfsb/tagline-2.webp"
                alt="Worksohp delivery."
              />
            </div>
          </div>
        </div>
      </div>

    </div>),
  adhdText: (
    <div className="shared-adhd-text-inclu">
      <p>
      <b>Introduction</b>
      <ul>
        <li><b>Event</b>: Hands-on AlphaFold + PyMOL workshop</li>
        <li><b>Occasion</b>: 3rd Panhellenic Student Conference of Bioscientists (March 28, 2025)</li>
        <li><b>Goal</b>: Teach structural biology tools while <b>ensuring everyone can fully participate</b></li>
        <li>Audience included:</li>
          <ul>
            <li>Beginners with little to no experience</li>
            <li>Neurodiverse learners</li>
            <li>Participants with limited access to technology</li>
          </ul>
      </ul>

      <b>Organization</b>
      <ul>
        <li>Collaborated with <b>Prof. Charalambos Stamatis</b> and <b>Dr. Vasiliki-Michaela Patila</b></li>
        <li>Designed a <b>progressive learning curve</b>:</li>
          <ul>
            <li>Start simple → gradually add complexity</li>
            <li>Focus on <b>biological meaning</b>, not just technical steps</li>
          </ul>
          <li>Adjusted materials after a <b>new AlphaFold update</b> to keep the session relevant and accessible</li>
          <li>Accessibility measures planned from the start:</li>
          <ul>
            <li>Step-by-step guides with images</li>
            <li>Captioned videos & searchable transcripts</li>
            <li>Ready-to-use datasets to save time</li>
            <li>Large-font, high-contrast PDFs</li>
          </ul>
      </ul>

      <b>Implementation</b>
      <ul>
        <li><b>Pre-event mock session</b> in Ioannina:</li>
          <ul>
            <li>Theoretical introduction – clear, simple explanations</li>
            <li>Live demonstration – showing key steps in real time</li>
            <li>Hands-on practice – small groups & one-to-one help</li>
            <li>Open Q&A – free space for questions</li>
          </ul>
        <li><b>Workshop structure on the day</b>:</li>
          <ul>
            <li>Beginners with little to no experience</li>
            <li>Neurodiverse learners</li>
            <li>Participants with limited access to technology</li>
          </ul>
          <li>Accessibility during delivery:</li>
          <ul>
            <li>Printed & digital handouts</li>
            <li>Visible schedule and time cues</li>
            <li>Dedicated accessibility contact available</li>
          </ul>
      </ul>

      <b>Outcome and Results</b>
      <ul>
        <li>Feedback highlights:</li>
          <ul>
            <li>82.6% → Theoretical part was <b>very clear</b></li>
            <li>73.9% → Hands-on session <b>very useful</b></li>
            <li>95.7% → All questions were fully answered</li>
          </ul>
        <li>Easy-read materials & transcripts were <b>heavily used</b></li>
        <li>Several schools and groups asked for <b>follow-up workshops</b></li>
        <li>Participants requested <b>longer sessions and deeper content</b></li>
      </ul>

      <b>Why This Is Important</b>
      <ul>
        <li><b>Accessibility opens doors</b> for diverse learners</li>
        <li>Everyone, regardless of skill level or background, could engage and learn</li>
        <li>Builds a <b>community where all voices are heard</b>, fostering innovation and collaboration</li>
      </ul>

      <b>What We Gained</b>
      <ul>
        <li>Experience creating <b>inclusive educational events</b></li>
        <li>A framework for future <b>workshops aimed at underrepresented groups</b></li>
        <li>Greater understanding of how accessibility <b>strengthens science communication</b></li>
        <li>A stronger belief that <b>science should be open to all</b></li>
      </ul>
      </p>
    </div>

  ),
};
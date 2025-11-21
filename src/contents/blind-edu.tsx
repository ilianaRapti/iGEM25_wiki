import "./blind.css"

export const BlindEdu = {
  id: 15,
  title: "Ioannina's Association of the Blind",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-cover-bg.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/blind-association/blind-bg-inclu.webp",
  description: (
    <div className="blind-intro-section-inclu">
      <div className="blind-intro-text-container-inclu">
        {/* Introduction section */}
        <p>Education must be accessible to all, including those with visual impairments. This is why our visit to the <b>Association of the Blind of Ioannina</b> was designed to provide <b>inclusive STEM education</b>, bringing synthetic biology and our project to a community often excluded from scientific outreach.</p>

        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/6.webp"
          alt="introduction"
          className="intro-blind-inclu-but"
        />
      </div>

      {/* Organization section */}
      <div className="blind-org-section-inclu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/7.webp"
          alt="Organization"
          className="org-blind-inclu-but"
        />
        <div className="blind-org-text-container-inclu">
          <p>We developed <b>a specialized presentation</b> that emphasized clear verbal descriptions and avoided visual dependency. We also created two children's books in Braille to explain our project through storytelling. These books targeted younger audiences but were equally valuable for adults, providing an accessible and engaging introduction to our research.</p>
        </div>
      </div>

      {/* Implementation section */}
      <div className="blind-impl-section-inclu">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/8.webp"
          alt="Organization"
          className="impl-blind-inclu-but"
        />
        <div className="blind-impl-text-container-inclu">
          <p>During the visit, we introduced iGEM, our team and our project. We presented the Braille books to the president of the Association, who was impressed by their quality and descriptive nature.
            <p>We donated both books so they could <b>be shared widely within the community.</b></p>
            Additionally, we planned to record a <b>podcast</b> with the president, extending the educational impact by discussing inclusivity and equal access to science.</p>
        </div>
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-img-collab1.webp"
          alt="team at the association"
          className="impl-blind-inclu-img"
        />
      </div>

      {/*Outcomes & results*/}
      <div className="blind-outc-section-inclu-conf">
        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
          alt="Outcomes&Results"
          className="outc-blind-inclu-but"
          style={{top: "77rem"}}
        />
        <div className="blind-outc-text-container-inclu" style={{top: "21rem"}}>
          <p>The visit achieved its goals:</p>
          <ul>
            <li>Community members gained an <b>understanding of synthetic biology</b> and our environmental project.</li>
            <li>The Braille books will continue to <b>educate visually impaired youth.</b></li>
            <li>The upcoming podcast will reach <b>even broader audiences.</b></li>
          </ul>

        </div>


        {/* Why is it important section */}
        <div className="blind-impo-section-inclu-conf">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/10.webp"
            alt="Important"
            className="impo-blind-inclu-but"
          />
          <div className="blind-impo-text-container-inclu">
            <p>This initiative shows how <b>inclusive educational outreach</b> can break barriers. By making science accessible, we promote equal participation and inspire individuals to engage with research and environmental issues.</p>
          </div>
          <div className="ref-blind-inclu">
            <p>
              <ol>
                <a href="https://www.rickhansen.com/news-stories/blog/importance-braille-world-braille-day" target="_blank" rel="noopener noreferrer">
                  <b>Reference</b>
                </a>
              </ol>
            </p>
          </div>

        </div>
        {/* What did we gain section */}
        <div className="blind-gain-section-inclu-conf">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/11.webp"
            alt="What did we gain"
            className="gain-blind-inclu-but"
            style={{top: "104rem"}}
          />
          <div className="blind-gain-text-container-inclu"
          style={{top: "8rem", width: "47rem"}}>
            <p>Our team developed essential skills in <b>accessible science communication</b> and gained motivation to further expand our inclusive educational efforts. This experience will guide how we design future materials and outreach activities.</p>
          </div>
        </div>


      </div>

    </div>


  ),
  adhdText: (
  <div className="shared-adhd-text-inclu">

    <p><b>Introduction</b></p>
    <ul>
      <li>Goal: <b>educate</b> visually impaired individuals about synthetic biology and our project.</li>
    </ul>

    <p><b>Organization</b></p>
    <ul>
      <li>Designed a <b>presentation</b> tailored to a non-visual audience.</li>
      <li>Prepared <b>Braille children's books</b> to explain our project in a story format.</li>
      <li>Planned a <b>podcast</b> to expand reach and continue education.</li>
    </ul>

    <p><b>Implementation</b></p>
    <ul>
      <li>Presented iGEM and our project at the Association.</li>
      <li>Donated the Braille books for community use.</li>
      <li>Discussed future podcast collaboration with the president.</li>
    </ul>

    <p><b>Outcomes and Results</b></p>
    <ul>
      <li>Members gained a clear understanding of our work.</li>
      <li>Braille books will help teach younger audiences about science.</li>
      <li>Podcasts will expand educational impact.</li>
    </ul>

    <p><b>Why This Is Important</b></p>
    <ul>
      <li>Provides <b>equal access to STEM education</b>.</li>
      <li>Encourages inclusive participation in science.</li>
      <li>Builds awareness of environmental issues.</li>
    </ul>

    <p><b>What We Gained</b></p>
    <ul>
      <li>Experience in <b>designing accessible educational materials</b>.</li>
      <li>Stronger <b>public speaking and communication skills</b>.</li>
      <li>Motivation to continue <b>inclusive science education</b>.</li>
    </ul>
  </div>
  ),
};
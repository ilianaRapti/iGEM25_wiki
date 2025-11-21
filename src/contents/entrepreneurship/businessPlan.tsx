import "./businessPlan.css";
import "../../components/Accordion.tsx";
import { Accordion } from "../../components/Accordion.tsx";

const panelData = [
  {
    title:
      "Has the team discovered their first potential customers and identified any unmet needs not yet covered by other existing solutions?",
    content: (
      <>
        <div className="accordion-content">
          <p>
            Yes. Our team has already identified its first potential customers
            and secured two Letters of Intent: both with Greek Prefectures.
            These agreements highlight the urgency and the unmet needs our
            solution addresses and in addition highlight the current interest in
            our solution in the Greek market For the Prefecture, the pressing
            challenge is the preservation of plane (<i>Platanus</i>) trees,
            which are being devastated by <i>Ceratocystis platani</i>. Current
            measures—such as tree removal or repeated chemical treatments—are
            costly, disruptive, and ineffective at halting the pathogen’s
            spread. Beyond ecological loss, the Prefecture bears heavy financial
            burdens linked to reforestation, reduced tourism, and the erosion of
            cultural heritage. The unmet need is for a sustainable,
            non-invasive, and long-lasting treatment that safeguards both
            ecosystems and budgets.
            <img src="" />
            For farmers, fungal infections like citrus dieback create equally
            urgent challenges. Existing chemical fungicides require repeated
            applications, drive up costs, and face increasing regulatory
            restrictions within the EU. Farmers report growing frustration with
            the lack of durable, safe, and cost-effective alternatives. Their
            unmet need is for a reliable solution that reduces recurring
            expenses while protecting crop yields sustainably.
            <b>HaloCrops’ AMADRYAD</b> platform directly addresses these gaps.
            Our minimun viable product leverages the power of synthetic biology, delivering 
            antifungal funigcides that are eco-friendly, effective, and
            economically advantageous. Our deployment offers the potential of IP Licensing,
            training, while also exploring regional production solutions further
            ensuring self reliance and long-term impact. Through our first
            partnerships, we validate that HaloCrops is tackling real, urgent
            needs not met by existing solutions.
          </p>
          <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-graph.webp"
            style={{
              width: "50%",
              objectFit: "contain",
              alignSelf: "center",
            }}/>
        </div>
      </>
    ),
    className: "igem-criteria-text",
    buttonClassName: "igem-criteria-button",
    contentClassName: "igem-criteria-content",
  },
  {
    title:
      "Has the team shown that their solution is possible, scalable, and inventive?",
    content: (
      <>
        <div className="accordion-content">
          <p>
            HaloCrops demonstrates that its solution is possible ,
             by combining well-established technologies in a novel way.
            Our approach leverages CRISPR-Cas13d, to selectively target and
            destroy the fungal RNA. To ensure effective delivery, we use
            chitosan nanoparticles, a sustainable and low-cost material already
            validated for agricultural applications. Together, these components
            form a feasible technology that can be tested first in small-scale
            pilot trials on Platanus trees in Epirus, where 8,000 trees are
            immediately at risk.
            <br />
            <br />
            Scalability is built into our design: the flexibility our mechanism
            provides, means we can look to scale not only on the market of
            160.000 Platani trees, but also expand to different markets and
            plants such chestnut, citrus, pistachio, and olive. Chitosan
            production is inexpensive and can be scaled industrially, while
            CRISPR constructs are flexible, allowing rapid redesign for new
            pathogens without reinventing the delivery system. This positions
            HaloCrops as an economically viable and logistically deployable
            solution at regional, national, and European level, with appropriate approvals
            <br />
            <br />
            Our project is also inventive: it is the first to integrate
            Cas13d-based RNA targeting with eco-friendly nanoparticle delivery
            for tree protection, replacing chemical pesticides with precision
            targeting. This approach secures iconic and productive
            Mediterranean trees, contributes to biodiversity preservation, and
            aligns with EU goals for sustainable agriculture. By uniting
            biotechnology, nanomaterials, and ecological stewardship, HaloCrops
            offers a unique, forward-looking solution that is practical today,
            scalable tomorrow, and transformative for the future of plant
            protection.
          </p>
          <a href="#plan-middle">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/business-splan/drop-down-2.webp"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      </>
    ),
    className: "igem-criteria-text",
    buttonClassName: "igem-criteria-button",
    contentClassName: "igem-criteria-content",
  },
  {
    title:
      "Has the team outlined the skills, capabilities, and stakeholders required to be credible in developing their solution further?",
    content: (
      <>
        <div className="accordion-content">
          <p>
            HaloCrops has built a credible foundation for developing and scaling
            its solution by combining technical expertise, strategic
            partnerships, and strong governance. Our core team brings together
            skills in synthetic biology, plant pathology, molecular genetics,
            and nanotechnology, providing the capability to design, optimize,
            and test CRISPR-Cas13d constructs for fungal RNA targeting, as well
            as the development of eco-friendly chitosan nanoparticle delivery
            systems. 
            To accelerate development and ensure practical
            implementation, we have established active connections with multiple
            incubators, and activelylater  cultivated those relations, 
            which offer mentorship, regulatory guidance, access to
            pilot testing sites, and potential funding opportunities. These
            partnerships will allow us to refine our technology in real-world
            agricultural settings and build credibility with both scientific and
            commercial stakeholders. In addition, our board of directors-advisors
            consists of experienced professionals from biotechnology, agronomy,
            and sustainable enterprise, offering strategic oversight, industry
            insight, and guidance on scaling operations while navigating
            regulatory and market challenges. 
            By combining a skilled internal
            team with an extensive external network, HaloCrops ensures that
            every stage—from laboratory research to field deployment—is
            supported by both technical expertise and practical experience. This
            multi-layered approach not only strengthens our scientific and
            commercial credibility but also positions HaloCrops to engage
            effectively with municipalities, farmers’ associations, and
            environmental regulators.
          </p>
          <a href="#plan-middle" style={{ width: "100%" }}>
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/business-splan/drop-down-3.webp"
              className="igem-criteria-img"
            />
          </a>
        </div>
      </>
    ),
    className: "igem-criteria-text",
    buttonClassName: "igem-criteria-button",
    contentClassName: "igem-criteria-content",
  },
  {
    title:
      "Has the team considered the positive and negative long-term impacts of their fully developed solution?",
    content: (
      <>
        <div className="accordion-content">
          <p>
            HaloCrops has carefully considered both the positive and negative
            long-term impacts of our fully developed solution. On the positive
            side, our CRISPR-Cas13d and chitosan-based biocontrol system
            provides precise, environmentally friendly protection for iconic
            Mediterranean and European trees, reducing reliance on chemical
            pesticides. This supports biodiversity, improves soil and water
            quality, and safeguards culturally and economically important tree
            species such as Platanus, chestnuts, citrus, pistachios, and olives.
            A single-application, long-lasting treatment reduces labor and costs
            for farmers and municipalities, promoting sustainable agricultural
            practices and contributing to EU climate and ecological goals. By
            preventing the spread of devastating fungal pathogens, HaloCrops
            also helps secure food production, cultural heritage, and ecosystem
            resilience in the face of climate change.
            <br />
            On the negative side, we recognize potential risks associated with
            deploying such unique technology in natural environments, including
            off-target effects, ecological imbalances, or unintended
            interactions with non-target organisms. Thankfully, our toehold
            system and precise activation should limit such interactions Another
            possible challenge is socio-economic: the adoption of new biocontrol
            methods may face resistance from farmers accustomed to traditional
            pesticides or market barriers could slow uptake in regions with
            limited access to biotechnology. To mitigate these risks, we propose
            controlled pilot testing rigorous monitoring, modular CRISPR designs
            for rapid adjustment, and stakeholder engagement, including
            education and transparent communication with regulatory agencies and
            the public. By assessing both benefits and risks, HaloCrops
            demonstrates a proactive approach to sustainable innovation,
            balancing scientific advancement with ecological stewardship,
            societal responsibility, and market feasibility.
          </p>
        </div>
      </>
    ),
    className: "igem-criteria-text",
    buttonClassName: "igem-criteria-button",
    contentClassName: "igem-criteria-content",
  },
  {
    title:
      "Has the team presented logical product development plans with realistic milestones, timelines, resources, and risks?",
    content: (
      <>
        <div className="accordion-content">
          <p>
            HaloCrops has developed a logical and realistic product development
            plan that outlines milestones, timelines, resources, and potential
            risks. Our approach begins with laboratory validation of
            CRISPR-Cas13d constructs targeting fungal RNA, followed by
            optimization of chitosan nanoparticle delivery for stability and
            efficacy. 
            Pilot field trials on Platanus trees in Epirus are planned
            next, allowing us to assess real-world performance and environmental
            impact before scaling nationwide. Key milestones include construct
            design, nanoparticle formulation, in vitro testing on Ceratocystis
            molecules, controlled pilot trials, regulatory approval, and
            commercial deployment. Resource planning incorporates both technical
            expertise within our team and external support from incubators,
            strategic partners, and our board of directors.
          </p>
          <a href="https://static.igem.wiki/teams/5684/wikipics/business-splan/gnatt.webp" target="_blank">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/business-splan/gnatt.webp"
            className="igem-criteria-img"
          />
          </a>
          <p>
            The biggest challenge we faced in creating this plan was
            establishing a realistic timeline, given the strict regulations
            surrounding pesticides and genetically tampered organisms.
            Fortunately, our human resources and experienced board provided
            critical guidance on navigating regulatory pathways, identifying
            potential bottlenecks, and aligning development stages with approval
            processes. <b>Technical risks</b> include off-target effects of
            CRISPR-Cas13d and inefficient delivery via chitosan nanoparticles;
            these are mitigated through in silico guide RNA validation,
            extensive in vitro testing, pilot greenhouse trials, and optimized
            nanoparticle formulations. <b>Ecological risks</b> such as
            unintended impacts on local ecosystems or the development of
            pathogen resistance are addressed by conducting controlled field
            trials, monitoring non-target organisms, restricting initial
            deployment to high-risk zones, and rotating target sequences in
            CRISPR constructs. <b>Regulatory risks</b> from strict EU pesticide
            and GMO regulations are mitigated by early engagement with
            regulatory authorities, leveraging incubator guidance, and
            maintaining thorough documentation and transparent reporting.
            Finally, <b>market and adoption risks</b>—including potential
            resistance from farmers or municipalities—are managed through
            education, demonstrations, and communication of both environmental
            and economic benefits, beginning with high-visibility pilot projects
            to build credibility. For more information on our market risk
            mitigation strategy check out our Human Resources and our visits{" "}
            <b>to stakeholders in Epirus villages!</b>
          </p>
        </div>
      </>
    ),
    className: "igem-criteria-text",
    buttonClassName: "igem-criteria-button",
    contentClassName: "igem-criteria-content",
  },
];

export function BusinessPlan() {
  return (
    <>
      <div id="businessPlan-container">
        <div className="business-section" id="businessPlan-bar">
          <div id="businessPlan-title">
            <h2>About us</h2>
            <div id="businessPlan-toc">
              <a href="#igem-criteria" >Criteria</a>
              <a href="#plan" >Business Plan</a>
              <a href="#marketing-plan" >Marketing Plan</a>
              <a href="#board-of-directors" >Board of Directors</a>
              <a href="#businessPlan-status" >Recent Status</a>
            </div>
          </div>
        </div>
        <div className="business-section" id="businessPlan-top-texts">
          <div id="businessPlan-top-banner">
            <h3>
              "Success is not final; failure is not fatal: it is the courage to
              continue that counts.”
            </h3>
          </div>
          <div id="businessPlan-texts-1-to-4">
            <div className="businessPlan-text-with-number">
              <div className="number-circle">
                <p>1</p>
              </div>
              <div className="businessPlan-text">
                <p>
                  At the forefront of synthetic biology and agricultural
                  innovation, our iGEM team has transformed a bold scientific
                  idea into HaloCrops, a pioneering biotech startup with the
                  potential to reshape how we combat fungal diseases in trees
                  and crops. Leveraging an advanced CRISPR-Cas13d payload and
                  chitosan-based delivery systems, we are developing a flexible
                  anti fungal weapon, aimed at protecting iconic species such as the plane
                  tree (<i>Platanus orientalis</i>) and vital crops like citrus,
                  where traditional chemical methods often fall short.
                </p>
              </div>
            </div>
            <div className="businessPlan-text-with-number">
              <div className="number-circle">
                <p>2</p>
              </div>
              <div className="businessPlan-text">
                <p>
                  Through continuous engagement with foresters, farmers,
                  policymakers, and biotech experts, we identified a clear unmet
                  need: a sustainable, non-invasive, and cost-effective
                  antifungal treatment. This user-driven insight has guided our
                  development pathway and sharpened our value proposition,
                  ensuring strong alignment with market demands and ecological
                  priorities.
                </p>
              </div>
            </div>
            <div className="businessPlan-text-with-number">
              <div className="number-circle">
                <p>3</p>
              </div>
              <div className="businessPlan-text">
                <p>
                  Our entrepreneurial journey has been accelerated by mentorship
                  and incubation opportunities, including participation in
                  programs such as UOI Innovation Gennerator, Ideathon Ioannina
                  and Igem summer business school and workshops, where we refined our
                  commercialization strategy and prepared for early-stage
                  fundraising. With a structured roadmap, including a 48-month
                  cash flow model, initial CapEx/Opex estimates, and a
                  go-to-market strategy, HaloCrops is poised to advance from
                  proof-of-concept to deployment in collaboration with regional
                  stakeholders such as the Prefecture of Epirus.
                </p>
              </div>
            </div>
            <div className="businessPlan-text-with-number">
              <div className="number-circle">
                <p>4</p>
              </div>
              <div className="businessPlan-text">
                <p>
                  HaloCrops stands at the intersection of science,
                  sustainability, and social responsibility, with the vision of
                  becoming an adaptable, flexible biotech company capable of addressing
                  fungal threats across a wide range of crops and trees,
                  starting with the emblematic plane trees of Greece.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="business-section" id="igem-criteria">
          <h2>iGEM Criteria</h2>
          <p>
            Ease of access is important, especially to judges, so we have
            attempted to summarize our work within the iGEM Rubric questions.
            However, we strongly recommend giving our entire work a shot!
          </p>
          <Accordion panels={panelData} id="igem-criteria-accordion" />
        </div>
        <div className="business-section" id="plan">
          <div className="business-section-banner" id="plan-banner">
            <div className="business-section-separator" id="plan-separator" />
            <div className="business-plan-quotes" id="plan-quote">
              <h3>“Plans are worthless, but planning is everything.”</h3>
            </div>
          </div>
          <div id="plan-content">
            <div id="plan-top">
              <div className="section-title business-plan-title right-title">
                <h2>Business Plan</h2>
              </div>
              <div className="plan-panel">
                <p>
                  For our business, we were lucky to secure a partnership with
                  AI B Value, a fellow startup  which has created a unique ai
                  specifically for business plan creation! Through this ai the
                  materialization and correction of our extensive work into an clean business plan
                  became easier and faster than we could have anticipated.
                </p>
              </div>
              <iframe
                id="business-plan-iframe"
                src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-plan-final-4.pdf"
                style={{ width: "90%", height: "70vh", padding: "1rem" }}
              />
              <div style={{
                display: "flex",
                flexDirection: "column",
                width: "10%",
                height: "100%",
              }}>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/aib.avif" />
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/ob.avif" 
                    style={{
                      backgroundColor: "black",
                    }}/>
              </div>
            </div>
            <div id="plan-middle">
              <div className="section-title business-plan-title">
                <h2>Pitch Deck</h2>
              </div>
              <iframe
                src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-plan.pdf"
                style={{
                  width: "90%",
                  height: "50vh",
                  padding: "1rem",
                  alignSelf: "center",
                }}
              />
              <div className="plan-panel" id="pitch-deck-panel">
                <p>
                  One of the most important things that was needed for our
                  presentation inside the Innovation Generator incubator was an
                  stand out pitch deck. Luckily our competition advisor Marina Boltsi along
                  with the rest of the team of Mantis beyond innovations where
                  there to assist.
                </p>
              </div>
            </div>
            <div id="plan-bottom">
              <div className="section-title business-plan-title right-title">
                <h2>Financial Statements</h2>
              </div>
              <div className="plan-panel" id="financial-statements-panel">
                <p>
                 One of the first steps in the creation of our monetization policy, was the creation of rock-solid
                 financial statements. With and NPV of 1.5 million an ROI of 300% and an IRR of 35% we are
                 confident and ready to continue!  
                </p>
              </div>
                <div id="financial-statements-images">
                  <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-graph-1.webp"/>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-graph-2.webp"/>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-graph-3.webp"/>
                  <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/business-graph-4.webp"/>
                </div>
            </div>
          </div>
        </div>
        <div className="business-section" id="marketing-plan">
          <div className="business-section-banner" id="marketing-plan-banner">
            <div
              className="business-section-separator"
              id="marketing-plan-separator"
            />
            <div className="business-plan-quotes" id="marketing-plan-quote">
              <h3>
                "In our factory, we make lipstick. In our advertising, we sell
                hope."
              </h3>
            </div>
          </div>
          <div className="marketing-plan-content">
            <div id="marketing-plan-top">
              <div className="section-title" id="marketing-plan-title">
                <h2>Marketing Plan</h2>
              </div>
              <iframe
                src="https://static.igem.wiki/teams/5684/wikipics/business-splan/marketing-plan-final.pdf"
                style={{ width: "70%", height: "70vh", padding: "1rem" }}
              />
            </div>
            <div id="marketing-plan-bottom">
              <div className="section-title" id="marketing-plan-title-2">
                <h2>Investor flyers</h2>
              </div>
              <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/investors-flyers.webp" />
              <div className="plan-panel" id="investor-flyers-panel">
                <p>
                 For our time in the 100th International Exhibition of Thessaloniki we created some flyers 
                 to share and discuss with investors
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="business-section" id="board-of-directors">
          <div className="section-title" id="board-of-directors-title">
            <h2>Board of Directors</h2>
          </div>
          <div className="business-section-banner">
            <div className="business-section-separator" />
            <div className="business-plan-quotes" id="board-of-directors-quote">
              <h3>
                "If you want to go fast, go alone; if you want to go far, go
                together"
              </h3>
            </div>
            <p id="board-of-directors-text">
              An honorable mention to our board of advisors and directors. A
              diverse cast of venture capital professionals biotech startup
              specialists, communication experts, and scientist- entrepreneurs
            </p>
          </div>
          <div
            className="business-section-content"
            id="business-board-of-directors"
          >
            <div id="board-of-directors-images">
              <figure>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/board-of-directors-1.webp" />
                <figcaption>Andreas Klapsis</figcaption>
                <p>
                  One of our oldest members on the board, upon hearing our
                  passion in the Panorama of Entrepreneurship event, he was eager
                  to join the team and provide his services. A man of many
                  talents, who was always there to provide anything the business
                  team needed at any time.
                  <br/>
                  Responsible,  for our contact with Syngenta and our successful
                  pitch, our contact with AI B value, and our exclusive
                  limited access to their business plan AI demo, and our entry
                  into startup week Greece with the mantle of Ioannina city.
                </p>
              </figure>
              <figure>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/board-of-directors-2.webp" />
                <figcaption>Aggelos Vasileiou</figcaption>
                <p>
                  Angelos Vasileiou is the Tech Lead at Mantis Beyond Innovation,
                  a Greek innovation-tech company. He works on building and
                  supporting the firm’s innovation management software and leads
                  technology for open-innovation programs, hackathons, and
                  startup initiatives. Through his role, he combines his
                  background in athletics and persistence with entrepreneurship,
                  focusing on turning ideas into execution and enabling
                  organizations to innovate effectively. Responsible for a
                  lot of rough feedback which greatly improved our ability to
                  pitch and the quality of our business plan.
                </p>
              </figure>
              <figure>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/board-of-directors-3.webp" />
                <figcaption>Marina Boltsi</figcaption>
                <p>
                  Marina Boltsi is a biotechnologist (MSc, Cell & Gene Therapies)
                  based in Athens who works at Mantis Beyond Innovation. She
                  applies her life-sciences background to support Mantis’s
                  innovation programs—scouting and evaluating biotech startups
                  and helping translate scientific ideas into practical projects.
                  Our esteemed mentor in the Innovation Generator, she continued
                  advising us and providing valuable biotech input.
                </p>
              </figure>
              <figure>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/board-of-directors-4.webp" />
                <figcaption>Vasilis Athanasiadis</figcaption>
                <p>
                  Vasilis Athanasiadis is the Business Creation & Strategy
                  Manager at Mantis Beyond Innovation. He focuses on designing
                  and implementing open-innovation programs, connecting startups
                  with corporations, and shaping business strategies in areas
                  like sustainability and fintech.
                </p>
              </figure>
              <figure>
                <img src="https://static.igem.wiki/teams/5684/wikipics/business-splan/board-of-directors-5-new.webp" />
                <figcaption>Stefanos Tychiros</figcaption>
                <p>
                   Stefanos Tychiros played an essential role in the development and refinement of our business plan.
                   He provided invaluable insights and detailed feedback that greatly enhanced the overall structure
                   and clarity of the project, ensuring its completeness and professionalism.
                   Furthermore, he conducted a thorough preliminary analysis of the financial data,
                   identifying key trends and potential improvements. His continuous guidance and
                   constructive support were instrumental in helping the team finalize a well-rounded 
                   and coherent business strategy.  

                </p>
              </figure>
            </div>
          </div>
        </div>
        <div className="business-section" id="businessPlan-status">
          <div id="businessPlan-status-text">
            <b>Most recent status</b>
            <p>
              After our Honorary distinction in the UOI Innovation Generator, we
              secured exclusive guidance and mentoring in our future business
              endeavors. The team has received an letter of intent from the
              Prefectures of Epirus, who have donated 20 thousand euros for this
              research already and are on pins and needles awaiting our progress
              and our eventual product.
            </p>
          </div>
          <div id="status-files">
                <iframe src="https://static.igem.wiki/teams/5684/wikipics/business-splan/memorantum.pdf"
                  style={{ height: "70vh", width: "45%" }}/>
                <iframe src="https://static.igem.wiki/teams/5684/wikipics/business-splan/letter-of-support.pdf"
                  style={{ height: "70vh", width: "45%" }} />
          </div>
          
        </div>
      </div>
    </>
  );
}

import {
  // Singles
  Home,
  Quiz,
  About,

  // Project
  Description,
  SafetyAndSecurity,
  Entrepreneurship,
  Implementation,
  Contribution,
  Graphics,

  // Wet Lab
  Engineering,
  Results,
  Idea,
  Design,
  Experiments,
  Parts,
  Materials,

  // Dry Lab
  Software,
  Model,

  // Human Practices
  HumanPractices,
  IntegratedHumanPractices,
  Education,
  Inclusivity,
  ScienceCommunication,
  Collaboration,

  // Team
  Members,
  Attribution,
  Sponsors ,

  BusinessPlan,
  OurJourney,
  Competitions
} from "./contents";




interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
  navbar: boolean | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  source_header: string | undefined;
  source_navbar: string | undefined;
  source_bg: string | undefined;
  navbar: boolean | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "We are iGEM IOANNINA 2025!",
    source_header: "",
    source_navbar: "",
    source_bg: "",
    navbar: true
  },
  
  /*for our quiz*/
  {
    name: "QUIZ",
    title: "Find what you're looking for!",
    path: "/quiz",
    component: Quiz,
    lead: "Find what you're looking for and make your browsing experience in our wiki  better.",
    source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-quiz.webp",
    source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/quiz.webp",
    source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
    navbar: true
  },

  {
    name: "Why it Matters",
    title: "Why it Matters",
    path: "/about",
    component: About,
    lead: "Learn more about iGEM.",
    source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-about.webp",
    source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/about.webp",
    source_bg: "https://static.igem.wiki/teams/5684/wikipics/about-whyitmatters/why-bg.webp",
    navbar: true
  },

  {
    name: "Project",
    folder: [
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-description.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/description.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/description/description-bg.webp",
        navbar: true
      },
      {
        name: "Safety and Security",
        title: "Safety and Security",
        path: "/safety-and-security",
        component: SafetyAndSecurity,
        lead: "Detail the safety and security considerations of your project, adressing potential risks and outlining the measures taken to mitigate them.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-safety-security.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/safety.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/safety-bg.webp",
        navbar: true
      },
      {
        name: "Implementation",
        title: "Implementation",
        path: "/implementation",
        component: Implementation,
        lead: "Describe how your project is implemented and how you plan to use it in the future.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-implementation.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/implementation.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams and document it on this page.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-contribution.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/contribution.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Graphics",
        title: "Graphics",
        path: "/graphics",
        component: Graphics,
        lead: "graphics text [...]",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-graphics-new.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/graphics.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/graphics/graphics-bg-new1.webp",
        navbar: true
      },      
    ],
    navbar: true
  },

  {
    name: "Wet Lab",
    folder: [

      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-engineering.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/engineering.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-results.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/results.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Idea",
        title: "Idea",
        path: "/idea",
        component: Idea,
        lead: "Idea text [...]",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-idea-new.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/idea.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Design",
        title: "Design",
        path: "/design",
        component: Design,
        lead: "Design text [...]",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-design.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/design.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your project. It is designed to provide sufficient information for other teams to replicate our work.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-experiments.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/experiments.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Parts",
        title: "Parts",
        path: "/parts",
        component: Parts,
        lead: "Parts text [...]",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-parts.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/parts.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Materials",
        title: "Materials",
        path: "/materials",
        component: Materials,
        lead: "Materials text [...]",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-materials.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/material.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/materials/materials-bg2.webp",
        navbar: true
      },      
    ],
    navbar: true
  },

  {
    name: "Dry Lab",
    folder: [
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-software.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/software.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-model.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/model.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
    ],
    navbar: true
  },

  {
    name: "Human Practices",
    folder: [
      {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        lead: "", 
        component: HumanPractices,
        source_header: "",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/humans.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-entrepreneurship.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/enterpreneuship.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/entrepreneurship/entrepreneurship-links-bg.webp",
        navbar: true
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-inclusivity.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/inclusivity.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Integrated Human Practices",
        title: "Integrated Human Practices",
        path: "/integrated-human-practices",
        component: IntegratedHumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/integrated/header.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/human.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-education.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/education.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Science Communication",
        title: "Science Communication",
        path: "/science-communication",
        component: ScienceCommunication,
        lead: "The iGEM Wiki should be a safe space for all members of the iGEM community to share information, knowledge, and ideas.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-communication.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/science-communication.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Collaborations",
        title: "Collaborations",
        path: "/collaborations",
        component: Collaboration,
        lead: "Explain the design of your project, from the initial concept to the final product.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-collaboration.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/collaboration.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },

    ],
    navbar: true
  },

  {
    name: "Team",
    folder: [
      {
        name: "Members",
        title: "Meet Our Team",
        path: "/team",
        component: Members,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-members-new.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/members.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Attribution",
        title: "Attribution",
        path: "/attributions",
        component: Attribution,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-attribution.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/attribution.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
      {
        name: "Sponsors",
        title: "Sponsors",
        path: "/sponsors",
        component: Sponsors,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-sponsors-new.webp",
        source_navbar: "https://static.igem.wiki/teams/5684/wikipics/navbar-icons/sponsors.webp",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: true
      },
    ],
    navbar: true
  },
  {
    name: "other",
    folder: [
      {
        name: "Business Plan",
        title: "Business Plan",
        path: "/entrepreneurship/business-plan",
        component: BusinessPlan,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-business-plan.webp",
        source_navbar: "",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: false
      },
      {
        name: "Our Journey",
        title: "Our Journey",
        path: "/entrepreneurship/our-journey",
        component: OurJourney,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-our-journey.webp",
        source_navbar: "",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: false
      },
      {
        name: "Competitions",
        title: "Competitions",
        path: "/entrepreneurship/competitions",
        component: Competitions,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source_header: "https://static.igem.wiki/teams/5684/wikipics/headers/header-competitions.webp",
        source_navbar: "",
        source_bg: "https://static.igem.wiki/teams/5684/wikipics/universal-bg.webp",
        navbar: false
      }
    ],
    navbar: false
  }
];

export default Pages;

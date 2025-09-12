import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  SafetyAndSecurity,
  Members,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainability,
  Sponsors
} from "./contents";
import Quiz from "./contents/quiz";
import Graphics from "./contents/graphics";




interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  source: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Welcome!",
    path: "/",
    component: Home,
    lead: "We are iGEM IOANNINA 2025!",
    source: "",
  },
  
  /*for our quiz*/
  {
    name: "QUIZ",
    title: "Find what you're looking for!",
    path: "/quiz",
    component: Quiz,
    lead: "Find what you're looking for and make your browsing experiencein our wiki  better.",
    source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-quiz.webp"
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
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-members.webp"
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-attributions.webp"
      },
      {
        name: "Sponsors",
        title: "Sponsors",
        path: "/sponsors",
        component: Sponsors,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-sponsors.webp"
      },
    ],
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
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-project-description.webp"
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-engineering.webp"
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-results.webp"
      },
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams and document it on this page.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-contribution.webp"
      },
    ],
  },
  {
    name: "Wet Lab",
    folder: [
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your project. It is designed to provide sufficient information for other teams to replicate our work.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-experiments.webp"
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        lead: "This serves as a chronological record of your team's progress throughout the season. It documents your daily activities, experiments, discussions, and decisions.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-notebook.webp"
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-measurement.webp"
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
        lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-plant.webp"
      },
      {
        name: "Safety and Security",
        title: "Safety and Security",
        path: "/safety-and-security",
        component: SafetyAndSecurity,
        lead: "Detail the safety and security considerations of your project, adressing potential risks and outlining the measures taken to mitigate them.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-safety-and-security.webp"
      },
    ],
  },
  {
    name: "Dry Lab",
    folder: [
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-model.webp"
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-software.webp"
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-hardware.webp"
      },
    ],
  },
  {
    name: "Engagement",
    folder: [
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-entrepreneurship.webp"
      },
      {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-human-practices.webp"
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-education.webp"
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-inclusivity.webp"
      },
      {
        name: "Sustainability",
        title: "Sustainability",
        path: "/sustainability",
        component: Sustainability,
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
        source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-sustainability.webp"
      },
    ],
  },

  /*for graphics*/
  {
    name: "Graphics",
    title: "Graphics",
    path: "/graphics",
    component: Graphics,
    lead: "graphics text [...]",
    source: "https://static.igem.wiki/teams/5684/wikipics/headers/header-graphics.webp"
  },
];

export default Pages;

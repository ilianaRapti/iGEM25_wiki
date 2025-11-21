import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "../inclusivity.css";
import "./fairytails.css";
import "../events-human/shared.css"
import "./memCards.css"


export const STORIES = [
  "The Forest Of Dreams",
  "The Girl And The Plane Tree",
  null
] as const;

export const STUBSECTIONS = [
  "menu",
  "fairytails",
  "platyolis",
  "legends",
  "fairytails-inclusivity",
  "braille",
  "signlanguage",
  "audiobook"
] as const;

import theForestOfDreams from "./forestofdreams";
import theGirlAndThePlaneTree from "./theGirlAndThePlaneTree";
import languageButtons from "./lang-buttons";



type StoryName = typeof STORIES[number];
type SubSection = typeof STUBSECTIONS[number];

export function Fairytails({ goBack }: { goBack: () => void }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [subSection, setSubSection] = useState<SubSection>("menu");
  const [activeStory, setActiveStory] = useState<StoryName>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [showLanguages, setShowLanguages] = useState(false);

  // Βάλε το hook αυτό μαζί με τα υπόλοιπα useState, στην αρχή του component:
  const [selectedAudioLang, setSelectedAudioLang] = useState<string | null>(null);


  // url handling
  const setUrlValue = (key: string, value: string | null) => {        /* sets the value of the search parameter key          */
    const newParams = new URLSearchParams(searchParams);              /* for example key = "section" value = "menu" :        */
    /* "?section=menu" will be added to the end of the url */
    if (value === null) {                                             /* if value = null key is cleared from the url         */
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setSearchParams(newParams);
  };

  useEffect(() => {                                                   /* reads the params of "sub", "story" and "lang"        */
    const subParam = searchParams.get("sub");                         /* from url and sets the corresponding state variables  */
    const selectedSect: SubSection = STUBSECTIONS.includes(           /* for example if "?pdf=FleetwoodMac" is in the url     */
      subParam as SubSection                                          /* the pdfUrl state will become "FleetwoodMac"          */
    )                                                                 /* the section state is defaulted to "menu" if invalid  */
      ? (subParam as SubSection)
      : "menu";
    setSubSection(selectedSect);

    const actStoryParam = searchParams.get("story");
    const selectedStory: StoryName = STORIES.includes(
      actStoryParam as StoryName
    )
      ? (actStoryParam as StoryName)
      : null;
    setActiveStory(selectedStory);

    const langParam = searchParams.get("lang");
    setSelectedLanguage(langParam);

    const showLangParam = searchParams.get("langs");
    const selShowLangParam = showLangParam != null ? true : false;
    setShowLanguages(selShowLangParam);
  }, [searchParams]);

  const handleSelect = (key: string, value: string | null) => {       /* call this to select a new state for a variable from */
    if (key == "sub") {                                               /* code (onClick for example)                          */
      const slectedPage: SubSection = STUBSECTIONS.includes(          /* also use this if you want to clear a state in case  */
        value as SubSection                                           /* some states don't work nicely together, you can add */
      )                                                               /* the code to clear here upon selection               */
        ? (value as SubSection)
        : "menu";
      setSubSection(slectedPage);
      setUrlValue(key, value);
    }
    else if (key == "story") {
      const selectedStory: StoryName = STORIES.includes(
        value as StoryName
      )
        ? (value as StoryName)
        : null;
      setActiveStory(selectedStory);
      setUrlValue(key, value);
    }
    else if (key == "lang") {
      setSelectedLanguage(value);
      setUrlValue(key, value);
    }
    else if (key == "langs") {
      const selShowLangParam = value == 'true' ? true : false;
      setShowLanguages(selShowLangParam);
      setUrlValue(key, value);
    }
  };

  /* all fairytales with images for each language */
  const storyImages: Record<string, Record<string, string[]>> = {
    "The Forest Of Dreams": theForestOfDreams,
    "The Girl And The Plane Tree": theGirlAndThePlaneTree,
  };

  //SubMenu 
  if (subSection === "menu") {
    return (
      <div className="stories-list">
        <h2 className="stories-title">Fairytales et al.</h2>
        <div className="story-cards-wrapper">
          <div className="story-card" onClick={() => handleSelect("sub", "fairytails")}>
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/fairytasil4-but.webp"
              alt="Fairytails"
            />
          </div>
          <div className="story-card" onClick={() => handleSelect("sub", "platyolis")}>
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/platyolis-1but.webp"
              alt="Platyolis Game"
            />
          </div>
          <div className="story-card" onClick={() => handleSelect("sub", "legends")}>
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/lab-leg-but3.webp"
              alt="Lab Legends"
            />
          </div>
        </div>
        <button className="back" onClick={() => {
          setSubSection("menu");
          setActiveStory(null);
          setSelectedLanguage(null);
          setShowLanguages(false);
          goBack();
        }}>Back</button>
      </div>
    );
  }

  if (subSection === "fairytails") {
    if (!activeStory) {
      return (
        <div className="stories-list">
          <h2 className="stories-title">Our Fairytales</h2>
          <div className="story-cards-wrapper">
            <div className="story-card" onClick={() => handleSelect("story", "The Forest Of Dreams")}>
              <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest.webp" alt="The forest of Dreams" />
            </div>
            <div className="story-card" onClick={() => handleSelect("story", "The Girl And The Plane Tree")}>
              <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl.webp" alt="The girl and the plane tree" />
            </div>
            <div className="story-card" onClick={() => handleSelect("sub", "fairytails-inclusivity")}>
              <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/inclu.webp" alt="Fairytails Inclusivity" />
            </div>
      
          </div>
          <button className="back" onClick={() => handleSelect("sub", "menu")}>Back</button>
        </div>
      );
    }
    if (activeStory && !selectedLanguage) {
      return (
        <div className="stories-list">
          <h2 className="stories-title">{activeStory}</h2>
          <div className="buttons-etal-row">
            {/* Languages button */}
            <button
              className="language-toggle-button"
              onClick={() => handleSelect("langs", showLanguages ? null : "true")}
            >
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/languages/lang-but.webp"
                alt="Languages"
              />
            </button>

            {/* Braille button */}
            <button
              className="braille-toggle-button"
              onClick={() => handleSelect("sub", "braille")}
            >
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/braille/braille-but.webp"
                alt="Braille"
              />
            </button>

            {/* Audiobook button */}
            <button
              className="audio-toggle-button"
              onClick={() => handleSelect("sub", "audiobook")}
            >
              <img
                src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/audiobook/audiobook-but.webp"
                alt="Audiobook"
              />
            </button>

            {/* Sign button only for forest of dreams */}
            {activeStory === "The Forest Of Dreams" && (
              <button
                className="sign-toggle-button"
                onClick={() => handleSelect("sub", "signlanguage")}
              >
                <img
                  src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/signlanguage/sign-but.webp"
                  alt="Sign Language"
                />
              </button>
            )}
          </div>


          {/* shows all the language buttons when clicked */}
          {showLanguages && (
            <>
              <div className="languages-tales-text-container">
                <p>
                  <b>Why Multilingual Fairy tales Matter</b>
                  <br></br><br></br>

                  Fairy tales in multiple languages ensure that all children can enjoy the stories and
                  understand their lessons, regardless of the language they speak at home. They promote
                  inclusion, cultural awareness and empathy, making storytelling and learning accessible
                  to everyone.
                </p>
                {activeStory == "The Girl And The Plane Tree" ?
                  <img
                    src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/map-3.webp"
                    style={{ width: "100%", borderRadius: "10px" }}
                  /> :
                  <img
                    src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/map-1.webp"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                }
                <p style={{ marginTop: "20px" }}>
                  <b>References</b>
                </p>
                <a href="https://www.google.com/url?client=internal-element-cse&cx=001709828683833234690:gznd3f1jans&q=https://hilo.hawaii.edu/campuscenter/hohonu/volumes/documents/ThePositiveImpactsofFairyTalesforChildrenLeilaniVisikoKnox-Johnson.pdf&sa=U&ved=2ahUKEwiosoL77oeQAxXDVKQEHVsdFrcQFnoECAUQAQ&usg=AOvVaw3f5j9wsmcYqxoD0dKKdRDa" target="_blank" rel="noopener noreferrer">
                  VisikoKnox-Johnson, L. (2016). The Positive Impacts of Fairy Tales for Children.
                </a>
              </div>
              <div className="language-cards-wrapper">
                {Object.keys(storyImages[activeStory]).map((langKey) => (
                  <div
                    key={langKey}
                    className="language-card"
                    onClick={() => {
                      handleSelect("lang", langKey);
                      setShowLanguages(false);
                    }}
                  >
                    <img src={languageButtons[langKey]} alt={langKey} />
                  </div>
                ))}

              </div>
            </>
          )}

          <button className="back" onClick={() => handleSelect("story", null)}>Back</button>
        </div>
      );
    }

    if (activeStory && selectedLanguage) {
      return (
        <div className="stories-list">
          <h2 className="stories-title">{activeStory}</h2>
          <div className="story-images-wrapper">
            {storyImages[activeStory][selectedLanguage].map((src, idx) => (
              <img key={idx} src={src} alt={`${activeStory} page ${idx + 1}`} className="story-image" />
            ))}
          </div>
          <button className="back" onClick={() => handleSelect("lang", null)}>Back</button>
        </div>
      );
    }
  }

  /*content for audiobook, braille, sign lang*/
  if (subSection === "braille") {
    return (
      <div className="fairytails-section">
        <div className="braille-text-section">
          <h2 className="stories-title">The Importance of Braille</h2>
          <p>
            Providing our fairy tales in Braille ensures that children with visual impairments
            can fully enjoy and learn from the stories. The President of the Union of the Blind
            praised our work, saying: <i>"The work you have done is outstanding. The image
              descriptions are flawless, something I rarely encounter. The only thing I would
              like to see additionally is the names of the author and the person responsible for
              the illustrations inside the book, so that I can read that as well."</i>
            <br></br><br></br>

            Her feedback highlights how accessibility through Braille not only allows children
            to enjoy stories but also ensures that every detail, including authorship and
            illustration credits, is available to all readers.
          </p>
        </div>
        <div className="braille-tales-ref-container">
          <p>
            <ol>
              <a href="https://www.rickhansen.com/news-stories/blog/importance-braille-world-braille-day" target="_blank" rel="noopener noreferrer">
                <b>References</b>
              </a>
            </ol>
          </p>
        </div>

          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/braille/braille-img.webp"
            alt="braille"
            className="braille-img-fairytales"
          />
          
        <button className="back" onClick={() => handleSelect("sub", "fairytails")}>Back</button>
      </div>
    );
  }

if (subSection === "audiobook") {
  const story = activeStory || "The Forest Of Dreams";

  // lang per fairytale
  const audiobookLanguages: Record<string, string[]> = {
    "The Forest Of Dreams": ["English","French","German","Greek","Russian", "Spanish", "Swedish"],
    "The Girl And The Plane Tree": ["English","French","German", "Greek","Russian", "Spanish", "Swedish"],
  };

  //all links
  const audiobookVideos: Record<string, Record<string, string>> = {
    "The Forest Of Dreams": {
      English: "https://video.igem.org/videos/embed/gAgwYNXsaGNjFbN4PYRKcW", 
      German: "https://video.igem.org/videos/embed/x1YtLmpXYhdpJJUE1ekp2C",
      Greek: "https://video.igem.org/videos/embed/tH53iuoZHuuF8Ne819H434",
      Russian : "https://video.igem.org/videos/embed/bq6aCLL5VSY5EZLfTyeJMa",
      Spanish : "https://video.igem.org/videos/embed/eGFrSDFjEtwqRZi9kxMp53",
      Swedish : "https://video.igem.org/videos/embed/gC3DvSkLYgs54koE1uvTX7",
      French : "https://video.igem.org/videos/embed/nwDxchp6wJfKQdFwQgmhZW",
    },

    "The Girl And The Plane Tree": {
      English: "https://video.igem.org/videos/embed/bdm4Ph4y1pHXk3JeFFWmmF", 
      German: "https://video.igem.org/videos/embed/aTjPHt3eH3BShGeccayqfp",
      Greek: "https://video.igem.org/videos/embed/qhMAj7FmuwyNExY2gLCVf8",
      Russian : "https://video.igem.org/videos/embed/5Ub4iCD8aMjFnnPh4aA67t",
      Spanish : "https://video.igem.org/videos/embed/eWMfnKqQ3unb9pJjARAhSn",
      Swedish : "https://video.igem.org/videos/embed/28JP3xR2Hh9DobFgqt8jNq",
      French : "https://video.igem.org/videos/embed/4vchTTf9CPHoi53oSa4pbV",
    },
  };

  // find the link for each lang
  const currentVideo =
    selectedAudioLang && audiobookVideos[story]
      ? audiobookVideos[story][selectedAudioLang]
      : null;

  return (
    <div className="fairytails-section">
      <h2 className="stories-title">{story} — Audiobook</h2>

      <p className="audiobook-text-section">
        To promote inclusivity, we created an audiobook version of our fairy tales.
        It allows children with visual impairments, reading
        difficulties, or those who prefer listening to fully
        enjoy the story. With expressive narration and sound
        cues, the audiobook offers an immersive experience,
        ensuring every child can engage with the characters
        and messages.
      </p>

      {/* Bttns for choosing lang */}
      <div className="audio-lang-buttons">
        {audiobookLanguages[story].map((lang) => (
          <button
            key={lang}
            className={`audio-lang-button ${
              selectedAudioLang === lang ? "active" : ""
            }`}
            onClick={() =>
              setSelectedAudioLang(selectedAudioLang === lang ? null : lang)
            }
          >
            {lang}
          </button>
        ))}
      </div>

      {/* iframing vids*/}
      {currentVideo && (
        <div className="video-container-sign" style={{ margin: "20px 0" }}>
          <iframe
            title={`${story} audiobook in ${selectedAudioLang}`}
            width="560"
            height="315"
            src={currentVideo}
            style={{ border: 0 }}
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
      )}

      <div className="audio-tales-ref-container">
        <a
          href="https://eric.ed.gov/?q=aimed&ff1=eduGrade+5&id=EJ1413159"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Reference</b>
        </a>
      </div>

      {/*<img
        src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/audiobook/audiobook-icon.webp"
        alt="audiobook icon"
        className="audiobook-img-icon"
      />*/}

        <button
          className="back"
          onClick={() => {
            setSelectedAudioLang(null);
            handleSelect("sub", "fairytails");
          }}
        >
          Back
        </button>
      </div>
    );
  }


  if (subSection === "signlanguage") {
    return (
      <div className="fairytails-section">
        <h2 className="stories-title">The Forest of Dreams in Sign Language</h2>
        <div className="sign-text-section">
          <p>
            To make science communication inclusive, we translated
            our fairy tale <i>“The Forest of Dreams”</i> into Sign Language.
            This allows children with hearing impairments to enjoy
            the story fully, while highlighting the importance of
            diverse forms of communication and creating a space where
            every child can participate and be inspired.
          </p>
        </div>

          {/*Sign Language Vid*/}
        <div className="video-container-sign" style={{ margin: "20px 0" }}>
          <iframe
            title="IOANNINA: Sign language for fairytale (2025) [Greek]"
            width="560"
            height="315"
            src="https://video.igem.org/videos/embed/7b6LrMzkUU3qTFyHZm1HRg"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>

        <div className="sign-tales-ref-container">
          <p>
            <ol>
              <a href="https://doi.org/10.1080/14643154.2024.2302702" target="_blank" rel="noopener noreferrer">
                <b>Reference</b>
              </a>
            </ol>
          </p>
        </div>
        <button className="back" onClick={() => handleSelect("sub", "fairytails")}>Back</button>
      </div>
    );
  }


  /* Fairytails inclusivity */
  if (subSection === "fairytails-inclusivity") {
    return (
      <div className="fairytails-section">
        <div className="fairytails-text-container">
          {/* Introduction section */}
          <p>
            Synthetic biology can often feel abstract or intimidating to young audiences.
            To bridge this gap, we wrote two original fairy tales that transform
            scientific concepts from our iGEM project into magical, child-friendly
            narratives. The stories introduce ideas like teamwork, biological tools,
            and ethical responsibility through simple metaphors, relatable characters,
            and positive values.
            <br></br><br></br>

            To further extend their reach, <b><i>The Forest of Dreams</i> participated in a
              creative writing contest</b> organized by the art studio <b>Pukka</b>. This second
            edition of the competition offered prizes such as audiobook production
            and cash awards <b>(300€, 200€, 100€)</b>, highlighting the story’s quality and
            creative impact.
          </p>
        </div>

        <img
          src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/6.webp"
          alt="introduction"
          className="introduction-fairytails"
        />
        {/* Organization section */}
        <div className="organization-section-fairytails">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/7.webp"
            alt="Organization"
            className="organization-image-fairytails"
          />
          <div className="organization-text-fairytails">
            <p>
              From the very beginning, our team worked collaboratively through
              brainstorming sessions, sharing ideas on how to transform complex
              scientific concepts into engaging stories for children. These discussions
              helped us shape the two final scenarios—<i>The Forest of Dreams and The Girl
                and the Plane Tree</i>—as the best way to combine imagination, science and
              positive values.
              <br></br><br></br>

              During this creative process, we also reflected on how the project could
              go beyond simply telling stories. We asked ourselves how to make it
              meaningful and accessible for all children, regardless of background,
              language or abilities. This collective decision-making guided us to develop
              complementary materials such as an activity book, translations into <b>19
                languages</b>, audiobooks and Braille editions and lastly,
              “The forest of dreams” was translated in sign language as well.<br></br>
              By organizing our work this way, we ensured that inclusion was not just
              an addition, but the foundation of our outreach program—shaping every step
              from the stories themselves to the formats we offered.
              <br></br><br></br>

              Dr. Kalliopi Stara helped us refine the fairytales by ensuring their
              scientific accuracy. With her background in environmental education and
              award-winning writing, she was the perfect guide,  while we also connected
              with the internationally renowned author Carmen Ruggeri.
            </p>
          </div>
        </div>

        {/* Implementation section */}
        <div className="implementation-section-fairytails">
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/8.webp"
            alt="Implementation"
            className="implementation-image-fairytails"
          />

          <div className="impl-block-fairytails center">
            <p>
              We embedded inclusion into every aspect of the program:
              <ul>
                <li><b>Multilingual access:</b> Both tales were translated into <b>19 languages</b> (Albanian, Arabic, Catalan, Chinese, Croatian, English, French, German, Italian, Polish, Portuguese, Romanian, Russian, Serbian, Spanish, Swahili, Swedish, Turkish and Vietnamese), so children can enjoy them in their home language.</li>
                <li><b>Multiple formats:</b> We created <b>audiobooks</b>  (English, French, German, Greek, Russian, Spanish and Swedish)  for pre-readers and <b>Braille editions</b> for children who are visually impaired and a <b>sign language edition</b> for the deaf and hard of hearing.</li>
                <li><b>Neurodivergent-friendly design:</b> The books use clear layouts, ample spacing, bold imagery, high contrast, and readable typography to support children with ADHD or attention challenges.</li>
                <li><b>Story-based learning:</b> We developed an activity book based on <i>The Forest of Dreams</i> with safe, imaginative science activities (no lab work) and used both tales in <b>workshops and outreach events</b> to spark curiosity and creativity.</li>
              </ul>
            </p>
          </div>
        </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-fairytails">
          <div className="outcomes-text-fairytails">
            <p>
              Children engaged with the stories across visual, auditory and tactile formats,
              showing increased curiosity about biology and science. The multilingual approach
              helped us reach diverse cultural communities, while the accessible design
              encouraged participation from neurodivergent and visually impaired children.
              <br></br><br></br>

              Participation in the Pukka contest gave The Forest of Dreams wider
              recognition and validated the artistic and educational quality of our
              approach.
            </p>
          </div>
          {/*Img Title*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
            alt="Outcomes&Results"
            className="outcomes-image-fairytails"
          />

          <div className="outcomes-images-row">
            <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/theforest2.webp" alt="Image 1" className="small-outcome-image" />
            <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/thegirl2.webp" alt="Image 2" className="small-outcome-image" />
            <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/notebook2.webp" alt="Image 3" className="small-outcome-image" />
          </div>

          {/* Green container below */}
          <div className="covers-container">
            <p><b>Covers of our two books and the activity book.</b></p>
          </div>

          {/* Why is it important section */}
          <div className="important-section-fairytails">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/10.webp"
              alt="Important"
              className="important-image-fairytails"
            />
            <div className="important-text-fairytails">
              <p>
                This project demonstrates how <b>inclusion can transform science outreach</b>.
                By removing linguistic, sensory and cognitive barriers, and by presenting
                synthetic biology through creative, ethical storytelling, we helped children
                see science as something they can be part of. The contest participation also
                showed that science communication can be both educational and artistically
                meaningful, bridging art and science.
              </p>
            </div>
          </div>
          {/* What did we gain section */}
          <div className="gain-section-fairytails">
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/11.webp"
              alt="What did we gain"
              className="gain-image-fairytails"
            />
            <div className="gain-text-fairytails">
              <p>
                We gained experience in creating inclusive educational materials,
                strengthened our local and international community ties, and saw how
                accessibility fosters engagement and curiosity. Most importantly, we
                learned that <b>storytelling can make complex science feel human, relatable
                  and open to everyone</b>.
              </p>
            </div>
          </div>
        </div>
        <button className="back" onClick={() => handleSelect("sub", "menu")}>Back</button>
      </div>


    );
  }


  //Platyolis Game
  if (subSection === "platyolis") {
    return (
      <div className="stories-list">
        <h2 className="stories-title">Platyolis Game</h2>
        <div style={{ textAlign: "justify", width: "100vw", backgroundImage: "url(https://static.igem.wiki/teams/5684/wikipics/inclusivity/game/bg-1.webp)" }}>

          <div className="content" style={{ marginTop: "50px" }}>
            <div className="content-grid">
              <div className="content-span text_color_dark">
                <p>Based on the fairy tale <b>“The Forest of Dreams”</b>, we created an interactive electronic game designed for children and teens aged 10–16. Players bring to life the magical world of Platyoli and the fairies, working together to save the plane trees from spreading fungus.</p>
                <p>The game emphasizes <b>inclusion</b>: all characters and players can participate equally, regardless of abilities or experience, and every action contributes to the game’s progress. Through collaboration, empathy, and respect for differences, children learn that diversity is a strength and that everyone’s participation makes a difference.</p>
              </div>

              <div className="image-span">
                <img
                  src="https://static.igem.wiki/teams/5684/wikipics/inclusivity/game/image-1.webp"
                  style={{ width: "100%" }} />
              </div>

              <div className="content-full">
                <img
                  className="tagline-img tagline-right"
                  src="https://static.igem.wiki/teams/5684/wikipics/inclusivity/game/tagline-1.webp"
                  alt="From Aegean meeting"
                />
              </div>
            </div>
          </div>

          <div className="content" style={{ marginTop: "50px" }}>
            <div className="content-grid">

              <div className="image-span">
                <img
                  src="https://static.igem.wiki/teams/5684/wikipics/inclusivity/game/image-2.webp"
                  style={{ width: "100%" }} />
              </div>

              <div className="content-span text_color_dark">
                <p>The electronic game is more engaging for children compared to the fairy tale because it allows them to <b>actively participate</b> in the story, regardless of their abilities or experience. Players can <b>fly, explore, make decisions and save the plane trees themselves</b>, making everyone feel included and important.</p>
                <p>The game blends magic and science, offering a fun and educational experience for every child eager to explore, learn and help protect the environment.</p>
                <p>Unfortunately, due to technical constraints the game could not be hosted in our wiki, but is is available at our teams own <a target="_blank" href="https://igemioannina.unit.uoi.gr/game/">website</a> and it’s code and  downloadable version is available at our team’s <a target="_blank" href="https://gitlab.igem.org/2025/software-tools/ioannina/-/tree/main/Amadryads_game">software repository</a></p>
              </div>

              <div className="content-full">
                <img
                  className="tagline-img tagline-left"
                  src="https://static.igem.wiki/teams/5684/wikipics/inclusivity/game/tagline-2.webp"
                  alt="From Aegean meeting"
                  style={{ marginBottom: "120px" }}
                />
              </div>

              <div className="content-full text_color_light">
                <p>References: <i>Marc Prensky, The Games Generations: How Learners Have Changed,</i> <a style={{ color: "#d8f3dc" }} target="_blank" href="https://www.marcprensky.com/writing/Prensky%20-%20Ch2-Digital%20Game-Based%20Learning.pdf">https://www.marcprensky.com/writing/Prensky%20-%20Ch2-Digital%20Game-Based%20Learning.pdf</a></p>
              </div>
            </div>
          </div>

        </div>
        <button className="back" onClick={() => handleSelect("sub", "menu")}>Back</button>
      </div>
    );
  }

  //Lab Legends
  if (subSection === "legends") {
    return (
      <div className="stories-list">
        <h2 className="stories-title">Lab Legends</h2>
        <img
        src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al-buttons/mem-cards-page-all.webp"
        alt="Background"
        className="everything-img-mem"
      />
        <button className="back" onClick={() => handleSelect("sub", "menu")}>Back</button>
      </div>
    );
  }

  return null;
}


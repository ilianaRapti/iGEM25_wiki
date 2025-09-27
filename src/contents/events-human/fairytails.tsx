import "./fairytails.css"

export const Fairytails = {
  id: 2,
  title: "Fairytails",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/fairytails-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/bgfairytails.webp",
  description: (
    <div className="fairytails-section">
    <div className="fairytails-text-container">
      {/* Introduction section */}
        <p>
            Synthetic biology can often feel abstract or intimidating to young 
            audiences. To bridge this gap, we wrote two original fairy tales that 
            transform scientific concepts from our iGEM project into magical, 
            child-friendly narratives. The stories introduce ideas like teamwork, 
            biological tools, and ethical responsibility through simple metaphors, 
            relatable characters, and positive values.<br></br><br></br>

            To further extend their reach, The Forest of Dreams participated 
            in a creative writing contest organized by the art studio Pukka. 
            This second edition of the competition offered prizes such as audiobook 
            production and cash awards (300€, 200€, 100€), highlighting the story’s
            quality and creative impact.
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
            scientific concepts into engaging stories for children. 
            These discussions helped us shape the two final scenarios—The Forest 
            of Dreams and The Girl and the Plane Tree—as the best way to combine 
            imagination, science, and positive values. <br></br><br></br>

            During this creative process, we also reflected on how the project could
            go beyond simply telling stories. We asked ourselves how to make it 
            meaningful and accessible for all children, regardless of background, 
            language, or abilities. This collective decision-making guided us to 
            develop complementary materials such as an activity book, translations 
            into 17 languages, audiobooks, and braille editions.
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
              <li><b>Multilingual access:</b> Both tales were translated into <b>17 languages</b> so children can enjoy them in their home language.</li>
              <li><b>Multiple formats:</b> We created <b>audiobooks</b> (English, French, Spanish, Greek) for pre-readers and <b>braille editions</b> for children who are visually impaired.</li>
              <li><b>Neurodivergent-friendly design:</b> The books use clear layouts, ample spacing, bold imagery, high contrast, and readable typography to support children with ADHD or attention challenges.</li>
              <li><b>Story-based learning:</b> We developed an activity book based on The Forest of Dreams with safe, imaginative science activities (no lab work) and used both tales in <b>workshops and outreach events</b> to spark curiosity and creativity.</li>
            </ul>
          </p>
        </div>
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-fairytails">
          <div className="outcomes-text-fairytails">
            <p>
                Children engaged with the stories across visual, auditory, and tactile formats, showing increased curiosity
                about biology and science. The multilingual approach helped us reach diverse 
                cultural communities, while the accessible design encouraged participation 
                from neurodivergent and visually impaired children.<br></br><br></br>

                Participation in the Pukka contest gave The Forest of Dreams wider 
                recognition and validated the artistic and educational quality of 
                our approach.
            </p>
          </div>
          {/*Img Title*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/titles/9.webp"
            alt="Outcomes&Results"
            className="outcomes-image-fairytails"
          />

            <div className="outcomes-images-row">
                <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/theforest.webp" alt="Image 1" className="small-outcome-image" />
                <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/thegirl1.webp" alt="Image 2" className="small-outcome-image" />
                <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/notebook1.webp" alt="Image 3" className="small-outcome-image" />
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
                This project demonstrates how inclusion can transform science
                outreach. By removing linguistic, sensory, and cognitive 
                barriers, and by presenting synthetic biology through 
                creative, ethical storytelling, we helped children see 
                science as something they can be part of. The contest 
                participation also showed that science communication can 
                be both educational and artistically meaningful, bridging 
                art and science.
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
                strengthened our local and international community ties, and 
                saw how accessibility fosters engagement and curiosity. Most 
                importantly, we learned that storytelling can make complex 
                science feel human, relatable, and open to everyone.
              </p>
            </div>
          </div>
        </div>
    </div>

  ),
  adhdText: (
    <p>
      ΣΦΗΜΜΥ = φοιτητικό συνέδριο. Παρουσιάσαμε το project μας και μιλήσαμε με επισκέπτες.
    </p>
  ),
};
import "./moment-sci.css"

export const MomentSci = {
  id: 5,
  title: "iGEM Moment",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/events/moment/moment-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/curiosity-bg2.webp",
  description: (
    <div className="mom-section-sci">
    <div className="mom-text-container-sci">
      {/* Introduction section */}
        <p>
           The <b>iGEM MOMENT</b> initiative was our way of bringing science closer to the 
           public by showcasing the <b>human stories behind synthetic biology</b>. 
           Inspired by the popular Instagram account “student moment”, we wanted 
           to create something similar for iGEM: a place where teams could share 
           not just their research, but the fun and creativity that make up their 
           daily experiences.
        </p>
    </div>

      {/* Organization section */}
      <div className="smom-section-sci">

        <div className="smom-text-sci">
          <p>
            We reached out to iGEM teams across the world, inviting them 
            to send us photos and videos. The response was heartwarming — 
            teams shared behind-the-scenes snapshots of their work, moments 
            of laughter and glimpses of the unique ways they experience 
            the competition.
            <br></br><br></br><br></br><br></br>

            By collecting and curating this content, we aimed to <b>break down the barriers between science and the public</b>. 
            Often, synthetic biology can feel distant or intimidating. 
            Through iGEM MOMENT, we showed that behind every experiment 
            is a team of real people — passionate, diverse and deeply human.
          </p>
        </div>

        <div className="last-mom-text-sci">
          <p>
            Sharing this content on our social media platforms gave the 
            public a new perspective. Instead of seeing science as 
            abstract, viewers could <b>connect emotionally</b> with iGEM teams 
            around the world. This kind of storytelling is essential 
            for building trust and fostering excitement about 
            scientific research.
            <br></br><br></br>

            In the end, iGEM MOMENT was more than just a collection of images. 
            It was an exercise in <b>science communication</b>, demonstrating how 
            powerful it can be to tell stories that make science <b>accessible, 
            relatable and inspiring</b>.
          </p>
        </div>
      </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/human-practices/events/moment/moment-img.webp"
            alt="igem moment"
            className="mom-img-sci"
        />
      </div>
      

    ),
    adhdText: (
    <div className="shared-adhd-text-inclu">

        <p><b>What It Is</b></p>
        <ul>
          <li>A global social media project</li>
          <li>Inspired by <i>“student moment”</i> on Instagram but tailored for iGEM teams</li>
          <li>Goal: Show the <b>human side of synthetic biology</b> through fun and creative content</li>
        </ul>

        <p><b>How It Worked</b></p>
        <ul>
          <li>Reached out to <b>iGEM teams worldwide</b></li>
          <li>Teams shared:
            <ul>
              <li>Team photos</li>
              <li>Fun, behind-the-scenes moments</li>
              <li>Short videos showing their daily life as iGEMers</li>
            </ul>
          </li>
          <li>Shared this content on our <b>social media platforms</b></li>
        </ul>

        <p><b>Why It Matters for Science Communication</b></p>
        <ul>
          <li>Showed that science isn’t only about lab work and experiments</li>
          <li>Made synthetic biology <b>accessible and relatable</b></li>
          <li>Helped the public connect emotionally with the iGEM experience</li>
        </ul>

        <p><b>Impact</b></p>
        <ul>
          <li>Teams around the world felt represented and celebrated</li>
          <li>Viewers saw that science is done by real people, with creativity and fun</li>
          <li>Built stronger <b>public understanding and trust</b> in synthetic biology</li>
        </ul>

      </div>
    ),
};
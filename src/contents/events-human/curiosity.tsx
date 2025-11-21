import "./curiosity.css"

export const CuriosityCollab = {
  id: 1,
  title: "Curiosity",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/curiosity-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/curiosity-bg2.webp",
  description: (
    <div className="fcur-section-col">
    <div className="fcur-text-container-col">
      {/* Introduction section */}
        <p>
            As part of a collaborative initiative led by <b>iGEM Thessaloniki</b>, 
            our team was invited to contribute to a global video project. 
            Each participating team was asked to appear on camera holding a 
            sign with a single word that best represented <b>what science means 
            to them</b>.
            <br></br><br></br>

            We chose the word <b>“Curiosity”</b>, as it reflects the driving force 
            behind our project, our learning journey and our commitment to 
            exploring new ideas.
        </p>
    </div>
    <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/icon1-curiosity.webp"
        alt="icon1"
        className="icon-cur-col"
    />
      {/* Organization section */}
      <div className="scur-section-col">

        <div className="scur-text-col">
          <p>
            This activity, though simple, symbolized the <b>shared values</b> that 
            connect iGEM teams worldwide. By joining forces with Thessaloniki 
            and other teams, we helped create a collective message showing 
            how science unites us through collaboration and shared passion.
          </p>
        </div>
      </div>

        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/curiosity/imgteam-curiosity.webp"
            alt="team-cur"
            className="teamimg-cur-col"
        />
      </div>

    ),

    adhdText: (
      <div className="shared-adhd-text-inclu">

      <p><b>What It Was</b>:</p>
      <ul>
        <li>A global <b>collaboration project</b> organized by <b>iGEM Thessaloniki</b>.</li>
        <li>Teams from around the world contributed to one video.</li>
      </ul>

      <p><b>Our Task</b>:</p>
      <ul>
        <li>Appear in a short clip holding a sign with one word that answers: <i>“What does science mean to your team?”</i></li>
      </ul>

      <p><b>Our word</b>:</p> 
      <ul>
        <li><b>CURIOSITY</b></li>
        <li>Represents our team’s passion for <b>exploration, learning, and innovation</b>.</li>
      </ul>

      <p><b>Why It Matters</b>:</p>
      <ul>
        <li>Shows how science connects teams globally through shared values.</li>
        <li>Highlights the collaborative spirit of iGEM.</li>
        <li>Demonstrates that even small actions can unite diverse teams.</li>
      </ul>

    </div>
  ),
};
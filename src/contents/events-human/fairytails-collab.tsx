import "./fairytails-collab.css"

export const FairyCollab = {
  id: 9,
  title: "Fairytales",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/inclusivity-page/fairytails-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/fairytails-collab/fairytail-bg-collab2.webp",
  description: (
    <div className="fair1-section-coll">
        <div className="fair1-text-container-coll">
        {/* Introduction section */}
            <p>
            In our effort to make our storybooks more <b>inclusive and 
            accessible</b> to other countries, we decided to have them <b>translated</b>. We chose to 
            reach out to other iGEM teams from the respective countries to help us with this 
            task. This collaboration is important, as it reminds us of <b>the value of teamwork 
            and mutual support</b> between teams, which is one of the main goals of the iGEM 
            competition.
            </p>
        </div>

        <div className="fair2-text-container-coll">
        {/* Introduction section */}
            <p>
            More specifically, the teams that helped us with the translations and 
            also read the storybooks aloud so that they could be available in audio 
            format for people with <b>visual impairments</b> were the following:
            <br></br><br></br>


            <b>iGEM EGYPT/AFCM (Egypt)</b>:Standard Arabic, Egyptian Arabic<br></br>
            <b>iGEM CONCORDIA (Canada)</b>: French<br></br>
            <b>iGEM CHALMERS-GOTHENBURG (Sweden)</b>: Swedish, German<br></br>
            <br></br><br></br>

            <b>Voice Check</b><br></br>
            <b>iGEM THESSALY (Greece)</b>: Swedish<br></br>
            <b>iGEM IOANNINA (Greece)</b>: Greek, English, German
            <br></br>
            <br></br>

            We would like to extend our thanks to all those who contributed to making our 
            inclusion initiatives possible. In particular, we would like to thank:<br></br>
            <ul>
                <li><b>“The Tunnel of Silence”</b>, for its remarkable contribution in translating our story “The Forest of Dreams” into Greek Sign Language.</li>
                <li>The company <b>e-braille.gr</b>, for its invaluable work in translating both of our stories into Braille format.</li>
            </ul>

            </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/fairytails-collab/vol-fairy-collab.webp"
            alt="vol icon"
            className="vol-img1-coll"
        />
        <img
        src="https://static.igem.wiki/teams/5684/wikipics/collabs/fairytails-collab/fairytailsimg-collab1.webp"
        alt="fairytails"
        className="fairy-img-coll"
        />
    </div>      

),
    adhdText: (
    <div className="shared-adhd-text-inclu">

        <p><b>Goal</b></p>
        <ul>
        <li>Make our <b>storybooks inclusive & accessible worldwide</b>.</li>
        <li>We asked <b>other iGEM teams</b> to help with <b>translations</b>.</li>
        <li>Teams also <b>read them aloud</b> → created <b>audio versions</b> for people with visual impairments.</li>
        <li>Collaboration = teamwork + mutual support → core iGEM value.</li>
        </ul>

        <p><b>Who Helped Us</b></p>
        <ul>
        <li><b>iGEM Egypt/AFCM</b> → Standard Arabic, Egyptian Arabic</li>
        <li><b>iGEM Concordia</b> → French</li>
        <li><b>iGEM Chalmers-Gothenburg</b> → Swedish, German</li>
        </ul>

        <p><b>Voice Checkers</b></p>
        <ul>
        <li><b>iGEM Thessaly</b> → Swedish</li>
        <li><b>iGEM Ioannina</b> → Greek, English, German</li>
        </ul>

    </div>
    ),
};
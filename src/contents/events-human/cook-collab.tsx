import "./cook-collab.css"

export const CookCollab = {
  id: 10,
  title: "Cookbook",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/collabs/cookbook/cookbook-collab-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/collabs/blind-assoc/blind-assoc-bg-collab3.webp",
  description: (
    <div className="cook1-section-coll">
        <div className="cook1-text-container-coll">
        {/* Introduction section */}
            <p>
            As part of our commitment to international collaboration and 
            cultural exchange, our team had the opportunity to contribute 
            to a unique initiative by <b>iGEM REC-CHENNAI</b>. Their team is 
            creating <b><i>a Global Cookbook—a collection</i></b> of traditional dishes 
            from around the world where salt plays a role beyond simply 
            enhancing flavor.
            </p>
        </div>

        <div className="cook2-text-container-coll">
        {/* Introduction section */}
            <p>
            We were invited to showcase a traditional Greek dish, sharing not 
            only its recipe but also its cultural background and significance. 
            By filling out their form and contributing our entry, not only did 
            we help a fellow iGEM team with a wonderful idea based on their 
            project, but also we became part of a global effort to highlight 
            the diversity of food traditions and the ways in which something 
            as simple as salt carries an important role. 
            </p>
        </div>
        <img
            src="https://static.igem.wiki/teams/5684/wikipics/collabs/cookbook/cooking-img2.webp"
            alt="cook book"
            className="cook-img-coll"
        />

      {/* Organization section */}
        <div className="cook3-section-coll">

            <div className="cook3-text-coll">
            <p>
                Through this small yet meaningful collaboration, we celebrated 
                both science and culture, while adding a taste of Greece to an 
                international gallery of flavors.
            </p>
            </div>
        </div>
    </div>      

),
    adhdText: (
        <div className="shared-adhd-text-inclu">
            <ul>
            <li>Team joined <b>iGEM REC-Chennai’s initiative: a global cookbook</b>.</li>
            <li>Aim: collect <b>traditional dishes worldwide</b> where salt = more than flavor.</li>
            </ul>

            <p><b>What We Did</b></p>
            <ul>
            <li>Shared a <b>traditional Greek dish</b>.</li>
            <li>Included <b>recipe + cultural background + significance</b>.</li>
            <li>Contributed via their form → supported their project + joined global effort.</li>
            </ul>

            <p><b>Outcomes & Results</b></p>
            <ul>
            <li>Showcased <b>Greek culture</b> internationally.</li>
            <li>Became part of a diverse global food tradition project.</li>
            <li>Highlighted importance of <b>salt’s role in culture + science</b>.</li>
            </ul>

            <p><b>Why This Matters</b></p>
            <ul>
            <li>Collaboration celebrated both science + culture.</li>
            <li>Added a <b>“taste of Greece”</b> to the international gallery of flavors.</li>
            <li>Reinforced values: <b>international exchange, inclusivity, cultural appreciation</b>.</li>
            </ul>

        </div>
    ),
};
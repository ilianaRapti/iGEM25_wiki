import "./prison-sci.css"

export const PrisonSci = {
  id: 2,
  title: "Nigrita Prison",
  thumbnail: "https://static.igem.wiki/teams/5684/wikipics/education/nigrita-prison/prison-cover.webp",
  background: "https://static.igem.wiki/teams/5684/wikipics/science-communication/prison/bg-pri-sci.webp",
  description: (
    <div className="pri-section-sci">
    <div className="pri-text-container-sci">
      {/* Introduction section */}
        <p>
        This action was a powerful example of how science communication can <b>cross boundaries
        and build bridges</b>. We connected with the Second Chance School inside Nigrita Prison, 
        bringing synthetic biology to a group that rarely has access to scientific outreach.    
        </p>
    </div>

    <img
        src="https://static.igem.wiki/teams/5684/wikipics/science-communication/prison/icon-pri.webp"
        alt="icon"
        className="icon-pri-sci"
    />
      {/* Organization section */}
      <div className="organization-section-scipri">
        <div className="organization-text-scipri">
          <p>
           We began by ensuring that every step was handled with care.
            After confirming the plan with iGEM HQ, we collaborated closely with 
            prison educators to create a session that was <b>safe, respectful, and meaningful</b>.
            Privacy was carefully protected — during the video call, we could only see the 
            teacher, not the students.
          </p>
        </div>
      </div>
      
      {/* Implementation section */}
      <div className="implementation-section-sci">
        <div className="impl-prison-sci center-sci-pri">
          <p>
            The session itself was designed to be interactive.
            We introduced synthetic biology in simple, clear terms and presented
            our project on protecting plane trees. Because the students’ current 
            curriculum focused on climate change, we were able to connect our project 
            to their existing knowledge, making the discussion relevant and engaging.    
          </p>
        </div>
      </div>


        {/* Outcomes&Results section */}
        <div className="outcomes-section-sci">
          <div className="outcomes-text-sci-pri">
            <p>
              Most importantly, this was not a lecture but a dialogue. The students
              shared their experiences with nature and environmental issues, and we listened.
              Through this exchange, we showed that science is not just something done in 
              laboratories — it is a <b>shared human effort</b> that everyone can be part of.
            </p>
          </div>
      </div>
        {/* Why is it important section */}
          <div className="important-section-sci">
            <div className="important-text-sci-pri">
              <p>  
                The feedback was overwhelmingly positive. Both teachers and
                students described the session as valuable and inspiring. 
                This experience demonstrated that <b>effective science communication</b> is
                about more than information — it is about <b>connection, empowerment and 
                mutual understanding</b>.
              </p>
            </div>
          </div>
        </div>

        
  ),
};
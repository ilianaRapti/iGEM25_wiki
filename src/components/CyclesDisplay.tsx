import { useState } from 'react';
import "./CyclesDisplay.css"

type CyclesDisplayProps = {
  design: JSX.Element;
  build: JSX.Element;
  test: JSX.Element;
  learn: JSX.Element;
};

export function CyclesDisplay({ design, build, test, learn }: CyclesDisplayProps) {
  const images = [
    'https://static.igem.wiki/teams/5684/wikipics/engineering/design.webp',
    'https://static.igem.wiki/teams/5684/wikipics/engineering/build.webp',
    'https://static.igem.wiki/teams/5684/wikipics/engineering/test.webp',
    'https://static.igem.wiki/teams/5684/wikipics/engineering/learn.webp',
  ];

  const [cycleState, setcycleState] = useState(0);    /* which cycle is currently displayed */

  const handleClick = (index: number) => {            /* when a cycle is clicked */
    setcycleState(index);                             /* set the current cycle to the clicked one */
  };

  return (
    <>
      <div className='cycle-display-wrap'>
        <div className="clickable-div">
          <div className="clickable-region" style={{ backgroundImage: `url(${images[cycleState]})` }}>
            <div className="region" onClick={() => handleClick(3)}></div> {/* Elements are placed like this:  0 1 */}
            <div className="region" onClick={() => handleClick(0)}></div> {/* (like 2x2 array)                2 3 */}
            <div className="region" onClick={() => handleClick(2)}></div> {/* but we want them in this order: 3 0 */}
            <div className="region" onClick={() => handleClick(1)}></div> {/* (clockwise from top right)      2 1 */}
            {/* thus 0->3 1->0 2->2 3->1            */}
          </div>
        </div>
        <div className='cycle-contents'>
          {/* Design */}
          <div
            key={0}
            style={{ width: "100%", justifyContent: "center", display: cycleState === 0 ? 'flex' : 'none' }} >
            {design}
          </div>
          {/* Build */}
          <div
            key={1}
            style={{ width: "100%", justifyContent: "center", display: cycleState === 1 ? 'flex' : 'none' }} >
            {build}
          </div>
          {/* Test */}
          <div
            key={2}
            style={{ width: "100%", justifyContent: "center", display: cycleState === 2 ? 'flex' : 'none' }} >
            {test}
          </div>
          {/* Learn */}
          <div
            key={3}
            style={{ width: "100%", justifyContent: "center", display: cycleState === 3 ? 'flex' : 'none' }} >
            {learn}
          </div>
        </div>
      </div>
    </>
  );
}

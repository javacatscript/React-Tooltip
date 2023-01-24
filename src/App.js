import React, { useState } from "react";
import Tooltip from "./Tooltip";
import styles from "./App.module.css";

function App() {
  //state to track hover movements (true or false)
  const [hover, setHover] = useState(false);

  //state to track tooltip positions (top, right, bottom, left; default is "top")
  const [position, setPosition] = useState("top");

  //handling mouseOver event -- setting hover to "true" on mouseOver
  const handleMouseOver = () => {
    setHover(true);
  };

  //handling mouseLeave event -- setting hover to "false" on mouseLeave
  const handleMouseLeave = () => {
    setHover(false);
  };

  //setting tooltip position based on button clicked
  const handleTooltipPos = (pos) => {
    setPosition(pos);
  };

  return (
    <>
      <div className={styles.div_buttons}>
        <button onClick={() => handleTooltipPos("top")}>Top</button>
        <button onClick={() => handleTooltipPos("right")}>Right</button>
        <button onClick={() => handleTooltipPos("bottom")}>Bottom</button>
        <button onClick={() => handleTooltipPos("left")}>Left</button>
      </div>
      <div className={styles.div_container}>
        <div
          className={styles.div_message}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h1>Hover over me.</h1>
        </div>

        {/* conditional rendering of Tooltip component depending on 'hover' value */}
        {/* passing down 'position' as prop to Tooltip component  */}

        {hover && <Tooltip position={position} />}
      </div>
    </>
  );
}

export default App;

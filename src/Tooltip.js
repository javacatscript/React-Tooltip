import React from "react";
import styles from "./Tooltip.module.css";
 
export default function Tooltip(props) {
  let tooltipPos = "";

//  creating tooltipPos class depending on tooltip 'position' 
  if (props.position === "top") {
    tooltipPos = styles.top;
  } else if (props.position === "right") {
    tooltipPos = styles.right;
  } else if (props.position === "bottom") {
    tooltipPos = styles.bottom;
  } else {
    tooltipPos = styles.left;
  }

  return (
    // applying 2 classes here -- one for styling (.div_tooltip) and one for tooltip position (tooltipPos)
    <div className={styles.div_tooltip + ' ' + tooltipPos} >
      <p>Hi, I'm react tooltip!</p>
    </div>
  );
}

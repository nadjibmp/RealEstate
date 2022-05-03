import React from 'react'
import './circle.css';

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
const r = 30;
const circ = 2 * Math.PI * r;
const strokePct = ((100 - pct) * circ) / 100;
return (
    <circle
    r={r}
    cx={100}
    cy={100}
    fill="transparent"
    stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
    strokeWidth={"1.5rem"}
    strokeDasharray={circ}
    strokeDashoffset={pct ? strokePct : 0}
    strokeLinecap="normal"
    ></circle>
);
};


  const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    return (
      <svg width={100} height={100}>
        <g transform={`rotate(-90 ${"50 100"})`}>
          <Circle colour="#EDF2F6" />
          <Circle colour={colour} pct={pct} />
        </g>
      </svg>
    );
  };

export default Pie
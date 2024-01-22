import React from 'react';
import './CircleGraph.css'; // Import your CSS file

const CircleGraph = ({ percentage } : any) => {
  const radius = 30; // Set the radius of the circle
  const circumference = 2 * Math.PI * radius; // Calculate the circumference

  // Calculate the stroke-dasharray and stroke-dashoffset based on the percentage
  const dashArray = `${circumference} ${circumference}`;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-graph">
      <svg height="100" width="100">
        <circle
          className="circle-graph-background"
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className="circle-graph-progress"
          cx="50"
          cy="50"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="16"
          fill="#A0D7E7" >
          {`${0}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircleGraph;

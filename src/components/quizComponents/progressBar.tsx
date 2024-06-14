// src/components/CircularProgressBar.jsx
import React from "react";

const CircularProgressBar = ({ percentage }: { percentage: number }) => {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute -rotate-90 transform"
      >
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-[#D32D4426]"
        />
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-[#D32D44]"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center gap-3">
        <span className="text-xl font-semibold">{percentage}%</span>
        <p>Accuracy</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;

import React from "react";

const Logo = ({ className = "w-12 h-12 md:w-16 md:h-16" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 950 950"
      className={className}
      role="img"
      aria-label="S H logo"
    >
      <defs>
        {/* radial glow */}
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="55%" stopColor="#0b2bff" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#0b2bff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0b2bff" stopOpacity="0" />
        </radialGradient>

        {/* soft glow */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* background radial */}
      <rect width="900" height="900" fill="url(#glowGrad)" />

      {/* central white circle */}
      <g transform="translate(150,120)">
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="#ffffff"
          filter="url(#softGlow)"
        />

        {/* Letter S (converted to path) */}
        <path
          d="M 250 180 
             C 160 180, 160 300, 250 300 
             C 340 300, 340 420, 250 420
             C 160 420, 160 540, 250 540"
          fill="none"
          stroke="#064bff"
          strokeWidth="60"
          strokeLinecap="round"
        />

        {/* Letter H (converted to path) */}
        <path
          d="M 330 260 L 330 480 M 330 370 L 420 370 M 420 260 L 420 480"
          stroke="#6fd2ff"
          strokeWidth="40"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;

import React from 'react';

const InfinityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 11.533C11 13.99 9.206 16 6.833 16S2.667 13.99 2.667 11.5s2.006-4.5 4.166-4.5c2.16 0 4.167 2.01 4.167 4.5zm10.333 0C21.333 13.99 19.539 16 17.166 16c-2.372 0-4.166-2.01-4.166-4.5s1.794-4.5 4.166-4.5c2.373 0 4.167 2.01 4.167 4.5z"
    />
  </svg>
);

export default InfinityIcon;

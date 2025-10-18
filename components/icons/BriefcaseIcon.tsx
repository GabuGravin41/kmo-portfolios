import React from 'react';

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M20.25 14.15v4.075c0 1.313-.964 2.5-2.25 2.5h-10.5c-1.286 0-2.25-.925-2.25-2.25V14.15M16.5 6.75l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5V2.25m1.5 4.5l4.5-4.5M6 6.75l4.5 4.5" 
    />
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v4.075c0 1.313-.964 2.5-2.25 2.5h-10.5c-1.286 0-2.25-.925-2.25-2.25V6z" 
    />
  </svg>
);

export default BriefcaseIcon;
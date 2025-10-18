import React from 'react';

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.55-.165 1.163-.242 1.785-.242m-2.22.002c-.566.047-1.135.12-1.686.23M21 12a9 9 0 11-18 0 9 9 0 0118 0zM10.5 12.75a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25zM13.5 12.75a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25z" 
        />
    </svg>
);

export default UsersIcon;

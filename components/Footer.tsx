import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kenya Mathematical Olympiad. All rights reserved.</p>
        <p className="text-sm mt-2">Fostering the next generation of mathematical talent in Kenya.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Section } from '../types';
import UsersIcon from './icons/UsersIcon';
import BuildingLibraryIcon from './icons/BuildingLibraryIcon';

interface HomeProps {
    setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Celebrating Kenya's</span>{' '}
                  <span className="block text-green-600 xl:inline">Brightest Minds</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The official platform for the Kenya Mathematical Olympiad. Discover exceptional talent, find valuable resources, and join us in shaping the future of mathematics in Kenya.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => setActiveSection('Students')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Meet the Students
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                     <button
                      onClick={() => setActiveSection('Sponsors')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                    >
                      Become a Partner
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://picsum.photos/seed/kenya-math/1200/800" alt="Students in a classroom" />
        </div>
      </div>

      {/* Hosted by CEMASTEA Section */}
       <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
                <img className="h-32 w-auto" src="https://via.placeholder.com/300x150.png?text=CEMASTEA+Logo" alt="CEMASTEA Logo" />
            </div>
            <div>
                <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Proudly Hosted By</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                CEMASTEA
                </p>
                <p className="mt-4 text-lg text-slate-500">
                The Centre for Mathematics, Science and Technology Education in Africa (CEMASTEA) is the proud host of the Kenya Mathematical Olympiad. Their commitment and state-of-the-art facilities provide the perfect environment for nurturing Kenya's top mathematical talent.
                </p>
            </div>
        </div>
      </div>

      {/* Our Journey & Impact Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Journey & Impact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A Legacy of Excellence
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-800">Our History</h3>
                <p className="mt-4 text-slate-600">
                    The Kenya Mathematical Olympiad was founded in 2009 by the visionary <span className="font-semibold text-green-700">Dr. James Katende</span>, a senior lecturer in the mathematics department at the University of Nairobi. 
                </p>
                <p className="mt-2 text-slate-600">
                    Despite many hurdles, his passion for identifying and nurturing mathematical talent has created a persistent and thriving community that continues to grow and achieve remarkable success on the international stage.
                </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <UsersIcon className="h-12 w-12 mx-auto text-green-600" />
                    <p className="text-5xl font-extrabold text-slate-900 mt-4">16,000+</p>
                    <p className="text-lg text-slate-500 mt-2">Participants This Year</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <BuildingLibraryIcon className="h-12 w-12 mx-auto text-green-600" />
                    <p className="text-5xl font-extrabold text-slate-900 mt-4">600+</p>
                    <p className="text-lg text-slate-500 mt-2">Schools Involved</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

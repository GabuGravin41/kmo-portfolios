import React from 'react';
import { sponsors } from '../data/mockData';

const Sponsors: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Partner with Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
          Support the future of science and technology in Kenya by sponsoring the Mathematical Olympiad.
        </p>

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800">Why Sponsor KMO?</h3>
            <ul className="mt-4 space-y-3 text-slate-600 list-disc list-inside">
              <li>Connect with the brightest young minds in the country.</li>
              <li>Promote your brand as a leader in supporting education and STEM.</li>
              <li>Gain visibility through our events, website, and materials.</li>
              <li>Make a lasting impact on the future of innovation in Kenya.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800">Sponsorship Tiers</h3>
            <p className="mt-4 text-slate-600">
              We offer a range of partnership opportunities, from sponsoring a single event to becoming a year-long title sponsor. We can tailor a package to meet your corporate social responsibility and marketing goals.
            </p>
             <p className="mt-4 text-slate-600">
              Join companies and organizations dedicated to fostering talent.
            </p>
          </div>
        </div>

        <div className="mt-16">
           <a
            href="mailto:sponsorship@kmo.example.com"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Get in Touch
          </a>
        </div>
      </div>

       <div className="bg-white mt-16 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-800">Our Valued Partners</h2>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {sponsors.map(sponsor => (
                        <div key={sponsor.name} className="flex justify-center">
                            <img className="h-12 w-auto" src={sponsor.logoUrl} alt={sponsor.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sponsors;

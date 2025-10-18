
import React from 'react';
import { Trainer } from '../types';
import BriefcaseIcon from './icons/BriefcaseIcon';

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  const { name, profileImageUrl, expertise, bio, institution } = trainer;

  return (
    <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-6">
        <img className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md" src={profileImageUrl} alt={name} />
      </div>
      <div className="p-6 pt-0">
        <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
        <div className="flex items-center justify-center mt-2 text-slate-500">
            <BriefcaseIcon className="h-5 w-5 mr-2" />
            <p className="text-base font-medium">{institution}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {expertise.map(skill => (
                <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold rounded-full">
                    {skill}
                </span>
            ))}
        </div>
        <p className="text-slate-600 mt-4 text-sm line-clamp-4">{bio}</p>
      </div>
    </div>
  );
};

export default TrainerCard;

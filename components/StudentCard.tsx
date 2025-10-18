import React from 'react';
import { Student, Role } from '../types';
import { useAuth } from '../contexts/AuthContext';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

interface StudentCardProps {
  student: Student;
  onDelete: (studentId: number) => void;
  onClick: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete, onClick }) => {
  const { name, profileImageUrl, bannerImageUrl, achievement, bio } = student;
  const { user } = useAuth();

  const achievementColor = {
    "IMO Team": "bg-yellow-100 text-yellow-800",
    "PAMO Team": "bg-orange-100 text-orange-800",
    "EAMO Team": "bg-cyan-100 text-cyan-800",
    "National Team": "bg-green-100 text-green-800",
    "Round 3 Finalist": "bg-blue-100 text-blue-800",
    "Round 2 Qualifier": "bg-purple-100 text-purple-800",
  };

  const canEdit = user && (user.role === Role.ADMIN || (user.role === Role.STUDENT && user.studentId === student.id));
  const canDelete = user && user.role === Role.ADMIN;

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Editing profile for ${student.name}. In a real app, this would open a form with an image upload field.`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      onDelete(student.id);
    }
  };

  return (
    <div onClick={onClick} className="bg-slate-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer group">
        <div className="relative">
             <img className="w-full h-32 object-cover" src={bannerImageUrl} alt={`${name}'s banner`} />
             
             <div className="absolute top-2 right-2 flex items-center space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {canEdit && (
                    <button onClick={handleEdit} className="p-2 bg-white/70 rounded-full hover:bg-white text-blue-600 hover:scale-110 transition-all duration-200">
                    <PencilIcon className="h-5 w-5" />
                    </button>
                )}
                {canDelete && (
                    <button onClick={handleDelete} className="p-2 bg-white/70 rounded-full hover:bg-white text-red-600 hover:scale-110 transition-all duration-200">
                    <TrashIcon className="h-5 w-5" />
                    </button>
                )}
            </div>

             <div className="absolute top-32 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex justify-center">
                 <img className="w-24 h-24 rounded-full object-cover border-4 border-slate-50" src={profileImageUrl} alt={name} />
             </div>
        </div>

      <div className="p-6 pt-14 text-center">
        <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mt-2 ${achievementColor[achievement]}`}>
          {achievement}
        </span>
        <p className="text-slate-600 mt-4 text-base line-clamp-3">{bio}</p>
      </div>
    </div>
  );
};

export default StudentCard;
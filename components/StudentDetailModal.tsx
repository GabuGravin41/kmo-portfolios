import React, { useState } from 'react';
import { Student } from '../types';
import XMarkIcon from './icons/XMarkIcon';
import SparklesIcon from './icons/SparklesIcon';
import LinkIcon from './icons/LinkIcon';
import CodeBracketIcon from './icons/CodeBracketIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import DownloadIcon from './icons/DownloadIcon';

interface StudentDetailModalProps {
  student: Student;
  onClose: () => void;
}

const StudentDetailModal: React.FC<StudentDetailModalProps> = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');
  const { name, year, profileImageUrl, bannerImageUrl, achievement, bio, skills, projects, publications, extracurriculars, hobbies } = student;
  
  const achievementColor = {
    "IMO Team": "border-yellow-400",
    "PAMO Team": "border-orange-400",
    "EAMO Team": "border-cyan-400",
    "National Team": "border-green-400",
    "Round 3 Finalist": "border-blue-400",
    "Round 2 Qualifier": "border-purple-400",
  };

  const handleDownload = (file: { name: string, content: string }) => {
    alert(`Downloading ${file.name}. (This is a demo)`);
    const blob = new Blob([file.content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-slate-100 rounded-xl shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex-shrink-0 relative">
            <img className="w-full h-48 object-cover" src={bannerImageUrl} alt={`${name}'s banner`} />
             <div className="absolute -bottom-16 left-8">
                 <img className={`w-32 h-32 rounded-full object-cover border-4 ${achievementColor[achievement]}`} src={profileImageUrl} alt={name} />
             </div>
             <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors">
                <XMarkIcon className="h-6 w-6" />
             </button>
        </div>
        
        <div className="flex-grow p-8 pt-20 overflow-y-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">{name}</h1>
              <p className="text-slate-500 text-lg">{achievement} - {year}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 text-sm font-semibold rounded-full">
                {skill}
                </span>
            ))}
          </div>
          
          <p className="text-slate-700 mt-6 text-base">{bio}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <section>
                <div className="flex border-b border-slate-200">
                    <button 
                        onClick={() => setActiveTab('projects')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${activeTab === 'projects' ? 'border-b-2 border-green-600 text-green-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        <CodeBracketIcon className="h-5 w-5" /> Projects
                    </button>
                     <button 
                        onClick={() => setActiveTab('publications')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${activeTab === 'publications' ? 'border-b-2 border-green-600 text-green-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        <DocumentTextIcon className="h-5 w-5" /> Publications
                    </button>
                </div>
                <div className="mt-4 space-y-4">
                  {activeTab === 'projects' && (
                    projects.length > 0 ? projects.slice(0, 5).map(p => (
                      <div key={p.name} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-slate-900 flex items-center justify-between">
                          {p.name}
                          {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700"><LinkIcon className="h-5 w-5"/></a>}
                        </h3>
                        <p className="text-sm text-slate-600">{p.description}</p>
                      </div>
                    )) : <p className="text-sm text-slate-500 p-4 bg-white rounded-lg shadow-sm">No projects to display.</p>
                  )}
                   {activeTab === 'publications' && (
                    publications.length > 0 ? publications.slice(0, 5).map(p => (
                      <div key={p.title} className="bg-white p-4 rounded-lg shadow-sm">
                         <h3 className="font-semibold text-slate-900 flex items-center justify-between">
                          <span className="flex-1 mr-2">{p.title}</span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {p.file && <button onClick={() => handleDownload(p.file!)} className="text-blue-500 hover:text-blue-700"><DownloadIcon className="h-5 w-5"/></button>}
                            {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700"><LinkIcon className="h-5 w-5"/></a>}
                          </div>
                        </h3>
                        <p className="text-sm text-slate-600 italic">{p.journal}</p>
                      </div>
                    )) : <p className="text-sm text-slate-500 p-4 bg-white rounded-lg shadow-sm">No publications to display.</p>
                  )}
                </div>
              </section>
            </div>
            {/* Right Column */}
            <div>
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center"><SparklesIcon className="h-6 w-6 mr-2 text-green-600"/>Interests</h2>
                    <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-slate-900">Extracurriculars</h3>
                        <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                           {extracurriculars.slice(0, 3).map(e => <li key={e}>{e}</li>)}
                        </ul>
                        <h3 className="font-semibold text-slate-900 mt-4">Hobbies</h3>
                         <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                           {hobbies.slice(0, 2).map(h => <li key={h}>{h}</li>)}
                        </ul>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailModal;
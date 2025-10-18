import React, { useState, useMemo } from 'react';
import { students as initialStudents } from '../data/mockData';
import StudentCard from './StudentCard';
import { AchievementLevel, Student } from '../types';
import StudentDetailModal from './StudentDetailModal';

const StudentProfiles: React.FC = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementLevel | 'All'>('All');
  const [yearFilter, setYearFilter] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);


  const handleDeleteStudent = (studentId: number) => {
    setStudents(currentStudents => currentStudents.filter(s => s.id !== studentId));
    setSelectedStudent(null); // Close modal if the deleted student was open
  };

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const nameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const achievementMatch = selectedAchievement === 'All' || student.achievement === selectedAchievement;
      const yearMatch = !yearFilter || student.year.toString() === yearFilter;
      return nameMatch && achievementMatch && yearMatch;
    });
  }, [students, searchTerm, selectedAchievement, yearFilter]);

  return (
    <div className="bg-white">
       {selectedStudent && <StudentDetailModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Olympians</h1>
          <p className="mt-4 text-xl text-slate-500">
            Meet the talented students who have excelled in the Kenya Mathematical Olympiad.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full sm:w-60 px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            <select
                value={selectedAchievement}
                onChange={e => setSelectedAchievement(e.target.value as any)}
                 className="w-full sm:w-60 px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-white"
            >
                <option value="All">All Achievements</option>
                {Object.values(AchievementLevel).map(level => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>
            <input
              type="number"
              placeholder="Filter by year..."
              value={yearFilter}
              onChange={e => setYearFilter(e.target.value)}
              className="w-full sm:w-40 px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onDelete={handleDeleteStudent}
              onClick={() => setSelectedStudent(student)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfiles;
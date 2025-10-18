import React, { useState } from 'react';
import { trainers as initialTrainers } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Role, Trainer } from '../types';
import TrainerCard from './TrainerCard';
import AddTrainerModal from './AddTrainerModal';

const Trainers: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const canAdd = user && (user.role === Role.TRAINER || user.role === Role.ADMIN);

  const handleAddTrainer = (newTrainer: Omit<Trainer, 'id'>) => {
    setTrainers(prev => [...prev, { ...newTrainer, id: Date.now() }]);
  };

  return (
    <div className="bg-white">
      {isModalOpen && <AddTrainerModal onClose={() => setIsModalOpen(false)} onAdd={handleAddTrainer} />}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Trainers</h1>
          <p className="mt-4 text-xl text-slate-500">
            Meet the experienced coaches and mentors behind our students' success.
          </p>
          {canAdd && (
            <div className="mt-6">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                    + Add Trainer
                </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;

import React, { useState, FormEvent } from 'react';
import { Trainer } from '../types';

interface AddTrainerModalProps {
  onClose: () => void;
  onAdd: (trainer: Omit<Trainer, 'id'>) => void;
}

const AddTrainerModal: React.FC<AddTrainerModalProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [expertise, setExpertise] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !institution || !expertise || !bio) {
        alert('Please fill all fields.');
        return;
    }
    onAdd({
      name,
      institution,
      bio,
      expertise: expertise.split(',').map(item => item.trim()),
      profileImageUrl: `https://i.pravatar.cc/150?u=${name}`, // Placeholder image
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Trainer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
          <input type="text" placeholder="Institution (e.g., University of Nairobi)" value={institution} onChange={e => setInstitution(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
          <input type="text" placeholder="Expertise (comma-separated, e.g., Algebra, Geometry)" value={expertise} onChange={e => setExpertise(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
          <textarea placeholder="Short Bio" value={bio} onChange={e => setBio(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Add Trainer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainerModal;

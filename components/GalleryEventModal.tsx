
import React from 'react';
import { GalleryItem } from '../types';
import XMarkIcon from './icons/XMarkIcon';

interface GalleryEventModalProps {
  item: GalleryItem;
  onClose: () => void;
}

const GalleryEventModal: React.FC<GalleryEventModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img src={item.imageUrl} alt={item.title} className="w-full max-h-[75vh] object-contain" />
          <button onClick={onClose} className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">{item.title}</h2>
          <p className="text-slate-600 mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryEventModal;

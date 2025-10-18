
import React, { useState } from 'react';
import { galleryItems } from '../data/mockData';
import { GalleryItem } from '../types';
import GalleryEventModal from './GalleryEventModal';
import CameraIcon from './icons/CameraIcon';

const Gallery: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    return (
        <div className="bg-white py-12">
            {selectedItem && <GalleryEventModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Gallery</h1>
                    <p className="mt-4 text-xl text-slate-500">
                        Moments from our past events, training camps, and competitions.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {galleryItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img 
                                src={item.thumbnailUrl} 
                                alt={item.title} 
                                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                                <CameraIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;

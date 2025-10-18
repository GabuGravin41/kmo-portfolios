import React, { useState, FormEvent, useMemo } from 'react';
import { resources as initialResources } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Role, Resource } from '../types';
import BookOpenIcon from './icons/BookOpenIcon';
import CalculatorIcon from './icons/CalculatorIcon';
import ShapesIcon from './icons/ShapesIcon';
import InfinityIcon from './icons/InfinityIcon';
import LinkIcon from './icons/LinkIcon';
import DownloadIcon from './icons/DownloadIcon';

const categoryIcons = {
  Algebra: <BookOpenIcon className="h-6 w-6 mr-2" />,
  Geometry: <ShapesIcon className="h-6 w-6 mr-2" />,
  'Number Theory': <CalculatorIcon className="h-6 w-6 mr-2" />,
  Combinatorics: <InfinityIcon className="h-6 w-6 mr-2" />,
};
const categories = Object.keys(categoryIcons) as (keyof typeof categoryIcons)[];

type ResourceType = 'url' | 'file';

const AddResourceModal: React.FC<{ onClose: () => void; onAdd: (resource: Resource) => void; }> = ({ onClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<keyof typeof categoryIcons>('Algebra');
    const [description, setDescription] = useState('');
    const [resourceType, setResourceType] = useState<ResourceType>('url');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newResource: Resource = {
            id: Date.now(),
            title,
            category,
            description,
        };
        if(resourceType === 'url') {
            newResource.url = url;
        } else if (file) {
            newResource.file = { name: file.name, content: 'dummy content' };
        } else {
            alert('Please provide a URL or a file.');
            return;
        }
        onAdd(newResource);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Add New Resource</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    <select value={category} onChange={e => setCategory(e.target.value as any)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm bg-white">
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    <div className="flex gap-4 mt-1">
                        <label className="flex items-center"><input type="radio" name="resourceType" value="url" checked={resourceType === 'url'} onChange={() => setResourceType('url')} className="mr-2"/> URL</label>
                        <label className="flex items-center"><input type="radio" name="resourceType" value="file" checked={resourceType === 'file'} onChange={() => setResourceType('file')} className="mr-2"/> File Upload</label>
                    </div>
                    {resourceType === 'url' ? (
                        <input type="url" placeholder="https://example.com" value={url} onChange={e => setUrl(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    ) : (
                        <input type="file" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} accept=".pdf" required className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                    )}
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200">Cancel</button>
                        <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Add Resource</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const Resources: React.FC = () => {
  const [resources, setResources] = useState(initialResources);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | keyof typeof categoryIcons>('All');
  const { user } = useAuth();
  const canAdd = user && (user.role === Role.TRAINER || user.role === Role.ADMIN);

  const handleAddResource = (newResource: Resource) => {
    setResources(prev => [...prev, newResource].sort((a,b) => a.title.localeCompare(b.title)));
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
  
  const filteredResources = useMemo(() => {
    return resources.filter(res => {
        const categoryMatch = activeCategory === 'All' || res.category === activeCategory;
        const searchMatch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || res.description.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });
  }, [resources, searchTerm, activeCategory]);

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isModalOpen && <AddResourceModal onClose={() => setIsModalOpen(false)} onAdd={handleAddResource} />}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Training Resources</h1>
          <p className="mt-4 text-xl text-slate-500">
            A curated list of materials to help you prepare for mathematical Olympiads.
          </p>
          {canAdd && (
            <div className="mt-6">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                    + Add Resource
                </button>
            </div>
          )}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
                <input 
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/3 px-4 py-2 border border-slate-300 rounded-md"
                />
                 <div className="flex-grow flex items-center justify-center flex-wrap gap-2">
                    <button onClick={() => setActiveCategory('All')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeCategory === 'All' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>All</button>
                    {categories.map(cat => (
                         <button key={cat} onClick={() => setActiveCategory(cat)} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeCategory === cat ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                            {categoryIcons[cat]} {cat}
                        </button>
                    ))}
                 </div>
            </div>
        </div>
        
        <ul className="space-y-4">
            {filteredResources.map((resource) => (
            <li key={resource.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex justify-between items-center transition-shadow hover:shadow-md">
                <div>
                    <p className="font-semibold text-slate-800 text-lg">{resource.title}</p>
                    <p className="text-slate-600 text-sm mt-1">{resource.description}</p>
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full mt-2 inline-block">{resource.category}</span>
                </div>
                <div className="flex-shrink-0 ml-4">
                {resource.url && (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-full transition-colors">
                        <LinkIcon className="h-6 w-6" />
                    </a>
                )}
                {resource.file && (
                    <button onClick={() => handleDownload(resource.file!)} className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors">
                        <DownloadIcon className="h-6 w-6" />
                    </button>
                )}
                </div>
            </li>
            ))}
        </ul>
        {filteredResources.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-slate-500">No resources found. Try adjusting your search or filter.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
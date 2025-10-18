
import React from 'react';
import { events } from '../data/mockData';

const Events: React.FC = () => {
    const upcomingEvents = events.filter(e => !e.isPast);
    const pastEvents = events.filter(e => e.isPast);

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Upcoming Events</h1>
            <p className="mt-4 text-xl text-slate-500">
                Join us for our next competition, workshop, or training camp.
            </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
            {upcomingEvents.length > 0 ? upcomingEvents.map(event => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-6 border-l-4 border-green-500">
                    <div className="flex-shrink-0 text-center bg-green-100 p-4 rounded-md">
                        <p className="text-green-800 text-sm font-bold uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                        <p className="text-green-600 text-3xl font-extrabold">{new Date(event.date).getDate()}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">{event.title}</h2>
                        <p className="text-slate-500 font-medium">{event.location}</p>
                        <p className="mt-2 text-slate-600">{event.description}</p>
                    </div>
                </div>
            )) : (
                <p className="text-center text-slate-500">No upcoming events scheduled. Please check back soon!</p>
            )}
        </div>
        
         <div className="text-center my-16">
            <h2 className="text-3xl font-bold text-slate-800">Past Events</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
             {pastEvents.map(event => (
                <div key={event.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center opacity-70">
                    <div>
                        <h3 className="font-semibold text-slate-700">{event.title}</h3>
                        <p className="text-sm text-slate-500">{event.location}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-600">{new Date(event.date).toLocaleDateString()}</p>
                </div>
             ))}
        </div>

      </div>
    </div>
  );
};

export default Events;

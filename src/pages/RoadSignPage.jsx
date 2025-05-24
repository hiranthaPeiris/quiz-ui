
import React, { useState } from 'react';

const RoadSignPage = () => {
  const [activeTab, setActiveTab] = useState('Danger signs');

  const renderContent = () => {
    switch (activeTab) {
      case 'Danger signs':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Danger Signs Content</h2>
            <p>This is the content for the Danger Signs tab. It includes information and details about various danger signs you might encounter on the road.</p>
            <p>Understanding these signs is crucial for safe driving and being aware of potential hazards ahead.</p>
            {[...Array(50)].map((_, i) => <p key={i} className="mb-2">Danger sign item {i + 1}: Details about a specific danger sign.</p>)}
          </div>
        );
      case 'Information signs':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Information Signs Content</h2>
            <p>This is the content for the Information Signs tab. It provides examples and explanations of different information signs.</p>
            <p>Information signs are designed to guide and inform drivers about services, destinations, and other important information.</p>
             {[...Array(50)].map((_, i) => <p key={i} className="mb-2">Information sign item {i + 1}: Details about a specific information sign.</p>)}
          </div>
        );
      case 'Priority signs':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Priority Signs Content</h2>
            <p>This is the content for the Priority Signs tab. It covers signs that indicate right-of-way and priority at intersections or narrow road sections.</p>
            <p>Knowing priority rules is essential for navigating complex traffic situations safely.</p>
             {[...Array(50)].map((_, i) => <p key={i} className="mb-2">Priority sign item {i + 1}: Details about a specific priority sign.</p>)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 text-center ${activeTab === 'Danger signs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Danger signs')}
        >
          Danger signs
        </button>
        <button
          className={`py-2 px-4 text-center ${activeTab === 'Information signs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Information signs')}
        >
          Information signs
        </button>
        <button
          className={`py-2 px-4 text-center ${activeTab === 'Priority signs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Priority signs')}
        >
          Priority signs
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default RoadSignPage;

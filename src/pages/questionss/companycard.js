import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import QuestionCard from './questioncard';
const domains = ['Web Development', 'Data Structures', 'React', 'Algorithms', 'System Design'];

const difficulties = ['Easy', 'Medium', 'Hard'];
const CompanyCard = ({ company }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeDomain, setActiveDomain] = useState(null);
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div 
          className="bg-blue-500 text-white p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-2xl font-bold">{company}</h2>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
        {isExpanded && (
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Domains:</h3>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <button
                    key={domain}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeDomain === domain 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveDomain(activeDomain === domain ? null : domain)}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>
            {activeDomain && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Questions for {activeDomain}:</h3>
                {difficulties.map((difficulty) => (
                  <QuestionCard 
                    key={difficulty} 
                    company={company} 
                    domain={activeDomain} 
                    difficulty={difficulty} 
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  export default CompanyCard;
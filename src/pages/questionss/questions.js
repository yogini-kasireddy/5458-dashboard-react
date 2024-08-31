import React, { useState, useMemo } from 'react';
import {   Search, X } from 'lucide-react';
import CompanyCard from './companycard';

const companies = [
  'Google', 'Amazon', 'Facebook', 'Apple', 'Microsoft',
  'Netflix', 'Uber', 'Airbnb', 'Twitter', 'LinkedIn'
];




const InterviewQuestions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = useMemo(() => {
    return companies.filter(company => 
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Coding Interview Questions by Company
        </h1>
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          {searchTerm ? (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          ) : (
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          )}
        </div>
        {filteredCompanies.map((company) => (
          <CompanyCard key={company} company={company} />
        ))}
        {filteredCompanies.length === 0 && (
          <p className="text-center text-gray-600 text-xl">No companies found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default InterviewQuestions;

import { useState } from 'react';
import { ExperienceInfo } from '../data/ExperienceInfo';
import EducationSection from './Education';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-darkgray dark:text-white mb-6">
          {showEducation ? 'Education' : 'Professional Experience'}
        </h2>
        <div className="w-40 h-1.5 bg-gradient-to-r from-purple to-darkpurple rounded-full mx-auto mb-6"></div>
        <button
          className="px-4 py-2 rounded-full bg-purple text-white font-medium shadow-md hover:bg-purple/80 transition-all"
          onClick={() => setShowEducation((prev) => !prev)}
          aria-label="Swap section"
        >
          {showEducation ? 'Show Experience' : 'Show Education'}
        </button>
      </div>

      {showEducation ? (
        <EducationSection />
      ) : (
        <div className="relative">
          {/* Straight line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-purple/50 to-transparent hidden md:block"></div>
          <div className="space-y-8">
            {ExperienceInfo.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Dots */}
                <div className="absolute left-3 top-20 w-4 h-4 bg-purple rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                <div className={`ml-0 md:ml-16 transition-all duration-500 ${
                  activeTab === index ? 'scale-105' : 'scale-100'
                }`}>
                  <div 
                    className={`bg-white dark:bg-darkgray/80 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                      activeTab === index ? 'ring-2 ring-purple/20 shadow-purple/10' : ''
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-darkgray dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-purple font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full font-medium text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="space-y-3">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
import { useState } from 'react';
import { EducationInfo } from '../data/EducationInfo';

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      {/* Straight line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-purple/50 to-transparent hidden md:block"></div>
      <div className="space-y-8">
        {EducationInfo.map((edu, index) => (
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
                      {edu.role}
                    </h3>
                    <p className="text-xl text-purple font-semibold">
                      {edu.company}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full font-medium text-sm">
                      {edu.duration}
                    </span>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-3">
                  {edu.description.map((item, i) => (
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
  );
}
import React from 'react';
import { techs } from '../data/techs';

const About = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-white dark:bg-darkgray rounded-2xl shadow-lg border border-gray-100 dark:border-purple/20 mt-30">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-darkgray dark:text-white mb-3">About Me</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple to-darkpurple rounded-full mx-auto"></div>
      </div>

      <div className="space-y-8 divide-y divide-gray-200 dark:divide-purple/20">
        {/* Personal Info */}
        <div className="pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  dark:bg-darkgray/50 p-4 rounded-xl">
            <div className="space-y-1 p-3 bg-white dark:bg-darkgray/80 rounded-lg shadow-sm border border-transparent hover:border-purple/20 hover:shadow-purple/30 transition-all duration-300">
              <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400">Name</span>
              <span className="font-medium text-lg text-darkgray dark:text-white">Loren Bjelokosić</span>
            </div>
            <div className="space-y-1 p-3 bg-white dark:bg-darkgray/80 rounded-lg shadow-sm border border-transparent hover:border-purple/20 hover:shadow-purple/30 transition-all duration-300">
              <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400">Age</span>
              <span className="font-medium text-lg text-darkgray dark:text-white">25</span>
            </div>
            <div className="space-y-1 p-3 bg-white dark:bg-darkgray/80 rounded-lg shadow-sm border border-transparent hover:border-purple/20 hover:shadow-purple/30 transition-all duration-300">
              <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400">City</span>
              <span className="font-medium text-lg text-darkgray dark:text-white">Dubrovnik</span>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-2">Role</span>
          <span className="p-4 font-semibold text-lg text-purple dark:text-purple">Fullstack Developer, Laravel Developer</span>
        </div>

        {/* Degree */}
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-2">Degree</span>
          <div className="p-4 bg-white border-gray-100 dark:bg-darkgray/50 rounded-lg ">
            <span className="font-medium text-darkgray dark:text-white">Bachelor of Computer Science and Programming</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-3">Tech Stack</span>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 bg-purple/10 hover:bg-purple/20 transition-colors text-purple rounded-full text-sm font-medium">
                  {tech.name}
                </span>
              ))}
            </div>
        </div>

        {/* Hobbies */}
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-3">Hobbies</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Coding','Gaming','Diving','Swimming','Training','Cooking'].map((hobby) => (
              <div key={hobby} className="p-3 bg-white dark:bg-darkgray/80 rounded-lg shadow-sm border border-gray-100 hover:border-purple/20 hover:shadow-purple/30 transition-colors dark:border-purple/10">
                <span className="font-medium text-darkgray dark:text-white">{hobby}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-3">Goals</span>
          <div className="space-y-3">
            <div className="flex items-start p-3  dark:bg-darkgray/50 rounded-lg">
              <span className="text-purple mr-3 text-lg">•</span>
              <span className="text-darkgray dark:text-white">To become better developer</span>
            </div>
            <div className="flex items-start p-3  dark:bg-darkgray/50 rounded-lg">
              <span className="text-purple mr-3 text-lg">•</span>
              <span className="text-darkgray dark:text-white">To travel the world</span>
            </div>
            <div className="flex items-start p-3  dark:bg-darkgray/50 rounded-lg">
              <span className="text-purple mr-3 text-lg">•</span>
              <span className="text-darkgray dark:text-white">To master new technologies</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-6">
          <span className="block text-xs uppercase tracking-wider text-darkgray dark:text-gray-400 mb-3">Contact</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-darkgray/80 rounded-lg shadow-sm border border-gray-100 dark:border-purple/10">
              <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Email</span>
              <a href="mailto:lorenbjelokosic1@gmail.com" className="text-purple font-medium hover:underline">lorenbjelokosic1@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
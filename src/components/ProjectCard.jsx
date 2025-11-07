import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-baby-pink to-baby-blue flex items-center justify-center">
        <div className="text-6xl">📊</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-coral bg-pink-50 rounded-full">
            {project.year}
          </span>
          <span className="text-sm text-gray-500">{project.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-baby-blue bg-opacity-30 text-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-coral font-medium hover:text-[#FF5577] transition-colors"
        >
          View on GitHub
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';

interface Project {
  title: string;
  image: string;
  description: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
          <img src={project.image} alt={project.title} className="w-full h-32 sm:h-48 object-cover" />
          <div className="p-2 sm:p-4">
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-gray-100">{project.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 line-clamp-3">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
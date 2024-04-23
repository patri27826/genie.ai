import React from 'react';
import { Card } from 'primereact/card';
import { ProjectInfo } from './Project.type';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  project: ProjectInfo;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="p-4">
      <Card title={project.name} className="h-full">
        <div className="mt-4">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-32 object-contain mb-4"
          />
          <p>
            <strong>Owner:</strong> {project.owner}
          </p>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
          <Link to={`/project/${project.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
              View Project
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;

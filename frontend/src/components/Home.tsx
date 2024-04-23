import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectInfo } from './Project.type';

const Home = () => {
  const userProjects: ProjectInfo[] = [
    {
      id: 1,
      name: 'Project 1',
      owner: 'Alice',
      status: 'Ongoing',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
    {
      id: 2,
      name: 'Project 2',
      owner: 'Bob',
      status: 'Completed',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
    {
      id: 3,
      name: 'Project 3',
      owner: 'Charlie',
      status: 'Ongoing',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
    {
      id: 4,
      name: 'Project 4',
      owner: 'David',
      status: 'Completed',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
    {
      id: 5,
      name: 'Project 5',
      owner: 'Emma',
      status: 'Ongoing',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
    {
      id: 6,
      name: 'Project 6',
      owner: 'Frank',
      status: 'Ongoing',
      thumbnail:
        'https://stickershop.line-scdn.net/stickershop/v1/product/22931619/LINEStorePC/main.png?v=1',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Your Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;

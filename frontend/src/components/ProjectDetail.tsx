import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project, Status, UserStatus } from './Project.type';
import UserStatusDrawer from './UserStatusDrawer';
import ProjectDrawer from './ProjectDrawer';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [selectedUserStatus, setSelectedUserStatus] = useState<UserStatus | null>(null);
  const [isUserStatusDrawerOpen, setIsUserStatusDrawerOpen] = useState(false);

  useEffect(() => {
    const fakeFetchProjectDetail = async () => {
      // 假数据
      const statusList: Status[] = [
        { name: 'Planning', description: 'Planning phase' },
        { name: 'In Progress', description: 'Work in progress' },
        { name: 'Not Completed', description: 'Not Completed phase' },
        { name: 'Completed', description: 'Completed phase' },
      ];

      const userStatusList: UserStatus[] = [
        { user_id: 'user1', status_name: 'Planning', comment: 'User 1 comment on Planning phase' },
        { user_id: 'user2', status_name: 'Planning', comment: 'User 2 comment on Planning phase' },
        {
          user_id: 'user3',
          status_name: 'In Progress',
          comment: 'User 3 comment on In Progress phase',
        },
        {
          user_id: 'user4',
          status_name: 'Completed',
          comment: 'User 4 comment on Completed phase',
        },
        {
          user_id: 'user5',
          status_name: 'Completed',
          comment: 'User 5 comment on Completed phase',
        },
      ];

      const fakeProjectData: Project = {
        id: id ?? '',
        name: 'Sample Project',
        owner_name: 'Alice',
        owner_id: 'alice123',
        status: 'Ongoing',
        thumbnail: 'https://example.com/thumbnail1.png',
        member_list: ['member1', 'member2', 'member3'],
        status_list: statusList,
        status_entity: userStatusList,
      };

      setTimeout(() => {
        setProject(fakeProjectData);
      }, 500);
    };

    fakeFetchProjectDetail();
  }, [id]);

  const handleEditProject = () => {
    setIsProjectDrawerOpen(true);
  };

  const handleEditUserStatus = (userStatus: UserStatus) => {
    setSelectedUserStatus(userStatus);
    setIsUserStatusDrawerOpen(true);
  };

  const closeProjectDrawer = () => {
    setIsProjectDrawerOpen(false);
  };

  const closeUserStatusDrawer = () => {
    setIsUserStatusDrawerOpen(false);
  };

  if (!project) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p>
          <strong>Owner:</strong> {project.owner_id}
        </p>
        <p>
          <strong>Members:</strong> {project.member_list.join(', ')}
        </p>
        <button
          onClick={handleEditProject}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Edit Project
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Status</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Users</h4>
              <ul className="divide-y divide-gray-200">
                {project.member_list.map((member, index) => (
                  <li key={index} className="py-2">
                    <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-center">
                      {index + 1}
                    </span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-5 gap-4">
            {project.status_list.map((status, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{status.name}</h4>
                <p className="text-sm mb-2">{status.description}</p>
                {project.status_entity.map(
                  (userStatus, idx) =>
                    userStatus.status_name === status.name && (
                      <div
                        key={idx}
                        className={`mb-2 border p-2 ${userStatus.user_id === 'user1' ? 'bg-green-200' : 'bg-white'}`}
                      >
                        <span className="font-semibold">User ID:</span> {userStatus.user_id}
                        <div className="mt-2 italic">{userStatus.comment}</div>
                        <button
                          onClick={() => handleEditUserStatus(userStatus)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                        >
                          Edit
                        </button>
                      </div>
                    ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 项目编辑器 */}
      {isProjectDrawerOpen && <ProjectDrawer project={project} onClose={closeProjectDrawer} />}

      {/* 用户状态编辑器 */}
      {selectedUserStatus && isUserStatusDrawerOpen && (
        <UserStatusDrawer
          userStatus={selectedUserStatus}
          onClose={closeUserStatusDrawer}
          statusList={project.status_list}
        />
      )}
    </div>
  );
};

export default ProjectDetail;

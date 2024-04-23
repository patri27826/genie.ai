import React, { useState } from 'react';
import { Project } from './Project.type';

type ProjectEditorProps = {
  project: Project;
  onClose: () => void;
};

const ProjectEditor: React.FC<ProjectEditorProps> = ({ project, onClose }) => {
  const [editedProject, setEditedProject] = useState<Project>({
    ...project,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 在这里提交编辑后的项目信息，比如调用后端 API
    console.log('Edited Project:', editedProject);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-6">Edit Project</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProject.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="owner_name">
              Owner Name:
            </label>
            <input
              type="text"
              id="owner_name"
              name="owner_name"
              value={editedProject.owner_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="owner_id">
              Owner ID:
            </label>
            <input
              type="text"
              id="owner_id"
              name="owner_id"
              value={editedProject.owner_id}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="status">
              Status:
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={editedProject.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="thumbnail">
              Thumbnail:
            </label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={editedProject.thumbnail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="member_list">
              Member List:
            </label>
            <textarea
              id="member_list"
              name="member_list"
              value={editedProject.member_list.join(', ')}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectEditor;

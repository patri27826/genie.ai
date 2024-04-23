import React, { useState } from 'react';
import { Status, UserStatus } from './Project.type';

type UserStatusDrawerProps = {
  userStatus: UserStatus;
  statusList: Status[];
  onClose: () => void;
};

const UserStatusDrawer: React.FC<UserStatusDrawerProps> = ({ userStatus, statusList, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState(userStatus.status_name);
  const [comment, setComment] = useState(userStatus.comment);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSaveChanges = () => {
    // 在这里执行保存更改的逻辑，可以发送请求给服务器
    console.log('Status:', selectedStatus);
    console.log('Comment:', comment);
    // 关闭编辑器
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Edit User Status</h3>
        <div className="mb-4">
          <label htmlFor="status" className="block font-semibold mb-2">
            Status:
          </label>
          <select
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
            className="border p-2 w-full rounded-md"
          >
            {statusList.map((status, index) => (
              <option key={index} value={status.name}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block font-semibold mb-2">
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className="border p-2 w-full rounded-md"
            rows={4}
          />
        </div>
        <div className="flex justify-end">
          <button onClick={handleSaveChanges} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Save Changes
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserStatusDrawer;

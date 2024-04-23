export type ProjectInfo = {
  id: number;
  name: string;
  owner: string;
  status: string;
  thumbnail: string;
};

export type Project = {
  id: string;
  name: string;
  owner_name: string;
  owner_id: string;
  status: string;
  thumbnail: string;
  member_list: string[];
  status_list: Status[];
  status_entity: UserStatus[];
};

export type Status = {
  name: string;
  description: string;
};

export type UserStatus = {
  user_id: string;
  status_name: string;
  comment: string;
};

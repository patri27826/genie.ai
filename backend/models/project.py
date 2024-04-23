from typing import List, Optional

from beanie import Document
from pydantic import UUID4, BaseModel, Field

from .base_entity import BaseEntity


class Status(Document):
    name: str
    order: int = Field(default=1)
    description: Optional[str]


class UserStatus(Document):
    user_id: UUID4
    status_name: str
    comment: str


class Project(BaseEntity, Document):
    name: str
    owner_id: UUID4
    member_list: List[UUID4]
    status_list: List[Status]
    status_entity: List[UserStatus]

    class Settings:
        name = "projects"


class ProjectCreate(BaseModel):
    name: str
    owner_id: UUID4
    member_list: List[UUID4]
    status_list: List[Status]
    status_entity: List[UserStatus]


class ProjectUpdate(BaseModel):
    name: Optional[str]
    owner_id: Optional[UUID4]
    member_list: Optional[List[UUID4]]
    status_list: Optional[List[Status]]
    status_entity: Optional[List[UserStatus]]


class ProjectDelete(BaseModel):
    pass

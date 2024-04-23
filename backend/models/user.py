from beanie import Document

from .base_entity import BaseEntity


class User(BaseEntity, Document):
    uid: str
    user_name: str
    user_email: str

    class Settings:
        name = "user"

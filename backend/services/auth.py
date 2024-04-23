import uuid
from datetime import datetime

import firebase_admin
from database.user import add_user
from firebase_admin import auth, credentials
from models.user import User
from passlib.context import CryptContext

from .common import create_new_entity

hash_helper = CryptContext(schemes=["bcrypt"])
cred = credentials.Certificate("./firebase-admin.json")
firebase_admin.initialize_app(cred)


async def get_user_info(user_id_token: str):
    decoded_token = auth.verify_id_token(id_token=user_id_token, clock_skew_seconds=1)
    uid = decoded_token["uid"]
    user_name = decoded_token["name"]
    user_email = decoded_token["email"]
    return uid, user_name, user_email


async def create_user(uid: str, user_name: str, user_email: str):
    _id, created_at, updated_at = create_new_entity()
    new_user = User(
        id=_id,
        created_at=created_at,
        updated_at=updated_at,
        deleted_at=None,
        uid=uid,
        user_name=user_name,
        user_email=user_email,
    )
    await add_user(new_user)
    return uid


async def find_or_create_user(uid: str, user_name: str, user_email: str):
    user_exists = await User.find_one(User.uid == uid)
    if user_exists is None:
        await create_user(uid, user_name, user_email)
    return uid

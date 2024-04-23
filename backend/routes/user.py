from auth.jwt_handler import sign_jwt
from fastapi import APIRouter, Body, HTTPException
from schemas.user import UserRegister
from services.auth import find_or_create_user, get_user_info

from .authorized import authorized_router

user_router = APIRouter()


@user_router.post("/login")
async def user_login(user: UserRegister = Body(...)):
    try:
        uid, user_name, user_email = await get_user_info(user.id_token)
        return sign_jwt(await find_or_create_user(uid, user_name, user_email))
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))


user_router.include_router(authorized_router, prefix="/authorized")

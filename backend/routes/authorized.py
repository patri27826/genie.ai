from auth.jwt_bearer import JWTBearer
from fastapi import APIRouter, Depends

authorized_router = APIRouter(dependencies=[Depends(JWTBearer())])


@authorized_router.post("/")
async def token_verify():
    return

from fastapi import APIRouter
from routes.project import project_router
from routes.user import user_router

router = APIRouter()

router.include_router(user_router, prefix="/user")
router.include_router(project_router, prefix="/projects")

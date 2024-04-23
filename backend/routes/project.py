from auth.jwt_bearer import JWTBearer
from database.project import add_project, get_project, update_project
from fastapi import APIRouter, Body, Depends, HTTPException
from models.project import ProjectCreate, ProjectUpdate
from pydantic import UUID4

project_router = APIRouter(dependencies=[Depends(JWTBearer())])


@project_router.post("/")
async def project_create(project: ProjectCreate = Body(...)):
    try:
        await add_project(project)
        return {"msg": "Created Success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@project_router.get("/{id}")
async def project_update(id: UUID4):
    try:
        project = await get_project(id)
        return project
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=ve.args[0])


@project_router.put("/{id}")
async def project_update(id: UUID4, project: ProjectUpdate = Body(...)):
    try:
        await update_project(id, project)
        return {"msg": "Updated Success"}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=ve.args[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@project_router.delete("/{id}")
async def project_delete(id: UUID4):
    try:
        project = await get_project(id)
        await project.delete()
        return {"msg": "Deleted Success"}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=ve.args[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

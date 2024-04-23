from pydantic import BaseModel


class UserRegister(BaseModel):
    id_token: str

    class Config:
        json_schema_extra = {"example": {"id_token": "id_token"}}


class UserLogin(BaseModel):
    access_token: str

    class Config:
        json_schema_extra = {"example": {"access_token": "access_token"}}

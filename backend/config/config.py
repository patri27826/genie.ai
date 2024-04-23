from typing import Optional

import models as models
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # database configurations
    DATABASE_URL: Optional[str] = None

    # JWT
    secret_key: str = "secret"
    algorithm: str = "HS256"

    class Config:
        env_file = ".env"
        from_attributes = True


async def initiate_database():
    client = AsyncIOMotorClient(Settings().DATABASE_URL)
    MONGO_DB_DATABASE_NAME = "progress-tracker"
    DATABASE = client[MONGO_DB_DATABASE_NAME]
    await init_beanie(database=DATABASE, document_models=models.__all__)

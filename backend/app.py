from config.config import initiate_database
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.router import router

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def start_database():
    await initiate_database()


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}


app.include_router(router, prefix="/api")

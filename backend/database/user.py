from models.user import User

user_collection = User


async def add_user(new_user: User) -> User:
    admin = await new_user.create()
    return admin

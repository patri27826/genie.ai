import uuid
from datetime import datetime


def create_new_entity():
    _id = str(uuid.uuid4())
    created_at = datetime.now()
    updated_at = datetime.now()
    return _id, created_at, updated_at

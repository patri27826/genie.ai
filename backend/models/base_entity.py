from datetime import datetime
from typing import Optional

from pydantic import UUID4, BaseModel


class BaseEntity(BaseModel):
    id: UUID4
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    deleted_at: Optional[datetime]

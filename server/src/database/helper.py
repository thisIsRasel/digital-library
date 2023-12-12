from typing import Any

from sqlalchemy import (
    CursorResult,
    Insert,
    Select,
    Update,
    create_engine
)
# from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker

from src.core.config import settings

DATABASE_URL = str(settings.DATABASE_URL)

# engine = create_async_engine(DATABASE_URL)
engine = create_engine(DATABASE_URL)

Session = sessionmaker(bind=engine)

def create_session():
    return Session()

async def fetch_one(select_query: Select | Insert | Update) -> dict[str, Any] | None:
    async with engine.begin() as conn:
        cursor: CursorResult = await conn.execute(select_query)
        return cursor.first()._asdict() if cursor.rowcount > 0 else None


async def fetch_all(select_query: Select | Insert | Update) -> list[dict[str, Any]]:
    async with engine.begin() as conn:
        cursor: CursorResult = await conn.execute(select_query)
        return [r._asdict() for r in cursor.all()]


async def execute(query: Insert | Update) -> None:
    async with engine.begin() as conn:
        await conn.execute(query)

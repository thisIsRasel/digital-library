from typing import Any

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Identity,
    Integer,
    LargeBinary,
    MetaData,
    String,
    Table,
    func,
)
from sqlalchemy.dialects.postgresql import TSVECTOR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_searchable import make_searchable

from sqlalchemy.types import TypeDecorator
from sqlalchemy_utils import TSVectorType

from src.core.constants import DB_NAMING_CONVENTION

metadata = MetaData(naming_convention=DB_NAMING_CONVENTION)

# books = Table(
#     "books",
#     metadata,
#     Column("id", Integer, Identity(), primary_key=True),
#     Column("title", String, nullable=True),
#     Column("author", String, nullable=True),
#     Column("publication_year", Integer, nullable=True),
#     Column("created_at", DateTime, server_default=func.now(), nullable=True),
#     Column("updated_at", DateTime, onupdate=func.now(), nullable=True),
#     Column("search_vector", TSVECTOR)
# )

Base = declarative_base()

make_searchable(metadata)

class Book(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    author = Column(String, nullable=False)
    publication_year = Column(Integer, nullable=False)
    summary = Column(String, nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=True)
    updated_at = Column(DateTime, onupdate=func.now(), nullable=True)
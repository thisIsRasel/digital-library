from pydantic import Field

from src.models.common import CustomModel

class BookInputModel(CustomModel):
    title: str = Field(
        title="The title of the book", max_length=100
    )
    author: str
    publication_year: int = Field(
        gt=1000
    )
    summary: str = Field(
        max_length=300
    )
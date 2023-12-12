from typing import Any, Annotated

from fastapi import APIRouter, status, Path

from src.services import book_service
from src.models.request import BookInputModel
from src.models.response import CommandResponse
from src.utils.exceptions import NotFound

from src.models.query import QueryResponse

router = APIRouter()

@router.get("/books")
def get_books(sk: str = None, page: int = 1) -> QueryResponse:
    limit = 10
    skip = (page - 1) * limit
    return book_service.get_books(sk, skip, limit)

@router.get("/books/{book_id}")
def get_book_by_id(book_id: Annotated[int, Path(title="The id of the book to get")]):
    return book_service.get_book_by_id(book_id)

@router.post("/books", status_code=status.HTTP_201_CREATED)
def create_book(book: BookInputModel):
    book_service.create_book(book)
    return CommandResponse(success=True, message="Book created successfully!")

@router.put("/books/{book_id}", status_code=status.HTTP_200_OK)
def update_book(
    book_id: Annotated[int, Path(title="The id of the book to get")], 
    book: BookInputModel):

    existing_book = book_service.get_book_by_id(book_id)
    if not existing_book:
        raise NotFound()

    book_service.update_book(book_id, book)
    return CommandResponse(success=True, message="Book updated successfully!")

@router.delete("/books/{book_id}", status_code=status.HTTP_200_OK)
def delete_book(book_id: Annotated[int, Path(title="The id of the book to get")]):

    existing_book = book_service.get_book_by_id(book_id)
    if not existing_book:
        raise NotFound()
    
    book_service.delete_book(book_id)
    return CommandResponse(success=True, message="Book deleted successfully!")
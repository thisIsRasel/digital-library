from typing import Any

from datetime import datetime
from sqlalchemy.sql import text

from src.models.request import BookInputModel
from src.models.query import QueryResponse, BookResponse

from src.database.entities import Book
from src.database.helper import create_session

def get_books(sk: str = None, skip: int = 0, limit: int = 10) -> QueryResponse:
    with create_session() as session:
        query = session.query(Book)

        if not sk is None:
            query = query\
                .filter(text("search_vector @@ to_tsquery(:search_str)"))\
                .params(search_str=sk)
            
        total_count = query.count()
        results = query.offset(skip).limit(limit).all()

        all_books = []
        for result in results:
            all_books.append(BookResponse(
                id=result.id, 
                title=result.title,
                author=result.author,
                publication_year=result.publication_year,
                summary=result.summary,
                created_at=result.created_at,
                updated_at=result.updated_at))
        
        return QueryResponse(total_count=total_count, records=all_books)
    
def get_book_by_id(book_id: int) -> dict[str, Any]:
    with create_session() as session:
        book = session.query(Book).filter_by(id=book_id).first()
        return book
    
def create_book(input: BookInputModel):
    with create_session() as session:
        book = Book(
            title = input.title, 
            author = input.author, 
            publication_year = input.publication_year,
            summary = input.summary,
            created_at = datetime.utcnow(),
            updated_at = datetime.utcnow())
        
        session.add(book)
        session.commit()

def update_book(book_id: int, input: BookInputModel):
    with create_session() as session:
        book = session.query(Book).filter_by(id=book_id).first()

        book.title = input.title
        book.author = input.author, 
        book.publication_year = input.publication_year,
        book.summary = input.summary,
        book.updated_at = datetime.utcnow()
        
        session.commit()

def delete_book(book_id: int):
    with create_session() as session:
        book = session.query(Book).filter_by(id=book_id).first()
        session.delete(book)
        session.commit()
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Book from "./Book";
import { GetAllBooks } from "../store/API/Boock.api";
import { Link } from "react-router-dom";
const ListBocks = () => {
  const { MyBooks } = useSelector(
    (state) => state.api
  );
  const dispatch = useDispatch();
  useEffect(() => {
    GetAllBooks(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {MyBooks.Currently.map((book) => (
                  <Book
                    key={book.id}
                    prop={{
                      url: book.imageLinks,
                      title: book.title,
                      author: book.authors,
                      book: book,
                    }}
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {MyBooks.Want.map((book) => (
                  <Book
                    key={book.id}
                    prop={{
                      url: book.imageLinks,
                      title: book.title,
                      author: book.authors,
                      book: book,
                    }}
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {MyBooks.Read.map((book) => (
                  <Book
                    key={book.id}
                    prop={{
                      url: book.imageLinks,
                      title: book.title,
                      author: book.authors,
                      book: book,
                    }}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Search for Book</Link>
      </div>
    </div>
  );
};

export default ListBocks;

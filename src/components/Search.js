import { useDispatch } from "react-redux";
import { SearchForBook } from "../store/API/Boock.api";
import { useState, useEffect } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
const Search = () => {
  useEffect(() => {
    checkEmpty();
  }, []);
  const [SearchBooks, SetSearchBooks] = useState([]);
  const [load, setLoad] = useState(false);
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const AddBooks = async (e) => {
    const event = e.target.value;
    if (event) {
      setEmpty(false);
      setLoad(true);
      const data = await SearchForBook(dispatch, event);
      setLoad(false);
      if (event) {
        SetSearchBooks(data);
      } else {
        SetSearchBooks([]);
      }
    } else {
      setEmpty(true);
    }
  };
  const checkEmpty = () => {
    if (empty) {
      SetSearchBooks([]);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => {
              AddBooks(e);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {SearchBooks.length > 0 &&
            !load &&
            !empty &&
            SearchBooks.map((book) => (
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
  );
};

export default Search;

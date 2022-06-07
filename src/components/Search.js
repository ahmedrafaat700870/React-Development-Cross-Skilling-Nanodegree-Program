import { useDispatch, useSelector } from "react-redux";
import { SearchForBook } from "../store/API/Boock.api";
import Book from "./Book";
import { Link } from "react-router-dom";
const Search = () => {
  const { SearchBooks , loading  , failed} = useSelector((state) => state.api);
  const dispatch = useDispatch();
  return (
    
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => {
              SearchForBook(dispatch, e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {SearchBooks.length > 0 && !failed && !loading &&
            SearchBooks.map((book) => (
              <Book
                key={book.id}
                prop={{
                  url: book.imageLinks,
                  title: book.title,
                  author: book.authors,
                  book: book
                }}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;

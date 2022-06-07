import { useDispatch, useSelector } from "react-redux";
import { SearchForBook } from "../store/API/Boock.api";
import Book from "./Book";
import { Link } from "react-router-dom";
const Search = () => {
  const { SearchBooks } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
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
          {SearchBooks.length > 0 &&
            SearchBooks.map((book) => (
              <Book
                key={book.id}
                prop={{
                  url: book.imageLinks.thumbnail,
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

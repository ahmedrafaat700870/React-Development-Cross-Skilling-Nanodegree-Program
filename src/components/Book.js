import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateBook , SearchForBook} from "../store/API/Boock.api";
const Book = ({prop}) => {
    const dispatch = useDispatch();
    const [value , setValue] = useState(prop.shelf);
    const change = async (e) => {
      setValue(e.target.value);
      UpdateBook(dispatch , prop.book , e.target.value);
      const data = await SearchForBook(dispatch, prop.value);
      prop.SetSearchBooks(data)
    }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage:
                `url(${prop.url ? prop.url.thumbnail : 'none'})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => {
              change(e)}} value={value}>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
              <option value="move" disabled >
                Move to...
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{prop.title}</div>
        <div className="book-authors">{prop.author}</div>
      </div>
    </li>
  );
};
export default Book;

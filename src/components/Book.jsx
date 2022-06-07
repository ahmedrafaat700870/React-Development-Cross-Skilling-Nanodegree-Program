import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateBook, GetAllBooks } from "../store/API/Boock.api";
import { useNavigate } from "react-router-dom";
const Book = ({ prop }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const change = (e) => {
    setValue(e.target.value);
    UpdateBook(dispatch, prop.book, e.target.value);
    GetAllBooks(dispatch);
    navigate("/home");
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${prop.url})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                change(e);
              }}
              value={value}
            >
              <option style={{ opacity: ".2", color: "red" }} value="move">
                Move to...
              </option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
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

import {
  loading,
  success,
  failed,
  SearchBooks,
  AllMyBook,
} from "../slices/Api.Slice";
import { Sort } from "../help/Sorting";
import * as FetchApi from "../../BooksAPI";
export const GetAllBooks = async (dispatch) => {
  dispatch(loading());
  try {
    const data = await FetchApi.getAll();
    dispatch(AllMyBook(data));
    // console.log(data);
    Sort(dispatch, data);
    dispatch(success());
  } catch (error) {
    dispatch(failed());
  }
};
export const GetBookById = async (dispatch, id) => {
  dispatch(loading());
  try {
    const data = await FetchApi.get(id);
    console.log(data);
    dispatch(success());
  } catch (error) {
    dispatch(failed());
  }
};
export const UpdateBook = async (dispatch, book, shelf) => {
  dispatch(loading());
  try {
    const data = await FetchApi.update(book, shelf);
    console.log(data);
    // dispatch(success());
  } catch (error) {
    dispatch(failed());
  }
};
export const SearchForBook = async (dispatch, book) => {
  if (book) {
    dispatch(loading());
    try {
      const data = await FetchApi.search(book);
      // console.log(data);
      dispatch(SearchBooks(data));
      dispatch(success());
    } catch (error) {
      dispatch(failed());
    }
  }
};

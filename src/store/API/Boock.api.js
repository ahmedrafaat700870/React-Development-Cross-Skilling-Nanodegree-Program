import { loading, success, failed ,SearchBooks,AllMyBook , EmptySearchBooks} from "../slices/Api.Slice";
import { Sort } from '../help/Sorting'
import * as FetchApi from "../../BooksAPI";
export const GetAllBooks = async (dispatch) => {
  dispatch(loading());
  try {
    const data = await FetchApi.getAll();
    dispatch(AllMyBook(data))
    Sort(dispatch, data)
    dispatch(success());
  } catch (error) {
    dispatch(failed());
  }
};
export const GetBookById = async (dispatch, id) => {
  dispatch(loading());
  try {
    await FetchApi.get(id);
    dispatch(success());
  } catch (error) {
    dispatch(failed());
  }
};
export const UpdateBook = async (dispatch, book, shelf) => {
  dispatch(loading());
  try {
    await FetchApi.update(book, shelf);
  } catch (error) {
    dispatch(failed());
  }
};
export const SearchForBook = async (dispatch, book) => {
  if(book) {
    dispatch(loading());
    try {
      const data = await FetchApi.search(book);
        if(!data.error) {
          dispatch(EmptySearchBooks());
          dispatch(SearchBooks(data))
          dispatch(success());
        } else {
          dispatch(EmptySearchBooks())
          dispatch(failed());
        }
    } catch (error) {
      dispatch(failed());
    }
  }
};

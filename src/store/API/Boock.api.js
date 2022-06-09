import { loading, success, failed ,AllMyBook  } from "../slices/Api.Slice";
import { FilterBooks, Sort } from '../help/Sorting'
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
    dispatch(loading());
    if(book) {
      try {
        const data = await FetchApi.search(book);
        const NewBooks = await FilterBooks(data)
          if(NewBooks !== null) {
            NewBooks ?  dispatch(success()) : dispatch(failed()) ; 
            return  NewBooks ? NewBooks : [] ;
          } else {
            dispatch(failed());
            return [] ;
          }
      } catch (error) {
        dispatch(failed())
        return []
      }
    }
 
};

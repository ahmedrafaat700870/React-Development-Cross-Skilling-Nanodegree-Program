import { Currently, Want, Read } from "../slices/Api.Slice";
import * as FetchApi from '../../BooksAPI'
export const Sort = (dispatch, AllBooks) => {
  const currently = [];
  const want = [];
  const read = [];
  AllBooks.forEach((element) => {
    if (element.shelf === "currentlyReading") {
      currently.push(element);
    } else if (element.shelf === "wantToRead") {
      want.push(element);
    } else if (element.shelf === "read") {
      read.push(element);
    }
  });
  dispatch(Currently(currently));
  dispatch(Want(want));
  dispatch(Read(read));
};
export const FilterBooks = async (AllBooks ) => {
  if(!AllBooks.error) {
    const MyBooks = await FetchApi.getAll()
    const MyBooksIds = MyBooks.map(book => book.id)
    return AllBooks.filter(book =>  !MyBooksIds.includes(book.id) )
  } else {
    return null ;
  }
}

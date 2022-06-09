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
    const Books = [] ;
    const MyBooks = await FetchApi.getAll()
    MyBooks.forEach(el => {
      AllBooks.forEach(book => {
        if(book.id === el.id ) {
          book.shelf = el.shelf ;
          Books.push(book);          
        }
        else {
          Books.push(book);          
        }
      })
    })
    const filter = Books.filter((item , pos , self) => {
      return self.indexOf(item) === pos ;
    }).filter(el => {
      if(el.shelf) {
        return el 
      } else {
        return el.shelf = 'none'
      }
    })
    return filter ;
  } else {
    return null ;
  }
}

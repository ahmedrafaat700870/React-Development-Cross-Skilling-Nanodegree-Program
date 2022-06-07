import { Currently, Want, Read } from "../slices/Api.Slice";
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

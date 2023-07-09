// Library Modification //
import { Book } from "./Book.js";
import { myLibrary, bookInput } from "./main.js";
import { renderBooks } from "./render-books.js";
function addBookToLibrary() {
    myLibrary.push(new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead));
}
function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}
export { addBookToLibrary, deleteBook };

import { addBookToLibrary } from "./library-modification.js";
import { renderBooks } from "./render-books.js";
let myLibrary = [];
const bookInput = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};
const addBookForm = document.querySelector('.add-book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fillBookInput(e);
    addBookForm.reset();
    hideModal();
    addBookToLibrary();
    renderBooks();
});
function fillBookInput(e) {
    const data = new FormData(e.target);
    let newBook = {};
    for (let [name, value] of data)
        newBook[name] = value;
    bookInput.title = newBook["book-title"];
    bookInput.author = newBook["book-author"];
    bookInput.pages = newBook["book-pages"];
    bookInput.isRead = newBook["book-read"];
}
function hideModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
}
// Default values //
bookInput.title = "The Happiness Hypothesis";
bookInput.author = "Jonathan Haidt";
bookInput.pages = 320;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "The Mindful Geek";
bookInput.author = "Michael Taft";
bookInput.pages = 242;
bookInput.isRead = false;
addBookToLibrary();
bookInput.title = "Hold Me Tight";
bookInput.author = "Sue Johnson";
bookInput.pages = 320;
bookInput.isRead = true;
addBookToLibrary();
renderBooks();
export { myLibrary, bookInput };

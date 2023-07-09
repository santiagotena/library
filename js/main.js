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
    const data = new FormData(e.target);
    let newBook = {};
    for (let [name, value] of data)
        newBook[name] = value;
    bookInput.title = newBook["book-title"];
    bookInput.author = newBook["book-author"];
    bookInput.pages = newBook["book-pages"];
    bookInput.isRead = newBook["book-read"];
    addBookToLibrary();
    renderBooks();
    addBookForm.reset();
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
});
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
// bookInput.title = "Models";
// bookInput.author = "Mark Manson";
// bookInput.pages = 260;
// bookInput.isRead = true;
// addBookToLibrary();
// bookInput.title = "Beyond Order";
// bookInput.author = "Jordan Peterson";
// bookInput.pages = 432;
// bookInput.isRead = true;
// addBookToLibrary();
// bookInput.title = "How to Live a Good Life";
// bookInput.author = "Massimo Pigliucci et al.";
// bookInput.pages = 257;
// bookInput.isRead = false;
// addBookToLibrary();
// renderBooks();
// To do //
// [x] Typescript use
// [x] Modal CSS
// [ ] Refactor
// [x] Multiple files
////////////////////////////////////////////////

import {addBookToLibrary} from "./library-modification.js";
import {renderBooks} from "./render-books.js";

let myLibrary : Object[] = [];

const bookInput: {title: string, author: string, pages: number, isRead: boolean} = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};

function fillBookInput(e : SubmitEvent): void {
    const data: FormData = new FormData(e.target as HTMLFormElement);
    let newBook = {};
    for (let [name , value] of data)
        newBook[name] = value;
    bookInput.title = newBook["book-title"];
    bookInput.author = newBook["book-author"];
    bookInput.pages = newBook["book-pages"];
    bookInput.isRead = newBook["book-read"];
}

function hideModal(): void {
    const modal: HTMLElement = document.querySelector("#modal") as HTMLElement;
    modal.style.display = "none";
}

const addBookForm: HTMLFormElement = document.querySelector('.add-book-form') as HTMLFormElement;
addBookForm.addEventListener('submit', (e : SubmitEvent): void => {
    e.preventDefault();
    fillBookInput(e);
    addBookForm.reset();
    hideModal();
    addBookToLibrary();
    renderBooks();
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

export {myLibrary, bookInput};

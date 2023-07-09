// import {Book} from "./Book.js";
// Global scope //
let myLibrary = [];
const bookInput = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};
// Book //
class Book {
    constructor(title, author, pages, isRead) {
        this.info = () => {
            let readStatement = "not read yet";
            if (this.isRead)
                readStatement = "already read";
            return (`${this.title} by ${this.author}, ${this.pages}, ${readStatement}`);
        };
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}
// Modal //
const addBookForm = document.querySelector('.add-book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const modal = document.querySelector("#modal");
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
    modal.style.display = "none";
});
// Library Modification //
function addBookToLibrary() {
    myLibrary.push(new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead));
}
function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}
// DOM Modification //
function createBookElement(elementName, content, className) {
    const element = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}
function createReadElement(bookItem, book) {
    const read = document.createElement('div');
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
    const input = document.createElement('input');
    input.type = 'checkbox';
    if (book.isRead) {
        bookItem.setAttribute('class', "book read-checked");
        input.checked = true;
    }
    input.addEventListener('click', (e) => {
        if (e.target["checked"]) {
            bookItem.setAttribute('class', "book read-checked");
            book.isRead = true;
        }
        else {
            bookItem.setAttribute('class', "book read-unchecked");
            book.isRead = false;
        }
    });
    read.appendChild(input);
    return read;
}
function createBookCard(book, index) {
    const add = document.querySelector(".add-btn");
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'book read-unchecked');
    bookItem.appendChild(createBookElement('h1', `${book.title}`, 'book-title'));
    bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`, 'book-author'));
    bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'));
    bookItem.appendChild(createReadElement(bookItem, book));
    bookItem.appendChild(createBookElement('button', "X", 'delete'));
    bookItem.querySelector('.delete').addEventListener('click', () => {
        deleteBook(index);
    });
    add.insertAdjacentElement('beforebegin', bookItem);
}
// Display books //
function renderBooks() {
    const books = document.querySelector(".books");
    books.textContent = "";
    const add = document.createElement('div');
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);
    const modal = document.querySelector("#modal");
    const span = document.querySelector('.close');
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    add.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    myLibrary.map((book, index) => {
        createBookCard(book, index);
    });
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
// [ ] Multiple files

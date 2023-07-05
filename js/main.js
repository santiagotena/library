// Global scope //
let myLibrary = [];
const bookInput = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};
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
// Selectors
// const books: Element = document.querySelector(".books");
// Library Modification
function addBookToLibrary() {
    myLibrary.push(new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead));
}
// function displayLibrary():void {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(myLibrary[i]);
//     }
// }
// DOM Modification
function createBookElement(elementName, content, className) {
    const element = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}
function createBookItem(book, index) {
    const books = document.querySelector(".books");
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'card book');
    bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`, 'book-title'));
    bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`, 'book-author'));
    bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'));
    // bookItem.appendChild(createReadElement(bookItem, book));
    books.insertAdjacentElement('beforeend', bookItem);
}
function renderBooks() {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}
// Event listeners
// Starting conditions
// bookInput.title = "Harry Potter and the Philosopher's Stone";
// bookInput.author = "J. K. Rowling";
// bookInput.pages = 223;
// bookInput.isRead = true;
// addBookToLibrary();
// bookInput.title = "The Hobbit";
// bookInput.author = "J. R. R. Tolkien";
// bookInput.pages = 310;
// bookInput.isRead = false;
// addBookToLibrary();
// displayLibrary();
// renderBooks();
bookInput.title = "The Happiness Hypothesis";
bookInput.author = "Jonathan Haidt";
bookInput.pages = 320;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "The Mindful Geek";
bookInput.author = "Michael Taft";
bookInput.pages = 242;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "Hold Me Tight";
bookInput.author = "Sue Johnson";
bookInput.pages = 320;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "Models";
bookInput.author = "Mark Manson";
bookInput.pages = 260;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "Beyond Order";
bookInput.author = "Jordan Peterson";
bookInput.pages = 432;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "How to Live a Good Life";
bookInput.author = "Massimo Pigliucci et al.";
bookInput.pages = 257;
bookInput.isRead = false;
addBookToLibrary();
// displayLibrary();
renderBooks();

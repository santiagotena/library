// Global scope //
let myLibrary = [];
let currentLibraryIndex = 0;
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
            if (this._isRead)
                readStatement = "already read";
            return (`${this._title} by ${this._author}, ${this._pages}, ${readStatement}`);
        };
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._isRead = isRead;
    }
}
// Selectors
const books = document.querySelector(".books");
// Library Modification
function addBookToLibrary() {
    myLibrary[currentLibraryIndex] = new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead);
    currentLibraryIndex++;
}
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}
// DOM Modification
function createBookElement(elementName, content, className) {
    const element = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}
function createBookItem(book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'card book');
    bookItem.appendChild(createBookElement('h1', `Title: ${bookInput.title}`, 'book-title'));
    bookItem.appendChild(createBookElement('h1', `Author: ${bookInput.author}`, 'book-author'));
    bookItem.appendChild(createBookElement('h1', `Pages: ${bookInput.pages}`, 'book-pages'));
    books.insertAdjacentElement('afterbegin', bookItem);
}
function renderBooks() {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}
// Event listeners
// Starting conditions
bookInput.title = "Harry Potter and the Philosopher's Stone";
bookInput.author = "J. K. Rowling";
bookInput.pages = 223;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "The Hobbit";
bookInput.author = "J. R. R. Tolkien";
bookInput.pages = 310;
bookInput.isRead = false;
addBookToLibrary();
displayLibrary();
renderBooks();

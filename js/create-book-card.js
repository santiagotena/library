import { deleteBook } from "./library-modification.js";
function createBookElement(elementName, content, className) {
    const element = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}
function setupReadElement(read) {
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
}
function addCheckbox(book, bookItem) {
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
    return input;
}
function createReadElement(bookItem, book) {
    const read = document.createElement('div');
    setupReadElement(read);
    const input = addCheckbox(book, bookItem);
    read.appendChild(input);
    return read;
}
function fillBookItem(bookItem, book, index) {
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'book read-unchecked');
    bookItem.appendChild(createBookElement('h1', `${book.title}`, 'book-title'));
    bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`, 'book-author'));
    bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'));
}
function addDeleteButton(bookItem, index) {
    bookItem.appendChild(createBookElement('button', "X", 'delete'));
    bookItem.querySelector('.delete').addEventListener('click', () => {
        deleteBook(index);
    });
}
function addReadElement(bookItem, book) {
    bookItem.appendChild(createReadElement(bookItem, book));
}
function insertBook(bookItem) {
    const add = document.querySelector(".add-btn");
    add.insertAdjacentElement('beforebegin', bookItem);
}
function createBookCard(book, index) {
    const bookItem = document.createElement('div');
    fillBookItem(bookItem, book, index);
    addReadElement(bookItem, book);
    addDeleteButton(bookItem, index);
    insertBook(bookItem);
}
export { createBookCard };

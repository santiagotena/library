import { deleteBook } from "./library-modification.js";
function createBookCard(book, index) {
    const bookCard = document.createElement('div');
    fillBookCard(bookCard, book, index);
    addReadElement(bookCard, book);
    addDeleteButton(bookCard, index);
    insertBook(bookCard);
}
function fillBookCard(bookCard, book, index) {
    bookCard.setAttribute('id', index.toString());
    bookCard.setAttribute('key', index.toString());
    bookCard.setAttribute('class', 'book read-unchecked');
    bookCard.appendChild(createBookElement('h1', `${book.title}`, 'book-title'));
    bookCard.appendChild(createBookElement('h1', `Author: ${book.author}`, 'book-author'));
    bookCard.appendChild(createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'));
}
function createBookElement(elementName, content, className) {
    const element = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}
function addReadElement(bookCard, book) {
    bookCard.appendChild(createReadElement(bookCard, book));
}
function createReadElement(bookCard, book) {
    const read = document.createElement('div');
    setupReadElement(read);
    const input = addCheckbox(book, bookCard);
    read.appendChild(input);
    return read;
}
function setupReadElement(read) {
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
}
function addCheckbox(book, bookCard) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    if (book.isRead) {
        bookCard.setAttribute('class', "book read-checked");
        input.checked = true;
    }
    input.addEventListener('click', (e) => {
        if (e.target["checked"]) {
            bookCard.setAttribute('class', "book read-checked");
            book.isRead = true;
        }
        else {
            bookCard.setAttribute('class', "book read-unchecked");
            book.isRead = false;
        }
    });
    return input;
}
function addDeleteButton(bookCard, index) {
    bookCard.appendChild(createBookElement('button', "X", 'delete'));
    bookCard.querySelector('.delete').addEventListener('click', () => {
        deleteBook(index);
    });
}
function insertBook(bookCard) {
    const add = document.querySelector(".add-btn");
    add.insertAdjacentElement('beforebegin', bookCard);
}
export { createBookCard };

import { deleteBook } from "./library-modification.js";
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
    const add = document.querySelector(".add-btn");
    add.insertAdjacentElement('beforebegin', bookItem);
}
export { createBookCard };

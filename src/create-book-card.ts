import {deleteBook} from "./library-modification.js";
function createBookCard(book, index: number): void {
    const bookItem: HTMLElement = document.createElement('div');
    fillBookItem(bookItem, book, index);
    addReadElement(bookItem, book);
    addDeleteButton(bookItem, index);
    insertBook(bookItem);
}

function fillBookItem(bookItem: HTMLElement, book, index: number): void {
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'book read-unchecked');
    bookItem.appendChild(
        createBookElement('h1', `${book.title}`, 'book-title')
    );
    bookItem.appendChild(
        createBookElement('h1', `Author: ${book.author}`, 'book-author')
    );
    bookItem.appendChild(
        createBookElement('h1', `Pages: ${book.pages}`, 'book-pages')
    );
}

function createBookElement(elementName: string, content: string, className: string): HTMLElement {
    const element : HTMLElement = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function addReadElement(bookItem: HTMLElement, book) {
    bookItem.appendChild(createReadElement(bookItem, book));
}

function createReadElement(bookItem: HTMLElement, book): HTMLElement {
    const read : HTMLElement = document.createElement('div');
    setupReadElement(read);
    const input: HTMLElement = addCheckbox(book, bookItem);
    read.appendChild(input);
    return read;
}

function setupReadElement(read: HTMLElement): void {
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
}

function addCheckbox(book, bookItem: HTMLElement): HTMLElement {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';
    if (book.isRead) {
        bookItem.setAttribute('class', "book read-checked");
        input.checked = true;
    }
    input.addEventListener('click', (e : MouseEvent ): void => {
        if (e.target["checked"]) {
            bookItem.setAttribute('class', "book read-checked");
            book.isRead = true;
        } else {
            bookItem.setAttribute('class', "book read-unchecked");
            book.isRead = false;
        }
    });
    return input;
}

function addDeleteButton(bookItem: HTMLElement, index: number): void {
    bookItem.appendChild(createBookElement('button', "X", 'delete'));
    bookItem.querySelector('.delete').addEventListener('click', (): void => {
        deleteBook(index);
    })
}

function insertBook(bookItem: HTMLElement): void {
    const add: HTMLElement = document.querySelector(".add-btn");
    add.insertAdjacentElement('beforebegin', bookItem);
}

export {createBookCard};
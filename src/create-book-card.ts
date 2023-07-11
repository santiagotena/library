import {deleteBook} from "./library-modification.js";
function createBookCard(book, index: number): void {
    const bookCard: HTMLElement = document.createElement('div');
    fillBookCard(bookCard, book, index);
    addReadElement(bookCard, book);
    addDeleteButton(bookCard, index);
    insertBook(bookCard);
}

function fillBookCard(bookCard: HTMLElement, book, index: number): void {
    bookCard.setAttribute('id', index.toString());
    bookCard.setAttribute('key', index.toString());
    bookCard.setAttribute('class', 'book read-unchecked');
    bookCard.appendChild(
        createBookElement('h1', `${book.title}`, 'book-title')
    );
    bookCard.appendChild(
        createBookElement('h1', `Author: ${book.author}`, 'book-author')
    );
    bookCard.appendChild(
        createBookElement('h1', `Pages: ${book.pages}`, 'book-pages')
    );
}

function createBookElement(elementName: string, content: string, className: string): HTMLElement {
    const element : HTMLElement = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function addReadElement(bookCard: HTMLElement, book) {
    bookCard.appendChild(createReadElement(bookCard, book));
}

function createReadElement(bookCard: HTMLElement, book): HTMLElement {
    const read : HTMLElement = document.createElement('div');
    setupReadElement(read);
    const input: HTMLElement = addCheckbox(book, bookCard);
    read.appendChild(input);
    return read;
}

function setupReadElement(read: HTMLElement): void {
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
}

function addCheckbox(book, bookCard: HTMLElement): HTMLElement {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';
    if (book.isRead) {
        bookCard.setAttribute('class', "book read-checked");
        input.checked = true;
    }
    input.addEventListener('click', (e : MouseEvent ): void => {
        if (e.target["checked"]) {
            bookCard.setAttribute('class', "book read-checked");
            book.isRead = true;
        } else {
            bookCard.setAttribute('class', "book read-unchecked");
            book.isRead = false;
        }
    });
    return input;
}

function addDeleteButton(bookCard: HTMLElement, index: number): void {
    bookCard.appendChild(createBookElement('button', "X", 'delete'));
    bookCard.querySelector('.delete').addEventListener('click', (): void => {
        deleteBook(index);
    })
}

function insertBook(bookCard: HTMLElement): void {
    const add: HTMLElement = document.querySelector(".add-btn");
    add.insertAdjacentElement('beforebegin', bookCard);
}

export {createBookCard};
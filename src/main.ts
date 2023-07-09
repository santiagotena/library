// import {Book} from "./Book.js";

// Global scope //
let myLibrary : Object[] = [];

const bookInput: {title: string, author: string, pages: number, isRead: boolean} = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};

// Book //
class Book {
    title: string;
    author: string;
    pages: number;
    isRead: boolean;

    constructor(title: string, author: string, pages: number, isRead: boolean) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info = (): string => {
        let readStatement: string = "not read yet";
        if (this.isRead)
            readStatement = "already read";
        return (`${this.title} by ${this.author}, ${this.pages}, ${readStatement}`)
    }
}

// Modal //
const addBookForm: HTMLFormElement = document.querySelector('.add-book-form') as HTMLFormElement;
addBookForm.addEventListener('submit', (e : SubmitEvent): void => {
    e.preventDefault();
    const data: FormData = new FormData(e.target as HTMLFormElement);
    const modal: HTMLElement = document.querySelector("#modal") as HTMLElement;

    let newBook = {};
    for (let [name , value] of data)
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
function addBookToLibrary(): void {
    myLibrary.push(new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead));
}

function deleteBook(index: number): void {
    myLibrary.splice(index, 1);
    renderBooks();
}

// DOM Modification //
function createBookElement(elementName: string, content: string, className: string): HTMLElement {
    const element : HTMLElement = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function createReadElement(bookItem: HTMLElement, book): HTMLElement {
    const read : HTMLElement = document.createElement('div');
    read.setAttribute('class', 'book-read');
    read.appendChild(createBookElement('h1', "Read Status: ", "book-status"));
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
    read.appendChild(input);
    return read;

}

function createBookCard(book, index: number): void {
    const add: HTMLElement = document.querySelector(".add-btn");
    const bookItem: HTMLElement = document.createElement('div');
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
    bookItem.appendChild(createReadElement(bookItem, book));
    bookItem.appendChild(createBookElement('button', "X", 'delete'));

    bookItem.querySelector('.delete').addEventListener('click', (): void => {
        deleteBook(index);
    })
    add.insertAdjacentElement('beforebegin', bookItem);
}

// Display books //
function renderBooks(): void {
    const books: HTMLElement = document.querySelector(".books");
    books.textContent = "";
    const add: HTMLElement = document.createElement('div');
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);

    const modal: HTMLElement = document.querySelector("#modal") as HTMLElement;
    const span: HTMLElement = document.querySelector('.close');

    window.addEventListener('click', (e : MouseEvent): void => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    span.addEventListener('click', (): void => {
       modal.style.display = 'none';
    });

    add.addEventListener('click', (): void => {
        modal.style.display = 'block';
    });

    myLibrary.map((book : Object, index : number ): void => {
        createBookCard(book, index);
    })
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
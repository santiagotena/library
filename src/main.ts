// Global scope //
let myLibrary : Object[] = [];

let currentLibraryIndex: number = 0;

const bookInput: {title: string, author: string, pages: number, isRead: boolean} = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};

class Book {
    private _title: string;
    private _author: string;
    private _pages: number;
    private _isRead: boolean;

    constructor(title: string, author: string, pages: number, isRead: boolean) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._isRead = isRead;
    }

    info = (): string => {
        let readStatement: string = "not read yet";
        if (this._isRead)
            readStatement = "already read";
        return (`${this._title} by ${this._author}, ${this._pages}, ${readStatement}`)
    }
}

// Selectors
const books: Element = document.querySelector(".books");


// Library Modification
function addBookToLibrary(): void {
    myLibrary[currentLibraryIndex] = new Book(  bookInput.title,
                                                bookInput.author,
                                                bookInput.pages,
                                                bookInput.isRead);
    currentLibraryIndex++;
}

function displayLibrary():void {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

// DOM Modification
function createBookElement(elementName: string, content: string, className: string): HTMLElement {
    const element : HTMLElement = document.createElement(elementName);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

function createBookItem(book: Object, index: number): void {
    const bookItem : HTMLElement = document.createElement('div');
    bookItem.setAttribute('id', index.toString());
    bookItem.setAttribute('key', index.toString());
    bookItem.setAttribute('class', 'card book');

    bookItem.appendChild(
        createBookElement('h1', `Title: ${bookInput.title}`, 'book-title')
    );
    bookItem.appendChild(
        createBookElement('h1', `Author: ${bookInput.author}`, 'book-author')
    );
    bookItem.appendChild(
        createBookElement('h1', `Pages: ${bookInput.pages}`, 'book-pages')
    );
    books.insertAdjacentElement('afterbegin', bookItem);
}

function renderBooks(): void {
    myLibrary.map((book : Object, index : number ): void => {
        createBookItem(book, index);
    })
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
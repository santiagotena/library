import {myLibrary} from "./main.js";
import {createBookCard} from "./create-book-card.js";

function renderBooks(): void {
    const books: HTMLElement = document.querySelector(".books");
    const add: HTMLElement = document.createElement('div');
    const modal: HTMLElement = document.querySelector("#modal");
    const span: HTMLElement = document.querySelector('.close');

    createAddButton(books, add);
    addModalEventListeners(span, add, modal);
    displayBooks();
}
function createAddButton(books: HTMLElement, add: HTMLElement): void {
    books.textContent = "";
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);
}

function addModalEventListeners(span: HTMLElement, add: HTMLElement, modal: HTMLElement): void {
    span.addEventListener('click', (): void => {
        modal.style.display = 'none';
    });
    add.addEventListener('click', (): void => {
        modal.style.display = 'block';
    });
    window.addEventListener('click', (e : MouseEvent): void => {
        if (e.target == modal)
            modal.style.display = "none";
    });
}

function displayBooks(): void {
    myLibrary.map((book : Object, index : number ): void => {
        createBookCard(book, index);
    })
}

export {renderBooks};
import {myLibrary} from "./main.js";
import {createBookCard} from "./create-book-card.js";

function renderBooks(): void {
    const addButton: HTMLElement = document.createElement('div');
    const books: HTMLElement = document.querySelector(".books");
    const modal: HTMLElement = document.querySelector("#modal");
    const closeButton: HTMLElement = document.querySelector('.close');

    createAddButton(books, addButton);
    addModalEventListeners(closeButton, addButton, modal);
    displayBooks();
}
function createAddButton(books: HTMLElement, addButton: HTMLElement): void {
    books.textContent = "";
    addButton.setAttribute('class', 'add-btn');
    addButton.textContent = "+";
    books.appendChild(addButton);
}

function addModalEventListeners(closeButton: HTMLElement, addButton: HTMLElement, modal: HTMLElement): void {
    closeButton.addEventListener('click', (): void => {
        modal.style.display = 'none';
    });
    addButton.addEventListener('click', (): void => {
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
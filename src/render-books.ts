// Display books //
import {myLibrary} from "./main.js";
import {createBookCard} from "./create-book-card.js";

function renderBooks(): void {

    const books: HTMLElement = document.querySelector(".books");
    books.textContent = "";
    const add: HTMLElement = document.createElement('div');
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);

    const modal: HTMLElement = document.querySelector("#modal") as HTMLElement;
    const span: HTMLElement = document.querySelector('.close');
    span.addEventListener('click', (): void => {
        modal.style.display = 'none';
    });

    add.addEventListener('click', (): void => {
        modal.style.display = 'block';
    });
    window.addEventListener('click', (e : MouseEvent): void => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    myLibrary.map((book : Object, index : number ): void => {
        createBookCard(book, index);
    })
}

export {renderBooks};
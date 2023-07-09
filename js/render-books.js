import { myLibrary } from "./main.js";
import { createBookCard } from "./create-book-card.js";
function createAddButton(books, add) {
    books.textContent = "";
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);
}
function addModalEventListeners(span, add, modal) {
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    add.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal)
            modal.style.display = "none";
    });
}
function displayBooks() {
    myLibrary.map((book, index) => {
        createBookCard(book, index);
    });
}
function renderBooks() {
    const books = document.querySelector(".books");
    const add = document.createElement('div');
    const modal = document.querySelector("#modal");
    const span = document.querySelector('.close');
    createAddButton(books, add);
    addModalEventListeners(span, add, modal);
    displayBooks();
}
export { renderBooks };

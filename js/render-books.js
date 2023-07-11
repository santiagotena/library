import { myLibrary } from "./main.js";
import { createBookCard } from "./create-book-card.js";
function renderBooks() {
    const addButton = document.createElement('div');
    const books = document.querySelector(".books");
    const modal = document.querySelector("#modal");
    const closeButton = document.querySelector('.close');
    createAddButton(books, addButton);
    addModalEventListeners(closeButton, addButton, modal);
    displayBooks();
}
function createAddButton(books, addButton) {
    books.textContent = "";
    addButton.setAttribute('class', 'add-btn');
    addButton.textContent = "+";
    books.appendChild(addButton);
}
function addModalEventListeners(closeButton, addButton, modal) {
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    addButton.addEventListener('click', () => {
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
export { renderBooks };

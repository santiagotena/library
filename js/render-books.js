// Display books //
import { myLibrary } from "./main.js";
import { createBookCard } from "./create-book-card.js";
function renderBooks() {
    const books = document.querySelector(".books");
    books.textContent = "";
    const add = document.createElement('div');
    add.setAttribute('class', 'add-btn');
    add.textContent = "+";
    books.appendChild(add);
    const modal = document.querySelector("#modal");
    const span = document.querySelector('.close');
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    add.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
    myLibrary.map((book, index) => {
        createBookCard(book, index);
    });
}
export { renderBooks };

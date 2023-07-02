let myLibrary = [];
let currentLibraryIndex = 0;
const userInput = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        let readStatement = "not read yet";
        if (isRead)
            readStatement = "already read";
        return (`${title} by ${author}, ${pages}, ${readStatement}`);
    };
}
function addBookToLibrary() {
    myLibrary[currentLibraryIndex] = new Book(userInput.title, userInput.author, userInput.pages, userInput.isRead);
    currentLibraryIndex++;
}
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}
userInput.title = "Harry Potter";
userInput.author = "J.K. Rowling";
userInput.pages = 300;
userInput.isRead = true;
addBookToLibrary();
userInput.title = "The Hobbit";
userInput.author = "J.R.R. Tolkien";
userInput.pages = 295;
userInput.isRead = false;
addBookToLibrary();
displayLibrary();
console.log(myLibrary.length);

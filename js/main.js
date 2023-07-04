let myLibrary = [];
let currentLibraryIndex = 0;
const bookInput = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};
class Book {
    constructor(title, author, pages, isRead) {
        this.info = () => {
            let readStatement = "not read yet";
            if (this._isRead)
                readStatement = "already read";
            return (`${this._title} by ${this._author}, ${this._pages}, ${readStatement}`);
        };
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._isRead = isRead;
    }
}
// function Book(title: string, author: string, pages: number, isRead: boolean): void {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//     this.info = function (): string {
//         let readStatement: string = "not read yet";
//         if (isRead)
//             readStatement = "already read";
//         return (`${title} by ${author}, ${pages}, ${readStatement}`)
//     }
// }
function addBookToLibrary() {
    myLibrary[currentLibraryIndex] = new Book(bookInput.title, bookInput.author, bookInput.pages, bookInput.isRead);
    currentLibraryIndex++;
}
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}
bookInput.title = "Harry Potter";
bookInput.author = "J.K. Rowling";
bookInput.pages = 300;
bookInput.isRead = true;
addBookToLibrary();
bookInput.title = "The Hobbit";
bookInput.author = "J.R.R. Tolkien";
bookInput.pages = 295;
bookInput.isRead = false;
addBookToLibrary();
displayLibrary();
console.log(myLibrary.length);

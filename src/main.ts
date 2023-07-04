let myLibrary:Object[] = [];

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

// Starting conditions
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

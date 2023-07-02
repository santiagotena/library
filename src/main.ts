let myLibrary:Object[] = [];

let currentLibraryIndex: number = 0;

const userInput: {title: string, author: string, pages: number, isRead: boolean} = {
    title: undefined,
    author: undefined,
    pages: undefined,
    isRead: undefined,
};

function Book(title: string, author: string, pages: number, isRead: boolean): void {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function (): string {
        let readStatement: string = "not read yet";
        if (isRead)
            readStatement = "already read";
        return (`${title} by ${author}, ${pages}, ${readStatement}`)
    }
}

function addBookToLibrary():void {
    myLibrary[currentLibraryIndex] = new Book(  userInput.title,
                                                userInput.author,
                                                userInput.pages,
                                                userInput.isRead);
    currentLibraryIndex++;
}

function displayLibrary():void {
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
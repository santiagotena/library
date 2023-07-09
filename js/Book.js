class Book {
    constructor(title, author, pages, isRead) {
        this.info = () => {
            let readStatement = "not read yet";
            if (this.isRead)
                readStatement = "already read";
            return (`${this.title} by ${this.author}, ${this.pages}, ${readStatement}`);
        };
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}
export { Book };

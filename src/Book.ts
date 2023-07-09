class Book {
    title: string;
    author: string;
    pages: number;
    isRead: boolean;

    constructor(title: string, author: string, pages: number, isRead: boolean) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info = (): string => {
        let readStatement: string = "not read yet";
        if (this.isRead)
            readStatement = "already read";
        return (`${this.title} by ${this.author}, ${this.pages}, ${readStatement}`)
    }
}

export {Book};
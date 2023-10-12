const library = [];

function Book(name, author, pages, published, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.published = published;
	this.read = read;
}

function addBookToLibrary() {
	let name = prompt("Enter a book name!");
	let author = prompt("Enter the author's name!");
	let pages = prompt("Enter the number of pages!");
	let published = prompt("Enter the published date!");
	let read = prompt("Have you read this book?");

	let newBook = new Book(name, author, pages, published, read);
	library.push(newBook);
	return console.log(library);
}

addBookToLibrary();

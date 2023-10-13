const form = document.querySelector("#book-form");

const library = [];

function Book(name, author, pages, published, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.published = published;
	this.read = read;
}

function addBookToLibrary() {
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let name = document.getElementById("book-input").value;
		let author = document.getElementById("author-input").value;
		let pages = document.getElementById("pages-input").value;
		let published = document.getElementById("published-input").value;
		let read = document.getElementById("read-check").value;
		
		let newBook = new Book(name, author, pages, published, read);
		library.push(newBook);
		return console.log(library);
	});
}

addBookToLibrary();

document.addEventListener("DOMContentLoaded", () => {
	const library = [];

	function Book(name, author, pages, published, read) {
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.published = published;
		this.read = read;
	}

	function addBookToLibrary() {
		let newBook = prompt("Enter a book name!");
        library.push(newBook);
        return console.log(library);
	}

    addBookToLibrary()
});

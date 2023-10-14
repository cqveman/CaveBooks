const form = document.querySelector("#book-form");
const row = document.querySelector(".row");

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
		let read = document.getElementById("read-check").checked
			? "Completed"
			: "On Progress";

		let newBook = new Book(name, author, pages, published, read);
		library.push(newBook);

		const bookCard = generateBookCard(newBook, library.length - 1);
		row.appendChild(bookCard);
	});
}

function generateBookCard(book, index) {
	const colDiv = document.createElement("div");
	colDiv.classList.add("col-md-6", "col-lg-4", "mb-5");
	colDiv.dataset.removeIndex = index;

	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");

	const cardHeaderDiv = document.createElement("div");
	cardHeaderDiv.classList.add("card-header", "h2");
	cardHeaderDiv.textContent = book.name;

	const cardBodyDiv = document.createElement("div");
	cardBodyDiv.classList.add("card-body");

	const titleElement = document.createElement("h5");
	titleElement.classList.add("card-title");
	titleElement.textContent = `by ${book.author}`;

	const listGroupUl = document.createElement("ul");
	listGroupUl.classList.add("list-group", "list-group-flush");

	const pagesLi = document.createElement("li");
	pagesLi.classList.add("list-group-item");
	pagesLi.textContent = `Pages: ${book.pages}`;

	const publishedLi = document.createElement("li");
	publishedLi.classList.add("list-group-item");
	publishedLi.textContent = `Published: ${book.published}`;

	const readLi = document.createElement("li");
	readLi.classList.add("list-group-item", "text-center");
	readLi.textContent = book.read;

	const cardFooterDiv = document.createElement("div");
	cardFooterDiv.classList.add("card-footer", "bg-body", "d-flex");

	const readButton = document.createElement("button");
	readButton.classList.add("btn", "btn-primary", "flex-fill", "mt-1");
	readButton.setAttribute("type", "button");
	readButton.textContent = "Read";

	const deleteButton = document.createElement("button");
	deleteButton.classList.add(
		"btn",
		"btn-danger",
		"flex-fill",
		"mt-1",
		"ms-3"
	);
	deleteButton.setAttribute("type", "button");
	deleteButton.textContent = "Delete";

	deleteButton.addEventListener("click", () => {
		const removeIndex = parseInt(colDiv.dataset.removeIndex);
		library.splice(removeIndex, 1);
		row.removeChild(colDiv);
	});

	colDiv.appendChild(cardDiv);
	cardDiv.appendChild(cardHeaderDiv);
	cardDiv.appendChild(cardBodyDiv);
	cardBodyDiv.appendChild(titleElement);
	cardBodyDiv.appendChild(listGroupUl);
	listGroupUl.appendChild(pagesLi);
	listGroupUl.appendChild(publishedLi);
	listGroupUl.appendChild(readLi);
	cardBodyDiv.appendChild(cardFooterDiv);
	cardFooterDiv.appendChild(readButton);
	cardFooterDiv.appendChild(deleteButton);

	return colDiv;
}

addBookToLibrary();

const openModal = document.querySelector("#addBook");
const modal = document.querySelector(".modal");
const modalSpan = document.getElementsByClassName("close")[0];
const bookTitleInput = document.querySelector("#title");
const bookAuthorInput = document.querySelector("#author");
const bookPagesInput = document.querySelector("#pages");
const bookHasReadInput = document.querySelector("#read");
const addBookToArray = document.querySelector(".addBookToArray");
const onPageLibrary = document.querySelector(".library");
const mainContainer = document.querySelector(".main-container");
const readBooksResult = document.querySelector(".readBooksResult");
const unreadBooksResult = document.querySelector(".unreadBooksResult");
const pagesCounter = document.querySelector(".pagesReadResult");

class Book {
	constructor(title, author, pages, status) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.status = status;
	}
}

const DEFAULT_BOOK1 = new Book("The Hobbit", "J. R. R. Tolkien", 310, true);
const DEFAULT_BOOK2 = new Book("Mistborn: The Final Empire", "Brandon Sanderson", 541, true);
const DEFAULT_BOOK3 = new Book("A Game of Thrones", "George R. R. Martin", 694, true);
const DEFAULT_BOOK4 = new Book("The Eye of the World", "Robert Jordan", 782, false);

openModal.addEventListener("click", () => {
	openBookModal();
});

modalSpan.addEventListener("click", () => {
	closeBookModal();
});

let myLibrary = [];

myLibrary.push(DEFAULT_BOOK1);
myLibrary.push(DEFAULT_BOOK2);
myLibrary.push(DEFAULT_BOOK3);
myLibrary.push(DEFAULT_BOOK4);
myLibrary.forEach(createBookCard);

function updateCounters() {
	const totalBooksRead = myLibrary.filter((b) => b.status).length;
	const totalNumberBooks = myLibrary.length;
	const totalPagesRead = myLibrary.reduce((accumulator, book) => {
		return parseFloat(accumulator) + parseFloat(book.pages);
	}, 0);

	if (myLibrary.length < 1) {
		readBooksResult.innerText = 0;
		unreadBooksResult.innerText = 0;
		pagesCounter.innerText = 0;
	} else {
		readBooksResult.innerText = totalBooksRead;
		unreadBooksResult.innerText = totalNumberBooks - totalBooksRead;
		pagesCounter.innerText = totalPagesRead.toLocaleString();
	}
}

addBookToArray.addEventListener("click", () => {
	const newBook = createNewBook();
	myLibrary.push(newBook);

	createBookCard(newBook);

	closeBookModal();
});

function createBookCard(newBook) {
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("cardContainer");
	const bookCard = document.createElement("div");
	bookCard.classList.add("bookCard");

	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const readButton = document.createElement("button");
	const readButtonText = document.createTextNode("Mark as read");
	const deleteButton = document.createElement("button");
	const deleteButtonText = document.createTextNode("Remove Book");

	title.textContent = `${newBook.title}`;
	author.textContent = `By: ${newBook.author}`;
	pages.textContent = `Pages: ${newBook.pages}`;

	bookCard.appendChild(title);
	bookCard.appendChild(author);
	bookCard.appendChild(pages);
	readButton.appendChild(readButtonText);
	bookCard.appendChild(readButton);

	deleteButton.appendChild(deleteButtonText);
	bookCard.appendChild(deleteButton);

	onPageLibrary.insertAdjacentElement("beforeend", bookCard);

	if (newBook.status === true) {
		bookCard.style.borderColor = "green";
		readButtonText.textContent = "Mark as un-read";
	} else {
		bookCard.style.borderColor = "red";
		readButtonText.textContent = "Mark as read";
	}
	updateCounters();
	readButton.addEventListener("click", () => {
		if (newBook.status === false) {
			newBook.status = true;
			updateCounters();
			bookCard.style.borderColor = "green";
			readButtonText.textContent = "Mark as un-read";
		} else {
			newBook.status = false;
			updateCounters();
			bookCard.style.borderColor = "red";
			readButtonText.textContent = "Mark as read";
		}
	});

	deleteButton.addEventListener("click", () => {
		const currentBookIndex = myLibrary.indexOf(newBook);
		myLibrary.splice(currentBookIndex, 1);
		onPageLibrary.textContent = "";
		myLibrary.forEach(createBookCard);
		updateCounters();
	});
}

function createNewBook() {
	return new Book(
		document.querySelector("#title").value,
		document.querySelector("#author").value,
		document.querySelector("#pages").value,
		document.querySelector("#read").checked
	);
}

function resetModalValues() {
	bookTitleInput.value = "";
	bookAuthorInput.value = "";
	bookPagesInput.value = "";
	bookHasReadInput.checked = false;
}

function openBookModal() {
	modal.style.display = "block";
	mainContainer.className += " modalIsOpen";
}

function closeBookModal() {
	resetModalValues();
	modal.style.display = "none";
	mainContainer.className = " main-container";
}

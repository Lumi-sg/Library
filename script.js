const openModal = document.querySelector("#addBook");
const modal = document.querySelector(".modal");
const modalSpan = document.getElementsByClassName("close")[0];
const bookTitleInput = document.querySelector("#title");
const bookAuthorInput = document.querySelector("#author");
const bookRatingInput = document.querySelector("#rating");
const bookYearPublishedInput = document.querySelector("#yearPublished");
const bookHasReadInput = document.querySelector("#read");
const addBookToArray = document.querySelector(".addBookToArray");

openModal.addEventListener("click", () => {
	openBookModal();
});

modalSpan.addEventListener("click", () => {
	closeBookModal();
});

//date validation
let yearPublished = document.getElementById("yearPublished");
yearPublished.max = new Date().toLocaleDateString("en-ca");

let myLibrary = [];

let bookTitle = document.querySelector("#title").value;
let bookAuthor = document.querySelector("#author").value;
let bookRating = document.querySelector("#rating").value;
let bookYearPublished = document.querySelector("#yearPublished").value;
let bookHasRead = document.querySelector("#read").value;

class Book {
	constructor(title, author, date, rating, status) {
		this.title = title;
		this.author = author;
		this.date = date;
		this.rating = rating;
		this.status = status;
	}
}

addBookToArray.addEventListener("click", () => {
	const newBook = new Book(
		bookTitle,
		bookAuthor,
		bookYearPublished,
		bookRating,
		bookHasRead
	);
	myLibrary.push(newBook);
	console.table(myLibrary);
	closeBookModal();
});

function resetModalValues() {
	bookTitleInput.value = "";
	bookAuthorInput.value = "";
	bookRatingInput.value = "";
	bookYearPublishedInput.value = "";
	bookHasReadInput.value = "";
}

function openBookModal() {
	modal.style.display = "block";
}

function closeBookModal() {
	resetModalValues();
	modal.style.display = "none";
}
// AddBook();

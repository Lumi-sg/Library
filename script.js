const addBookButton = document.querySelector("#addBook");
const modal = document.querySelector(".modal");
const modalSpan = document.getElementsByClassName("close")[0];
const bookTitle = document.getElementById(".title");
const bookAuthor = document.getElementById(".author");
const bookRating = document.getElementById(".rating");
const bookYearPublished = document.getElementById(".yearPublished");
const bookHasRead = document.getElementById(".hasRead");

addBookButton.addEventListener("click", () => {
	openBookModal();
});

modalSpan.addEventListener("click", () => {
	closeBookModal();
});

function openBookModal() {
	modal.style.display = "block";
}

function closeBookModal() {
	modal.style.display = "none";
}

//date validation
let yearPublished = document.getElementById("yearPublished");
yearPublished.max = new Date().toLocaleDateString("en-ca");

// let myLibrary = [];

// class Book {
// 	constructor(title, author, status, rating) {
// 		this.title = title;
// 		this.author = author;
// 		this.status = status;
// 		this.rating = rating;
// 	}
// }

// function AddBook() {
// 	let title = prompt("What is the title of the book");
// 	let author = prompt("What is the author of the book");
// 	let status = prompt("Have you read the book?");
// 	let rating = prompt("What is your rating of the book /5?");

// 	const newBook = new Book(title, author, status, rating);
// 	myLibrary.push(newBook);
// }

// AddBook();

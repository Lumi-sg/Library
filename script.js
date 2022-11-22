let myLibrary = [];

class Book {
	constructor(title, author, status, rating) {
		this.title = title;
		this.author = author;
		this.status = status;
		this.rating = rating;
	}
}

function AddBook() {
	let title = prompt("What is the title of the book");
	let author = prompt("What is the author of the book");
	let status = prompt("Have you read the book?");
	let rating = prompt("What is your rating of the book /5?");

	const newBook = new Book(title, author, status, rating);
	myLibrary.push(newBook);
}

AddBook();

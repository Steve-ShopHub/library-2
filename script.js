const book1 = new Book("1984", "George Orwell", "328", "had not read");
const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "336",
  "has read"
);
const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "180",
  "has not read"
);
const book4 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "224",
  "has not read"
);
const book5 = new Book("Pride and Prejudice", "Jane Austen", "432", "has read");
const book6 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  "223",
  "has not read"
);
const book7 = new Book(
  "The Lord of the Rings: The Fellowship of the Ring",
  "J.R.R. Tolkien",
  "458",
  "has read"
);
const book8 = new Book("The Hobbit", "J.R.R. Tolkien", "300", "has not read");
const book9 = new Book("Animal Farm", "George Orwell", "112", "has not read");
const book10 = new Book(
  "Crime and Punishment",
  "Fyodor Dostoevsky",
  "545",
  "has read"
);

// Array

let myLibrary = [];

// Constructor

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = title + " by " + author + ", " + pages + " pages, " + read);
}

//Push to Array

function addBookToLibrary(...books) {
  myLibrary.push(...books);
}

addBookToLibrary(
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10
);

console.log(myLibrary);

// Display each book

function displayBooks() {
  myLibrary.forEach((book) => {
    const tableRef = document.getElementById("books-table");

    const newRow = tableRef.insertRow(1);

    let newTitleCell = newRow.insertCell(0);
    let newTitleText = document.createTextNode(`${book.title}`);
    newTitleCell.appendChild(newTitleText);

    let newAuthorCell = newRow.insertCell(1);
    let newAuthorText = document.createTextNode(`${book.author}`);
    newAuthorCell.appendChild(newAuthorText);

    let newPagesCell = newRow.insertCell(2);
    let newPagesText = document.createTextNode(`${book.pages}`);
    newPagesCell.appendChild(newPagesText);

    let newReadCell = newRow.insertCell(3);
    let newReadText = document.createTextNode(`${book.read}`);
    newReadCell.appendChild(newReadText);
  });
}

displayBooks();

// Add

/*

When NEW BOOK button is pressed:

- Hide NEW BOOK button
- Show form-row
- Show Cancel Button
- Show Submit Button

*/

let isHidden = true;
document.getElementById("form-row").style.display = "none";

const newBookBtn = document.querySelector(".new-book-btn");
const formRow = document.getElementById("form-row");

newBookBtn.addEventListener("click", newBook);

function newBook() {
  if (isHidden === true) {
    showForm();
  } else if (isHidden === false) {
    hideForm();
  }
}

function showForm() {
  formRow.style.display = "";
  isHidden = false;
}

function hideForm() {
  formRow.style.display = "none";
  isHidden = true;
}

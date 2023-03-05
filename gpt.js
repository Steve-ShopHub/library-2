class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleReadStatus(index) {
    const book = this.books[index];
    book.read = book.read === "has read" ? "has not read" : "has read";
  }
}

const myLibrary = new Library();

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

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

function displayBooks() {
  const tableRef = document.getElementById("books-table");
  tableRef.innerHTML = ""; // Clear table before redrawing

  myLibrary.books.forEach((book, index) => {
    const newRow = tableRef.insertRow(-1);
    newRow.setAttribute("data-key", index);

    const newTitleCell = newRow.insertCell(0);
    newTitleCell.textContent = book.title;

    const newAuthorCell = newRow.insertCell(1);
    newAuthorCell.textContent = book.author;

    const newPagesCell = newRow.insertCell(2);
    newPagesCell.textContent = book.pages;

    const newReadCell = newRow.insertCell(3);
    newReadCell.textContent = book.read;

    const newToggleReadCell = newRow.insertCell(4);
    const newToggleReadBtn = document.createElement("button");
    newToggleReadBtn.textContent = "Toggle Read Status";
    newToggleReadBtn.addEventListener("click", () => {
      myLibrary.toggleReadStatus(index);
      displayBooks();
    });
    newToggleReadCell.appendChild(newToggleReadBtn);

    const newDeleteCell = newRow.insertCell(5);
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.textContent = "Delete";
    newDeleteBtn.addEventListener("click", () => {
      myLibrary.removeBook(index);
      displayBooks();
    });
    newDeleteCell.appendChild(newDeleteBtn);
  });
}

function showForm() {
  document.querySelector(".new-book-form").style.display = "block";
  document.querySelector(".new-book-btn").style.display = "none";
  document.querySelector(".submit").style.display = "inline-block";
  document.querySelector(".cancel").style.display = "inline-block";
}

function hideForm() {
  document.querySelector(".new-book-form").style.display = "none";
  document.querySelector(".new-book-btn").style.display = "inline-block";
  document.querySelector(".submit").style.display = "none";
  document.querySelector(".cancel").style.display = "none";
}

function submit() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read-yes").checked
    ? "has read"
    : "has not read";
  const book = new Book(title, author, pages, read);
  myLibrary.addBook(book);
  displayBooks();
  hideForm();
}

const newBookBtn = document.querySelector(".new-book-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const form = document.querySelector(".new-book-form");

newBookBtn.addEventListener("click", showForm);
cancelBtn.addEventListener("click", hideForm);
submitBtn.addEventListener("click", submit);

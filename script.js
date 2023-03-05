class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

class Library {
  constructor() {
    this.arr = [];
  }

  showArr() {
    console.log(this.arr);
  }

  pushToLibrary(...book) {
    this.arr.push(...book);
  }
}

const book1 = new Book("1984", "George Orwell", "328", "has not read");
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

let myLibrary = new Library();
myLibrary.pushToLibrary(book1, book2, book3);

function showForm() {
  form.style.display = "";
  newBookBtn.style.display = "none";
  submitBtn.style.display = "";
  cancelBtn.style.display = "";
  isHidden = false;
}

function hideForm() {
  form.style.display = "none";
  newBookBtn.style.display = "";
  submitBtn.style.display = "none";
  cancelBtn.style.display = "none";
  isHidden = true;
}

let isHidden = true;

const newBookBtn = document.querySelector(".new-book-btn");
newBookBtn.addEventListener("click", showForm);
newBookBtn.style.display = "";

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submit);
submitBtn.style.display = "none";

const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", hideForm);
cancelBtn.style.display = "none";

const form = document.querySelector(".new-book-form");
form.style.display = "none";

const table = document.getElementById("books-table");

function createBookRows() {
  myLibrary.arr.forEach((book, index) => {
    const bookRow = document.createElement("tr");
    bookRow.dataset.key = index;
    table.appendChild(bookRow);

    bookRow.insertCell().textContent = book.title;
    bookRow.insertCell().textContent = book.author;
    bookRow.insertCell().textContent = book.pages;
    // bookRow.insertCell().textContent = book.read;

    const readStatusBtn = document.createElement("button");
    bookRow.insertCell().appendChild(readStatusBtn);
    readStatusBtn.textContent = book.read;
    readStatusBtn.dataset.key = index;
    readStatusBtn.addEventListener("click", readStatus);

    const deleteBtn = document.createElement("button");
    bookRow.insertCell().appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteSelectedRow);

    deleteBtn.dataset.key = index;
    deleteBtn.textContent = "Delete";
  });
}

function readStatus() {
  let buttonKey = this.dataset.key;
  let book = myLibrary.arr[`${buttonKey}`];
  if (book.read == "has read") {
    book.read = "has not read";
    this.style.backgroundColor = "green";
  } else if (book.read == "has not read") {
    book.read = "has read";
  }
  clearTable();
  createBookRows();
}

createBookRows();

function deleteSelectedRow() {
  let buttonKey = this.dataset.key;

  for (let i in table.rows) {
    let row = table.rows[i];
    let rowKey = row.dataset.key;
    if (rowKey == buttonKey) {
      table.removeChild(row);
      delete myLibrary.arr[`${buttonKey}`];
    }
  }
}

function clearTable() {
  myLibrary.arr.forEach((book) => {
    document.getElementById("books-table").deleteRow(-1);
  });
}

function submit() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read-yes").checked
    ? "has read"
    : "has not read";
  const book = new Book(title, author, pages, read);
  clearTable();
  myLibrary.pushToLibrary(book);
  createBookRows();
  hideForm();
}

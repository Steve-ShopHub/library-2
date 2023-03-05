class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
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

let myLibrary = new Library();

function addDefaultBooks() {
  myLibrary.pushToLibrary(book1, book2, book3);
}

addDefaultBooks();

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
    bookRow.insertCell().textContent = book.read;

    const deleteBtn = document.createElement("button");
    bookRow.insertCell().appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteSelectedRow);

    deleteBtn.dataset.key = index;
    deleteBtn.textContent = "Delete";
  });
}

createBookRows();

function deleteSelectedRow() {
  let buttonKey = this.dataset.key;
  // const tableRef = document.getElementById("books-table");

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

// let userTitle = document.querySelector("#title").value;
// let userAuthor = document.querySelector("#author").value;
// let userPages = document.querySelector("#pages").value;
// let userRead = document.querySelector("#read-yes").value;
// let userNotRead = document.querySelector("#read-no").value;

function hasRead() {
  if (userRead.checked === true) {
    return "has read!";
  } else if (userNotRead.checked === true) {
    return "has not read!";
  } else return;
}

/*

function submit() {
  let newBook = new Book(
    `${userTitle.value}`,
    `${userAuthor.value}`,
    `${userPages.value}`,
    `${hasRead()}`
  );
  clearTable();
  myLibrary.pushToLibrary(newBook);
  createBookRows();
}

*/

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

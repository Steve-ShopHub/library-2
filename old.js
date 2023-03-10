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
// const book4 = new Book(
//   "The Catcher in the Rye",
//   "J.D. Salinger",
//   "224",
//   "has not read"
// );
// const book5 = new Book("Pride and Prejudice", "Jane Austen", "432", "has read");
// const book6 = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J.K. Rowling",
//   "223",
//   "has not read"
// );
// const book7 = new Book(
//   "The Lord of the Rings: The Fellowship of the Ring",
//   "J.R.R. Tolkien",
//   "458",
//   "has read"
// );
// const book8 = new Book("The Hobbit", "J.R.R. Tolkien", "300", "has not read");
// const book9 = new Book("Animal Farm", "George Orwell", "112", "has not read");
// const book10 = new Book(
//   "Crime and Punishment",
//   "Fyodor Dostoevsky",
//   "545",
//   "has read"
// );

let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = title + " by " + author + ", " + pages + " pages, " + read),
    (this.id = function uniqueId() {
      let counter = 0;

      return function () {
        return counter++;
      };
    });
}

function idNumber() {
  let i = 1;
  this.id = i++;
}

function addBookToLibrary(...books) {
  myLibrary.push(...books);
}

addBookToLibrary(
  book1,
  book2,
  book3
  // book4,
  // book5,
  // book6,
  // book7,
  // book8,
  // book9,
  // book10
);

console.log(myLibrary);

function displayBooks() {
  const tableRef = document.getElementById("books-table");

  myLibrary.forEach((book, index) => {
    const newRow = document.createElement("tr");
    newRow.dataset.key = index;
    tableRef.appendChild(newRow);

    newRow.insertCell().textContent = book.title;
    newRow.insertCell().textContent = book.author;
    newRow.insertCell().textContent = book.pages;
    newRow.insertCell().textContent = book.read;

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.dataset.key = index;
    newDeleteBtn.textContent = "Delete";
    newDeleteBtn.addEventListener("click", deleteSelectedRow);
    newRow.insertCell().appendChild(newDeleteBtn);
  });
}

/*

function displayBooks() {
  myLibrary.forEach((book) => {
    const tableRef = document.getElementById("books-table");

    // const newRow = tableRef.insertRow(-1);

    const newRow = document.createElement("tr");
    newRow.setAttribute("data-key", `${myLibrary.indexOf(book)}`);
    tableRef.appendChild(newRow);
    // alert(newRow.getAttribute("data-key"));

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

    let newDeleteCell = newRow.insertCell(4);
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.addEventListener("click", deleteSelectedRow);
    // newDeleteBtn.setAttribute("data-key", `${myLibrary.indexOf(book)}`);
    newDeleteBtn.setAttribute("data-key", `${newRow.getAttribute("data-key")}`);

    // newDeleteBtn.innerText = `${newDeleteBtn.getAttribute("data-key")}`;
    newDeleteBtn.innerText = `Delete`;
    newDeleteCell.appendChild(newDeleteBtn);
  });
}

*/

function clearTable() {
  myLibrary.forEach((book) => {
    document.getElementById("books-table").deleteRow(-1);
  });
}

function deleteSelectedRow() {
  let buttonKey = this.getAttribute("data-key");
  const tableRef = document.getElementById("books-table");

  for (let i in tableRef.rows) {
    let row = tableRef.rows[i];
    if (row.getAttribute("data-key") == buttonKey) {
      tableRef.removeChild(row);
      delete myLibrary[`${buttonKey}`];
    }
  }
}

displayBooks();

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

let userTitle = document.querySelector("#title");
let userAuthor = document.querySelector("#author");
let userPages = document.querySelector("#pages");
let userRead = document.querySelector("#read-yes");
let userNotRead = document.querySelector("#read-no");

function hasRead() {
  if (userRead.checked === true) {
    return "has read!";
  } else if (userNotRead.checked === true) {
    return "has not read!";
  } else return;
}

function submit() {
  let newBook = new Book(
    `${userTitle.value}`,
    `${userAuthor.value}`,
    `${userPages.value}`,
    `${hasRead()}`
    // `${(this.id = myLibrary.indexOf(this))}`
  );
  clearTable();
  // myLibrary.length = 0;
  myLibrary.push(newBook);
  addBookToLibrary();
  displayBooks();
}

function cancel() {
  hideForm();
}

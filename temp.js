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

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }

  info() {
    return title + " by " + author + ", " + pages + " pages, " + read;
  }
}



const tableRef = document.getElementById("books-table");

class Row {
    constructor(){
      
    }

    createRow(){
        document.createElement("tr");
        this.setAttribute("data-key", `${myLibrary.indexOf(book)}`);
        tableRef.appendChild(this);
        this.createCells()
    }

    createCells(){
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
        newDeleteBtn.setAttribute("data-key", `${newRow.getAttribute("data-key")}`);
    
        newDeleteBtn.innerText = `Delete`;
        newDeleteCell.appendChild(newDeleteBtn);
      });
    }




}

class bookTable {
    constructor(){
    }






}

///////////// To be completed

let myLibrary = [];

class myLibrary {
    
    static addBookToLibrary() {
        myLibrary.push(book1, book2, book3);
      }
}

// addBookToLibrary(book1, book2, book3);

console.log(myLibrary);

function displayBooks() {
  myLibrary.forEach((book) => {
    const tableRef = document.getElementById("books-table");

    const newRow = document.createElement("tr");
    newRow.setAttribute("data-key", `${myLibrary.indexOf(book)}`);
    tableRef.appendChild(newRow);

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
    newDeleteBtn.setAttribute("data-key", `${newRow.getAttribute("data-key")}`);

    newDeleteBtn.innerText = `Delete`;
    newDeleteCell.appendChild(newDeleteBtn);
  });
}

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
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const form = document.querySelector(".new-book-form");

newBookBtn.style.display = "";
submitBtn.style.display = "none";
cancelBtn.style.display = "none";
form.style.display = "none";

newBookBtn.addEventListener("click", showForm);
cancelBtn.addEventListener("click", hideForm);
submitBtn.addEventListener("click", submit);

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
    `${hasRead()}`,
    `${(this.id = myLibrary.indexOf(this))}`
  );
  clearTable();
  myLibrary.push(newBook);
  addBookToLibrary();
  displayBooks();
}

function cancel() {
  hideForm();
}

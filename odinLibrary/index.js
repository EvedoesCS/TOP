let myLibrary = [];
const myTable = document.getElementById("myTable");

//   book class to be used on 'bookshelf' cards
function book(title, author, length, status, bookId) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.status = status;
  this.bookId = myLibrary.length;
}

//   function used to render and display new div elements with appropriate title, author and page#
// input.
function renderBook(title, author, length, status) {
  const newRow = document.createElement("tr");
  newRow.id = myLibrary.length - 1;
  myTable.append(newRow);

  const trTitle = document.createElement("td");
  trTitle.textContent = title;
  newRow.append(trTitle);

  const trAuthor = document.createElement("td");
  trAuthor.textContent = author;
  newRow.append(trAuthor);

  const trLength = document.createElement("td");
  trLength.textContent = length;
  newRow.append(trLength);

  const trStatus = document.createElement("td");
  newRow.append(trStatus);

  const statusLabel = document.createElement("label");
  statusLabel.classList.add("switch");
  trStatus.append(statusLabel);
  const statusInput = document.createElement("input");
  statusInput.type = "checkbox";
  statusLabel.append(statusInput);
  const statusSpan = document.createElement("span");
  statusSpan.classList.add("slider", "round");
  statusLabel.append(statusSpan);

  if (status == true) {
    statusInput.setAttribute("checked", true);
    trStatus.append(statusLabel);
  } else {
    trStatus.append(statusLabel);
  }

  const delBtnCell = document.createElement("td");
  newRow.append(delBtnCell);
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.classList.add("del-btn");
  delBtnCell.append(delBtn);

  delBtn.onclick = function () {
    popBook(delBtnCell.parentElement.id);
  };
}

//  function calls the render book function for each book already in the library
// only run once on startup to avoid duplicating books.
function populateBookshelf() {
  for (let i = 0; i < myLibrary.length; i++) {
    renderBook(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].length,
      myLibrary[i].status
    );
  }
}
populateBookshelf();

// Function removes the indexed table row from the DOM and pops the index from 'myLibrary'
function popBook(index) {
  const tableRow = document.getElementById(index);
  while (tableRow.firstChild != null) {
    tableRow.firstChild.remove();
  }
  tableRow.remove();
  myLibrary.pop(index);
}

//   function called by the new book button element to populate the 'myLibrary' list.
function addToLib(title, author, length, status) {
  let newBook = new book(title, author, length, status);
  myLibrary.push(newBook);
  renderBook(title, author, length, status);
}

document.getElementById("addBtn").onclick = function () {
  let title = document.getElementById("bookTitle");
  let author = document.getElementById("bookAuthor");
  let length = document.getElementById("bookLength");
  let status = document.getElementById("bookStatus");
  addToLib(title.value, author.value, length.value, status.checked);

  title.value = "";
  author.value = "";
  length.value = "";
  status.checked = false;
};

function debugBooks() {
  addToLib("A Game of Thrones", "George R.R. Martin", "684", false);
  addToLib("The Lord of the Rings", "JRR Tolkien", "1178", true);
}
debugBooks();

const myLibrary = [];
const main = document.querySelector(".main");
const newBookModal = document.getElementById("modal");
const addBookButton = document.querySelector(".add-book");
const closeModal = document.querySelector(".close-button");
const submitNewBook = document.getElementById("submit");
const form = document.querySelector(".book-form");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};
Book.prototype.removeBookFromLibrary = function () {
  myLibrary.pop(this);
};
function displayLibrary() {
  main.innerHTML = "";
  myLibrary.forEach((book) => {
    book.createBookCard();
  });
}
Book.prototype.createBookCard = function () {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `Title:  ` + `${this.title}`;
  newCard.appendChild(cardTitle);
  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = `Author:  ` + `${this.author}`;
  newCard.appendChild(cardAuthor);

  const cardRead = document.createElement("select");
  cardRead.classList.add("card-read");
  cardRead.innerHTML = `
    <option value="Read">Read</option>
    <option value="Reading">Reading</option>
    <option value="Not Started">Not Started</option>`;
  cardRead.value = `${this.read}`;
  newCard.appendChild(cardRead);

  cardRead.addEventListener("change", () => {
    this.read = cardRead.value;
  });

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.textContent = `Pages:  ` + `${this.pages}`;
  newCard.appendChild(cardPages);

  const cardRemove = document.createElement("button");
  cardRemove.classList.add("card-remove");
  cardRemove.textContent = "Remove";
  newCard.appendChild(cardRemove);

  cardRemove.addEventListener("click", () => {
    const indexOfBook = myLibrary.findIndex(
      (element) => element.title === this.title && element.pages === this.pages
    );
    if (indexOfBook > -1) {
      myLibrary.splice(indexOfBook, 1);
      displayLibrary();
    }
  });

  main.appendChild(newCard);
};
addBookButton.addEventListener("click", () => {
  newBookModal.showModal();
});
closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
  newBookModal.close();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  form.reset();
  console.log(myLibrary);
  newBookModal.close();
  displayLibrary();
});

const book1 = new Book("Crime and Punnishment", "Dostoyevsky", 599, "Read");
const book2 = new Book("Crime and Punnishment", "Dostoyevsky", 601, "Read");
myLibrary.push(book1);
myLibrary.push(book2);

displayLibrary();

const myLibrary = [];

function Book(title, author, summary, rating, ownBook) {
  this.title = title;
  this.author = author;
  this.summay = summary;
  this.rating = rating;
  this.ownBook = ownBook;
}
Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
  console.log(myLibrary);
};
Book.prototype.addRow = function () {};
const book1 = new Book(
  "Crime and Punnishment",
  "Dostoyevsky",
  "Explores the moral consequences of crime and the psychological state of the criminal. Story follows Rodion Raskolnikov a murderer.",
  5,
  "Yes"
);
book1.addBookToLibrary();
console.dir(book1.title);
book1.addRow();

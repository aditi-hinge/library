let close = document.getElementById("cross");
let popupForm = document.querySelector(".popup-form");
let addBookButton = document.getElementById("add-book-button");
let bookName = document.getElementById("book-name");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let saveButton = document.getElementById("save-button");

// close pop-up from
close.addEventListener("click",()=>{
  popupForm.style.display = "none";
})

//open pop-up form
addBookButton.addEventListener("click", ()=>{
  popupForm.style.display = "flex";
})

//get value from form
saveButton.addEventListener("click", ()=>{
  console.log(bookName.value);
  console.log(author.value);
  console.log(pages.value);
})



let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
  return `${title} by ${author}, ${pages} pages, ${read}.`;
}
}

function addBookToLibrary() {
  // do stuff here
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
book1.info();
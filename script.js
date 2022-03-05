let close = document.getElementById("cross");
let popupForm = document.querySelector(".popup-form");
let addBookButton = document.getElementById("add-book-button");
let bookName = document.getElementById("book-name");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let saveButton = document.getElementById("save-button");
// let showBooks = document.querySelector(".show-books");
let showBooks = document.getElementById("show-books");
// let name = document.getElementById("name");



let myLibrary = [];

// close pop-up from
close.addEventListener("click",()=>{
  popupForm.style.display = "none";
})

//open pop-up form
addBookButton.addEventListener("click", ()=>{
  // popupForm.style.display = "flex";
  addBookToLibrary();
})

//get value from form
saveButton.addEventListener("click", ()=>{
//  Book();
})

//function to makes array out of user input
let makeArray =()=>{
  myLibrary.push(bookName.value,author.value,pages.value);
  let title = myLibrary[0];
  return title;
  // Book(title);
  // console.log(title);
}

// function Book() {
//   makeArray(title);
//   // the constructor...
//   this.title = makeArray(title);
//   // this.author = author;
//   // this.pages = pages;
//   // this.read = read;
//   this.info = function(){
//   console.log(title);
// }
// }


function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
  return title, author, pages, read;
}
}
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
function addBookToLibrary() {
  // do stuff here
  let card = document.createElement("div");
  showBooks.appendChild(card);
  card.style.height = "250px";
  card.style.width = "250px";
  card.style.borderRadius = "10px";
  card.style.backgroundColor = "white";
  card.style.color = "black";
  // card.style.display = "grid";
  Book();
  myLibrary.push(book1);
  // console.log(myLibrary)
}


// for(let info in Book) alert(info);

// console.log(typeof(book1));
// console.log(book1.length)
// for(let i=0; i<myLibrary.length; i++){
//   console.log("wee");
// }



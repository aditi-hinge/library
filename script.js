let close = document.getElementById("cross");
let popupForm = document.querySelector(".popup-form");
let addBookButton = document.getElementById("add-book-button");
let bookName = document.getElementById("book-name");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let saveButton = document.getElementById("save-button");
let showBooks = document.getElementById("show-books");
let form = document.getElementById("form");

let myLibrary = [];

// close pop-up from
close.addEventListener("click",()=>{
  popupForm.style.display = "none";
})

//open pop-up form
addBookButton.addEventListener("click", ()=>{
  popupForm.style.display = "flex";
  bookName.value = "";
  author.value = "";
  pages.value = "";
})

//get value from form
saveButton.addEventListener("click", ()=>{
    if(bookName.value === "" || author.value === "" ||
    pages.value === "") return;
    popupForm.style.display = "none";
})

form.addEventListener("submit", (event)=>{
  addBookToLibrary();
  event.preventDefault();
})


function addBookToLibrary() {

  let brandNewBook = new Book(bookName.value, author.value, pages.value, read.checked);
  console.log(brandNewBook);

  myLibrary.push(brandNewBook);
  console.log(myLibrary);
  

  // do stuff here
  let card = document.createElement("div");
  let titleSpace = document.createElement("h3");
  let authorSpace = document.createElement("p");
  let pagesSpace = document.createElement("p");
  let readButton = document.createElement("button");
  let removeButton = document.createElement("button");

  showBooks.appendChild(card);
  card.classList.add("card");

  card.setAttribute("id", myLibrary.length-1);
  removeButton.setAttribute("id", myLibrary.length-1);
  readButton.setAttribute("id", myLibrary.length-1);

  card.append(titleSpace);
  card.append(authorSpace);
  card.append(pagesSpace);  
  card.append(readButton);
  card.append(removeButton);


  

  titleSpace.innerHTML = brandNewBook.title;
  authorSpace.innerHTML = brandNewBook.author;
  pagesSpace.innerHTML = brandNewBook.pages;
  removeButton.innerHTML = "Delete";

  //for read button
  if(read.checked === true){
    readButton.innerHTML = "read";
  } else if(read.checked === false) {
    readButton.innerHTML = "unread";
  } else {
    return "error";
  }
 
  
  removeButton.addEventListener("click",(event)=>{
    showBooks.removeChild(card);
    myLibrary.splice(event.target.parentNode.id, 1);
  })
  
  //read button toggle
  readButton.addEventListener("click", (event)=>{
    if(readButton.innerHTML === "read"){
      readButton.innerHTML = "unread";
    } else if(readButton.innerHTML === "unread"){
      readButton.innerHTML = "read";
    } else {
      return "error";
    }
  //change in the library
  if(myLibrary[event.target.parentNode.id].read === true){
    myLibrary[event.target.parentNode.id].read = false;
  } else if(myLibrary[event.target.parentNode.id].read === false){
    myLibrary[event.target.parentNode.id].read = true;
  } else {
    return "error";
  }
 
}
 
 
)
};




function Book(title, author,pages, read) {    
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
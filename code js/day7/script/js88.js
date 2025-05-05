function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  

  let books = [
    new Book("Book A", "Author A", 15),
    new Book("Book B", "Author B", 25),
    new Book("Book C", "Author C", 10)
  ];
  
 
  let affordableBooks = books.filter(function(book) {
    return book.price < 20;
  });
  

  console.log("Affordable Books:");
  affordableBooks.forEach(function(book) {
    console.log(`${book.title} by ${book.author} - $${book.price}`);
  });
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  let books = [];

  let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
  let book2 = new Book("1984", "George Orwell", 1949);
  let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  
  books.push(book1, book2, book3);

  console.log("All Books:");
  books.forEach(book => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
  });

  let searchTitle = "1984";
  console.log(`\nSearching for books with title: ${searchTitle}`);
  books.forEach(book => {
    if (book.title.toLowerCase().includes(searchTitle.toLowerCase())) {
      console.log(`Found: ${book.title} by ${book.author} (${book.year})`);
    }
  });
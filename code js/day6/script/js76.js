const book = {
    title:"The Bible",
    author:"Harry Potter",
    price:100
}
book.genre = "Fantasy";
delete book.price;
console.log(Object.values(book));




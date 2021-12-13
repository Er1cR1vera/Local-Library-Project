function findAuthorById(authors, id) {
  const result = authors.find((name)=> name.id === id);
  return result;
} 

//===========================================//


function findBookById(books, id) {
   const result = books.find((book)=> book.id === id);
   return result; // return 
}


//===========================================//


function partitionBooksByBorrowedStatus(books) {
  let firstArr = books.filter((book)=> book.borrows[0].returned === false);

  let secondArr = books.filter((book)=> book.borrows[0].returned === true);
 return [firstArr, secondArr];
}


//============================================//


function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    const account = accounts.find(account => account.id === borrow.id)
    account.returned = borrow.returned
    return account
  }).slice(0, 10)
}


//==============================================//


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

function findAccountById(accounts, id) {
  const result = accounts.find((name)=> name.id === id);
  return result;  
}
//======================================================//

function sortAccountsByLastName(accounts) {
  let lastName = accounts.sort((firstName, lastName)=> (firstName.name.last > lastName.name.last ? 1 : -1));
  //console.log(lastName)
  return lastName;
}

//=====================================================//
function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;//access to id array
  let total = 0; //adder value set to zero
books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++)); //book.borrows is the array called.. borrow is the function  
return total;// returns the borrow function & total sum  
}

//====================================================//

function getBooksPossessedByAccount(account, books, authors) {// this function returns books and author is nested in author
let result = [];//empty array
books.forEach(book => {//foEach to 
  if (book.borrows.find(item => item.id === account.id && !item.returned)){
    result.push(book);
  }
})
console.log(result);
result.forEach(book => {
  let author = authors.find(person => person.id === book.authorId);
  book["author"] = author;
})
//console.log(result);
return result;
// we're returning book array with author info that represents books checked out by current account
}

//====================================================//

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

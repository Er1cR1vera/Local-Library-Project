function getTotalBooksCount(books) {
 return books.length //length returns number of books from the books array 
}

//==================================================================//

function getTotalAccountsCount(accounts) {
  return accounts.length // returns number of accounts using .length
}

//===================================================================//


function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return book.borrows.filter(borrow => !borrow.returned).length + acc
  }, 0)
  }

  //==========================================================================//

function getMostCommonGenres(books) {
  let total = {};
  books.forEach((num)=> {
    if (total[num.genre]){
      total[num.genre]++;
     } else { 
      total[num.genre] = 1;
    }
  });
return Object.entries(total)// Object.entries is like a for in loop 
.map(([name, count]) => {//.map creates new array from calling a function
  return {
    name,
   count
  };
})
.sort((first, last)=> last.count - first.count)
.slice(0, 5);
}

/*function getMostCommonGenres(books) {
   let total = {};
   books.forEach((num) => {
   if (total[num.genre]) {
   total[num.genre]++;
   } else {
   total[num.genre] = 1;
   }
   });
}*/

//========================================================================//

function getMostPopularBooks(books) {
  return books
  .map((book)=> {
    return {name: book.title, count: book.borrows.length};//sorts all books by their borrow count(popularity)
  })
  .sort((first, last)=> (first.count < last.count ? 1:-1))
  .slice(0, 5);
}

//===========================================================//

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let mostPopular = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        mostPopular.count += book.borrows.length;
      }
    });
    result.push(mostPopular);
  });
  return result.sort((one, two) => two.count - one.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

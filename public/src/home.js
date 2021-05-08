function getTotalBooksCount(books) {
  let totalBooks = books.length;
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = accounts.length;
  return totalAccounts;
}

// reduce() method used
function getBooksBorrowedCount(books) {
  let booksBorrowed = books.reduce((acc, book) => {
    return (acc + (book.borrows[0].returned === false))
  }, 0);
  return booksBorrowed;
}

function getMostCommonGenres(books) {
  let genresArr = [];
  books.forEach((book) => {
    if (genresArr.some((genre) => genre.name === book.genre)) {
      for (let i = 0; i < genresArr.length; i++) {
        if (genresArr[i].name === book.genre) {
          genresArr[i].count += 1;
        }
      }
    } else {
      genresArr.push({name: book.genre, count: 1});
    }
  })
  return genresArr.sort((genre1, genre2) => genre2.count - genre1.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let totalBorrows = 0;
  let topFiveBooks = [];

  for (let i = 0; i < books.length; i++) {
    totalBorrows = books[i].borrows.length;
    topFiveBooks.push({name: books[i].title, count: totalBorrows});
  }
  return topFiveBooks.sort((book1, book2) => book2.count - book1.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];

  let matchingAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
    matchingAuthor.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId);
      popularAuthors.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });
    
  let topFiveAuthors = popularAuthors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1);
  return topFiveAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

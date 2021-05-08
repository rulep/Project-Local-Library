function findAuthorById(authors, id) {
  let matchingId = authors.find((author) => author.id === id);
  return matchingId;
}

function findBookById(books, id) {
  let matchingId = books.find((book) => book.id === id);
  return matchingId;
}

// filter() method used
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned === true);

  return [borrowed, returned];
}

// helper function findAuthorById
function getBorrowersForBook(books, accounts) {
  let borrowed = books.borrows;
  let result = borrowed.map((status) => {
    let borrowersInfo = findAuthorById(accounts, status.id); 
    borrowersInfo.returned = status.returned;
    return borrowersInfo;
  }).slice(0, 10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

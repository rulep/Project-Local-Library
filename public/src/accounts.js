// find() method used
function findAccountById(accounts, id) {
  let matchingId = accounts.find((account) => account.id === id);
  return matchingId;
}

function sortAccountsByLastName(accounts) {
  let sortByLastName = accounts.sort((a,b) => (a.name.last > b.name.last ? 1 : -1));
  return sortByLastName;
}

// for/in loop
function getTotalNumberOfBorrows(accounts, books) {
  let totalBorrows = 0;
  for (let id in books) {
    const borrowList = books[id].borrows.filter((book) => book.id === accounts.id);
    totalBorrows += borrowList.length;
  }
  return totalBorrows;
}

// map() method used || spread operator
function getBooksPossessedByAccount(accounts, books, authors) {
  let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === accounts.id);
  let bookAndAuthor = booksCheckedOut.map((book) => ( {...book, author: authors.find((author) => author.id === book.authorId)} ));

  return bookAndAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

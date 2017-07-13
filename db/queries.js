const knex = require("./knex");

module.exports = {
  getAll: () => {
    return knex("book_author").innerJoin("book", "book_author.book_id", "book.id")
      .innerJoin("author", "book_author.author_id", "author.id")
      .returning("*");
  },
  getBook: book_id => {
    return knex("book_author").innerJoin("book", "book_author.book_id", "book.id")
      .innerJoin("author", "book_author.author_id", "author.id")
      .where("book_id", book_id).returning("*");
  },
  addBook: bookItem => {
    return knex("book").insert(bookItem).returning("*");
  },
  removeBook: book_id => {
    return knex("book").where("id", book_id).del();
  },
  updateBook: (newBook, id) => {
    return knex("book").where("id", id).update(newBook);
  }
};

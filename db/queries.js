const knex = require("./knex");

module.exports = {
  getAll: () => {
    return knex("book_author").innerJoin("book", "book_author.book_id", "book.id")
      .innerJoin("author", "book_author.author_id", "author.id")
      .returning("*");
  }
};

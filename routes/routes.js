const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

function reformatBooks(books) {
  const reformatted = [];
  const booksByID = {};


  books.forEach(book => {
    if (booksByID[book.book_id]) {
      booksByID[book.book_id].authors.push({
        first_name: book.first_name,
        last_name: book.last_name,
        bio: book.bio,
        author_image: book.img_url
      });
    } else {
      booksByID[book.book_id] = {
        book_id: book.book_id,
        book_name: book.title,
        book_genre: book.genre,
        book_desc: book.desc,
        book_cover: book.cover_url,
        authors: [{
          first_name: book.first_name,
          last_name: book.last_name,
          bio: book.bio,
          author_image: book.img_url
        }]
      };
      reformatted.push(booksByID[book.book_id]);
    }
  });
  return reformatted;
}

router.get("/book/all", (req, res) => {
  queries.getAll().then(books => {
    const reformatted = reformatBooks(books);
    res.json(reformatted);
  });
});

router.post("/book/create", (req, res) => {
  queries.addBook(req.body).then(book => res.json(book));
});

router.delete("book/:id", (req, res) => {
  queries.removeBook(req.params.id).then(() => res.json("deleted"));
});

module.exports = router;

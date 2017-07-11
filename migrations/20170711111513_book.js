
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book", table => {
    table.increments("id");
    table.string("title").notNull().unique();
    table.string("genre");
    table.text("desc");
    table.string("cover_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("book");
};

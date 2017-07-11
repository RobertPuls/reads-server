
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("author", table => {
    table.increments("id");
    table.string("first_name").notNull();
    table.string("last_name").notNull();
    table.text("bio");
    table.string("img_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("author");
};

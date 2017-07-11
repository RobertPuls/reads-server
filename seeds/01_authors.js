
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("author").del()
    .then(function () {
      // Inserts seed entries
      return knex("author").insert([
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      {
        "first_name": "",
        "last_name": "",
        "bio": "",
        "img_url": ""
      },
      ]);
    });
};

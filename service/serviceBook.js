const db = require("../database");

module.exports.getAllBooks = async () => {
  const [records] = await db.query("select * from bookStore;");
  return records;
};

module.exports.getBook = async (id) => {
  const [record] = await db.query("select * from bookStore where id=?", [id]);
  return record;
};

module.exports.deleteBook = async (id) => {
  const [record] = await db.query("delete from bookStore where id=?", [id]);
  return record;
};

module.exports.addEditBook = async (obj, id = 0) => {
  const [record] = await db.query("call addEditBook(?,?,?,?,?)", [
    id,
    obj.title,
    obj.author,
    obj.genre,
    obj.publication_year,
  ]);
  return record;
};

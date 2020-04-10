const getTableData = (req, res, db) => {
  db.select("*")
    .from("blogpost")
    .then(items => {
      if (items.length) {
        console.log(items);
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const postTableData = (req, res, db) => {
  const { first, last, email, phone, location, hobby } = req.body;
  console.log(req.body);
  const added = new Date();
  db("blogpost")
    .insert({ first, last, email, phone, location, hobby, added })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const putTableData = (req, res, db) => {
  const { id, first, last, email, phone, location, hobby } = req.body;
  db("blogpost")
    .where({ id })
    .update({ first, last, email, phone, location, hobby })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db("blogpost")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
};

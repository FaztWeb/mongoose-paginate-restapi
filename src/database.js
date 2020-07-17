const { connect } = require("mongoose");

const makeConnection = async () => {
  const db = await connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Database is connected to', db.connection.host)
  return db;
};

module.exports = {makeConnection};

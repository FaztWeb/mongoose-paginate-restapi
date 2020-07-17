import { connect } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mydatabase";

const makeConnection = async () => {
  const db = await connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database is connected to", db.connection.host);
  return db;
};

export { makeConnection };

import app from "./app";
import { makeConnection } from "./database";

function init() {
  makeConnection();
  app.listen(3000);
  console.log("Server on port 3000");
}

init();

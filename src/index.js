const app = require("./app");
const { makeConnection } = require("./database");

function init() {
  makeConnection();
  app.listen(3000);
  console.log("Server on port 3000");
}

init();

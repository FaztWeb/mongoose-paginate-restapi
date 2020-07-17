import faker from "faker";
import { makeConnection } from "../src/database";
import Product from "../src/models/Product";

const createFakeProduct = () => ({
  name: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  price: faker.commerce.price(),
});

// generate fake products
const saveFakeProducts = async (db) => {
  // create 100 products
  for (let i = 0; i < 100; i++) {
    await Product.create(createFakeProduct());
    console.log(`Product ${i} created`);
  }

  // close the mongoose connection
  db.connection.close();
};

(async function () {
  // make database connection
  const db = await makeConnection();
  saveFakeProducts(db);
})();

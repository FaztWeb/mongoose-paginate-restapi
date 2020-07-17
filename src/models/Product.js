const { Schema, model } = require("mongoose");
const mongoosePagination = require("mongoose-paginate-v2");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

productSchema.plugin(mongoosePagination);

module.exports = model("Product", productSchema);

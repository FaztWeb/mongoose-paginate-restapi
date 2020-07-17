import { Schema, model } from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

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

export default model("Product", productSchema);

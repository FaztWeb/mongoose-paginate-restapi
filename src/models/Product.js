const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});

module.exports = model('Product', productSchema);
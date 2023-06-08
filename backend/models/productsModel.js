const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
   {
      nazwaProduktu: String,
      kategoriaProduktu: String,
      cena: Number,
      kaucja: Number,
      rodzaj: Boolean,
      ilosc: {
         type: Number,
         default: 1,
      },
      dostepneOd: Date,
      zdjecia: String,
   },
   {
      strict: false,
   }
);

module.exports = mongoose.model('product', ProductsSchema);

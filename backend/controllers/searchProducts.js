const productsModel = require('../models/productsModel');

const _noProductsMsg = `Wyglada na to ze nie posiadamy jeszcze szukanego produktu`;

const searchByName = async (req, res, next) => {
   try {
      const { nazwaProduktu } = req.query;
      const productRegex = new RegExp(nazwaProduktu, 'i');

      const findProducts = await productsModel
         .find({ nazwaProduktu: productRegex })
         .select('kategoriaProduktu nazwaProduktu cena kaucja zdjecia');

      if (!findProducts.length) return res.status(404).json({ message: _noProductsMsg });

      res.status(200).json(findProducts);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const searchByCategory = async (req, res, next) => {
   try {
      const kategoriaProduktu = req.params.kategoriaProduktu;
      const findProducts = await productsModel
         .find({ kategoriaProduktu })
         .select('kategoriaProduktu nazwaProduktu cena kaucja zdjecia');

      if (!findProducts.length) return res.status(404).json({ message: _noProductsMsg });
      res.status(200).json(findProducts);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const featuresProducts = async (req, res, next) => {
   try {
      const findProducts = await productsModel
         .find({ rodzaj: true })
         .select('kategoriaProduktu nazwaProduktu cena kaucja zdjecia rodzaj');

      if (!findProducts.length) return res.status(404).json({ message: _noProductsMsg });

      res.status(200).json(findProducts);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

module.exports = { searchByName, searchByCategory, featuresProducts };

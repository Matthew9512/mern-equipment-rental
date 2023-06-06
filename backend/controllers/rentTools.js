const productsModel = require('../models/productsModel');

const getProductDetails = async (req, res) => {
   console.log(`w`);
   try {
      const { id } = req.params;

      if (!id) return res.status(404).json({ message: `No data provided` });

      const findProducts = await productsModel.findById(id);

      res.status(200).json(findProducts);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

module.exports = { getProductDetails };

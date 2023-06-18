const nodemailer = require('nodemailer');
const productsModel = require('../models/productsModel');
const emailOptions = require('../config/emailOptions');

const getProductDetails = async (req, res) => {
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

const checkAvailability = async (req, res, next) => {
   try {
      const { id } = req.params;

      const findProducts = await productsModel.findById(id);

      const amount = findProducts.ilosc;
      if (amount === 0)
         return res.status(200).json({
            message: `Produkt chwilowo niedostepny, przewidywana dostawa: ${findProducts.dostepnyOd}`,
            amount,
         });

      res.status(200).json({ message: `Aktualnie posiadamy ${amount} sztuk`, amount });
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const reserveTools = async (req, res, next) => {
   try {
      const productsReq = req.body.at(0);
      const { ...client } = req.body.at(1);

      // arr of products IDs that user want to reserve
      const productsIDs = productsReq.map((value) => value.id).filter((value) => value);

      const findProducts = await productsModel.find({ _id: { $in: productsIDs } });

      let reservedProductsArr = [];
      let unavailableProductsArr = [];

      for (const [index, product] of findProducts.entries()) {
         if (product.ilosc >= +productsReq.at(index).ilosc) {
            // Reserve the product
            product.ilosc -= +productsReq.at(index).ilosc;
            product.dostepnyOd = productsReq.at(index).zwrot;
            await product.save();
            reservedProductsArr.push({
               product,
               wynajem: productsReq.at(index).wynajem,
               zwrot: productsReq.at(index).zwrot,
               ilosc: productsReq.at(index).ilosc,
            });
         } else {
            unavailableProductsArr.push(product);
         }
      }
      console.log(reservedProductsArr);
      console.log(unavailableProductsArr);
      if (!reservedProductsArr.length)
         return res
            .status(404)
            .json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi, prosze sprawdzic dostepnosc` });

      res.status(200).json({ message: `commented oun code` }); // for dev
      return;

      sendNotifications(reservedProductsArr, client, res, next);

      // clear arrays
      reservedProductsArr = [];
      unavailableProductsArr = [];
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const sendNotifications = async (reservedProductsArr, client, res, next) => {
   // email adress and html template

   const recipientsOptionsArr = emailOptions(reservedProductsArr, client);

   // email account from where mails are send
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.mail_sender_user,
         pass: process.env.mail_sender_pass,
      },
   });

   recipientsOptionsArr.forEach(async (value) => {
      try {
         // reciver of mails
         const reciver = await transporter.sendMail({
            from: `FIRMA <${process.env.mail_sender_user}>`,
            subject: 'rezerwacja narzedzi',
            to: value.email,
            html: value.html,
         });

         console.log(`message send`, reciver.accepted);
         console.log(`message id`, reciver.messageId);
         console.log(reciver);
         res.status(200).json({ message: `Produkt zarezerwowany prawidlowo` });
      } catch (error) {
         next(error);
      }
   });
};

module.exports = { getProductDetails, reserveTools, checkAvailability };

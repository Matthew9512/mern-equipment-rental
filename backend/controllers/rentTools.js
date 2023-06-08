const nodemailer = require('nodemailer');
const productsModel = require('../models/productsModel');

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

const reserveTools = async (req, res, next) => {
   try {
      const { id, ilosc } = req.body;

      if (!id) return res.status(404).json({ message: `No data provided` });
      // zdjecia

      const findProducts = await productsModel.findOneAndUpdate(
         { _id: id, ilosc: { $gte: +ilosc } },
         { $inc: { ilosc: -+ilosc } }
      );

      if (!findProducts) return res.status(404).json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi` });

      res.status(200).json({ message: `commented oun code` }); // for dev
      return;
      //
      emailSettings(req.body, findProducts, res, next);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const emailSettings = async (data, findProducts, res, next) => {
   // id?
   try {
      const { imie, nazwisko, email, numer, wynajem, zwrot, ilosc } = data;
      const { nazwaProduktu, cena } = findProducts;

      const html = `
      <h1>nowy klient</h1>
      <p>imie: ${imie}</p>
      <p>nazwisko: ${nazwisko}</p>
      <p>email: ${email}</p>
      <p>numer: ${numer}</p>
      <p>nazwa narzedzia: ${nazwaProduktu}</p>
      <p>cena: ${cena}</p>
      <p>wynajecie: ${wynajem}</p>
      <p>zwrot: ${zwrot}</p>
      <p>ilosc: ${ilosc}</p>`;

      await sendNotifications(html, email, res, next);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const sendNotifications = async (html, email, res, next) => {
   // email account from where mails are send
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.mail_sender_user,
         pass: process.env.mail_sender_pass,
      },
   });

   try {
      // reciver of mails
      const reciver = await transporter.sendMail({
         from: `User <${process.env.mail_sender_user}>`,
         // to: email, // <==
         to: process.env.mail_reciver_user,
         subject: 'test',
         html: html,
      });

      console.log(`message send`, reciver.accepted);
      console.log(`message id`, reciver.messageId);
      console.log(reciver);
      res.status(200).json({ message: `Produkt zarezerwowany` });
   } catch (error) {
      next(error);
   }
};

module.exports = { getProductDetails, reserveTools };

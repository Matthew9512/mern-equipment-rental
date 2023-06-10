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

      const reservedProductsArr = [];
      const unavailableProductsArr = [];

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

      if (!reservedProductsArr.length)
         return res
            .status(404)
            .json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi, prosze sprawdzic dostepnosc` });

      // res.status(200).json({ message: `commented oun code` }); // for dev
      // return;

      sendNotifications(reservedProductsArr, client, res, next);
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
            // to: email, // <==
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

// const reserveTools = async (req, res, next) => {
//    try {
//       const { id, ilosc, zwrot } = req.body;

//       if (!id) return res.status(404).json({ message: `No data provided` });
//       // zdjecia

//       const findProducts = await productsModel.findOneAndUpdate(
//          { _id: id, ilosc: { $gte: +ilosc } },
//          { $inc: { ilosc: -+ilosc }, dostepnyOd: zwrot }
//       );

//       if (!findProducts) return res.status(404).json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi` });

//       res.status(200).json({ message: `commented oun code` }); // for dev
//       return;
//       //
//       emailSettings(req.body, findProducts, res, next);
//    } catch (error) {
//       console.log(error.message);
//       next(error);
//    }
// };

// ===========
// try {
//    // reciver of mails
//    const reciver = await transporter.sendMail({
//       from: `User <${process.env.mail_sender_user}>`,
//       // to: email, // <==
//       to: process.env.mail_reciver_user,
//       subject: 'klient',
//       html: htmlBody,
//    });

//    console.log(`message send`, reciver.accepted);
//    console.log(`message id`, reciver.messageId);
//    console.log(reciver);
//    res.status(200).json({
//       message: `Produkt zarezerwowany prawidlowo w razie jakichkolwiek pytan prosimy o kontakt telefoniczny`,
//    });
// } catch (error) {
//    next(error);
// }
// const nodemailer = require('nodemailer');
// const productsModel = require('../models/productsModel');

// const getProductDetails = async (req, res) => {
//    try {
//       const { id } = req.params;

//       if (!id) return res.status(404).json({ message: `No data provided` });

//       const findProducts = await productsModel.findById(id);

//       res.status(200).json(findProducts);
//    } catch (error) {
//       console.log(error.message);
//       next(error);
//    }
// };

// const checkAvailability = async (req, res, next) => {
//    try {
//       const { id } = req.params;

//       const findProducts = await productsModel.findById(id);

//       const amount = findProducts.ilosc;
//       if (amount === 0)
//          return res.status(200).json({
//             message: `Produkt chwilowo niedostepny, przewidywana dostawa: ${findProducts.dostepnyOd}`,
//             amount,
//          });

//       res.status(200).json({ message: `Aktualnie posiadamy ${amount} sztuk`, amount });
//    } catch (error) {
//       console.log(error.message);
//       next(error);
//    }
// };

// const reserveTools = async (req, res, next) => {
//    try {
//       const { ...client } = req.body.at(1);
//       const productsReq = req.body.at(0);
//       // arr of products IDs that user want to reserve
//       const productsIDs = productsReq.map((value) => value.id).filter((value) => value);

//       const findProducts = await productsModel.find({ _id: { $in: productsIDs } });

//       const reservedProductsArr = [];
//       const unavailableProductsArr = [];

//       for (const [index, product] of findProducts.entries()) {
//          if (product.ilosc >= +productsReq.at(index).ilosc) {
//             // Reserve the product
//             product.ilosc -= +productsReq.at(index).ilosc;
//             product.dostepnyOd = productsReq.at(index).zwrot;
//             await product.save();
//             reservedProductsArr.push({
//                product,
//                wynajem: productsReq.at(index).wynajem,
//                zwrot: productsReq.at(index).zwrot,
//                ilosc: productsReq.at(index).ilosc,
//             });
//          } else {
//             unavailableProductsArr.push(product);
//          }
//       }

//       if (!reservedProductsArr.length)
//          return res
//             .status(404)
//             .json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi, prosze sprawdzic dostepnosc` });

//       // res.status(200).json({ message: `commented oun code` }); // for dev
//       // return;

//       emailSettings(reservedProductsArr, client, res, next);
//    } catch (error) {
//       console.log(error.message);
//       next(error);
//    }
// };

// const emailSettings = async (reservedProductsArr, client, res, next) => {
//    // id?
//    try {
//       const { imie, nazwisko, email, numer } = client;

//       const template = reservedProductsArr
//          .map(
//             (value) =>
//                `<p>nazwa narzedzia: ${value.product?.nazwaProduktu}</p>
//                <p>cena: ${value.product?.cena}</p>
//                <p>ilosc: ${value?.ilosc}</p>
//                <p>wynajecie: ${value?.wynajem}</p>
//                <p>zwrot: ${value?.zwrot}</p>`
//          )
//          .join('');

//       const html = `<h1>nowy klient</h1>
//          <p>imie: ${imie}</p>
//          <p>nazwisko: ${nazwisko}</p>
//          <p>email: ${email}</p>
//          <p>numer: ${numer}</p>`;

//       const htmlBody = html.concat(template);

//       await sendNotifications(htmlBody, email, res, next);
//    } catch (error) {
//       console.log(error.message);
//       next(error);
//    }
// };

// const sendNotifications = async (htmlBody, email, res, next) => {
//    // email account from where mails are send
//    const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//          user: process.env.mail_sender_user,
//          pass: process.env.mail_sender_pass,
//       },
//    });

//    const recipientsList = [
//       { email: process.env.mail_reciver_user, html: htmlBody },
//       {
//          email: email,
//          html: '<p>Produkt zarezerwowany prawidlowo w razie jakichkolwiek pytan prosimy o kontakt telefoniczny</p>',
//       },
//    ];

//    recipientsList.forEach(async (value) => {
//       try {
//          // reciver of mails
//          const reciver = await transporter.sendMail({
//             from: `FIRMA <${process.env.mail_sender_user}>`,
//             // to: email, // <==
//             to: value.email,
//             subject: 'klient',
//             html: value.html,
//          });

//          console.log(`message send`, reciver.accepted);
//          console.log(`message id`, reciver.messageId);
//          console.log(reciver);
//          res.status(200).json({
//             message: `Produkt zarezerwowany prawidlowo w razie jakichkolwiek pytan prosimy o kontakt telefoniczny`,
//          });
//       } catch (error) {
//          next(error);
//       }
//    });
// };

// module.exports = { getProductDetails, reserveTools, checkAvailability };

// // const reserveTools = async (req, res, next) => {
// //    try {
// //       const { id, ilosc, zwrot } = req.body;

// //       if (!id) return res.status(404).json({ message: `No data provided` });
// //       // zdjecia

// //       const findProducts = await productsModel.findOneAndUpdate(
// //          { _id: id, ilosc: { $gte: +ilosc } },
// //          { $inc: { ilosc: -+ilosc }, dostepnyOd: zwrot }
// //       );

// //       if (!findProducts) return res.status(404).json({ message: `Nie mozna zarezerwowac podanej ilosci narzedzi` });

// //       res.status(200).json({ message: `commented oun code` }); // for dev
// //       return;
// //       //
// //       emailSettings(req.body, findProducts, res, next);
// //    } catch (error) {
// //       console.log(error.message);
// //       next(error);
// //    }
// // };

// // ===========
// // try {
// //    // reciver of mails
// //    const reciver = await transporter.sendMail({
// //       from: `User <${process.env.mail_sender_user}>`,
// //       // to: email, // <==
// //       to: process.env.mail_reciver_user,
// //       subject: 'klient',
// //       html: htmlBody,
// //    });

// //    console.log(`message send`, reciver.accepted);
// //    console.log(`message id`, reciver.messageId);
// //    console.log(reciver);
// //    res.status(200).json({
// //       message: `Produkt zarezerwowany prawidlowo w razie jakichkolwiek pytan prosimy o kontakt telefoniczny`,
// //    });
// // } catch (error) {
// //    next(error);
// // }

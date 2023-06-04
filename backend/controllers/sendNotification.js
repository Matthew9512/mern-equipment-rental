const nodemailer = require('nodemailer');

const reserveTools = async (req, res, next) => {
   console.log(`email`);
   return;
   try {
      console.log(req.body);
      const { username, surname, toolName, price, startDate, endDate } = req.body;

      if (!toolName) return res.status(400).json({ message: `No data provided` });

      const html = `
    <h1>nowy klient</h1>
    <p>imie: ${username}</p>
    <p>nazwisko: ${surname}</p>
    <p>nazwa narzedzia: ${toolName}</p>
    <p>cena: ${price}</p>
    <p>wynajecie: ${startDate}</p>
    <p>zwrot: ${endDate}</p>
    `;

      const send = await sendNotifications(html);
      console.log(send);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const sendNotifications = async (html) => {
   // email account from where mails are send
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.mail_sender_user,
         pass: process.env.mail_sender_pass,
      },
   });

   // reciver of mails
   const reciver = await transporter.sendMail({
      from: `Username <${process.env.mail_sender_user}>`,
      to: process.env.mail_reciver_user,
      subject: 'test',
      html: html,
   });

   console.log(`message send`, reciver.accepted);
   console.log(`message id`, reciver.messageId);

   return reciver;
};

module.exports = sendNotifications;

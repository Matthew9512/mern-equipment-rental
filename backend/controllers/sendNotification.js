const nodemailer = require('nodemailer');

const sendNotifications = async (req, res, next) => {
   try {
      const { tool, id, date } = req.body;

      if (!tool || !id || !date) return res.status(400).json({ message: `No data provided` });

      const html = `
    <h1>one more test xd</h1>
    <p>${tool}</p>
    <p>${id}</p>
    <p>${date}</p>
    `;

      const send = await mailSettings(html);
      console.log(send);
   } catch (error) {
      console.log(error.message);
      next(error);
   }
};

const mailSettings = async (html) => {
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

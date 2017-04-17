import express from 'express';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import keys from '../../../config/keys';

const router = express.Router();

var transporter = nodemailer.createTransport((smtpTransport({
    service: 'Mailgun',
    auth: {
        user: keys.MAILGUN.userID,
        pass: keys.MAILGUN.password
    }
})));

router.post('/', (req, res) => {
  const options = Object.assign(
    {
      bcc: 'galenweber@gmail.com',
      from: 'bailrefund@bailrefund.com',
      subject: 'BailRefund Notification',
    },
    req.body
  );

  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info);
    }
  });
});

export default router;


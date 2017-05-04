import express from 'express';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import multer from 'multer';
import keys from '../../../config/keys';

const upload = multer();

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

router.post('/photo', upload.array('photo', 1), (req, res) => {

  const options = {
    bcc: 'galenweber@gmail.com',
    from: 'bailrefund@bailrefund.com',
    subject: `Submitted Receipt (${req.body.id})`,
    text: req.body.id,
    attachments: [
      {
        filename: 'receipt.jpg',
        content: req.files[0].buffer,
        contentType: req.files[0].mimetype
      }
    ],
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info);
    }
  });
});


export default router;


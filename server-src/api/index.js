import express from 'express'
import emailApi from './email';

const router = express.Router();

router.use('/email', emailApi);

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});

module.exports = router;


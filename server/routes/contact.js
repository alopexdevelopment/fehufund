const router = require('express').Router();
const { sendEmails } = require('../nodemailer/sendEmails');

// health check
router.route('/').get((req, res) => {
    console.log('TESTING')
    res.json(true)
})

// uses nodemailer to send email.
router.route('/send').post((req, res) => {
    sendEmails({
        email: req.body.email,
        subject: `FEHU FUND: ${req.body.name} wants to connect.`,
        message: `FROM: ${ req.body.email } <br><br> ${ req.body.message }`
    }).then((result) => {
        console.log(`these are the results: ${result}`)
        res.json(result);
    })
})

module.exports = router;
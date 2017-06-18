var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('modal/contact', { title: 'Bakti Putra Nusantara' });
});

//post routing ke email
router.post('/send', function (req, res, next) {
    var transport = nodemailer.createTransport({
        //service dan credenstial
        service: 'Gmail',
        auth: {
            user: 'kasur.rusak404@gmail.com',
            pass: '1631nz94'
        }
    });
    var mailOp = {
        from: 'Bakti Putra Nusantara - <kasur.rusak404@gmail.com>',
        to: 'putra.aji48.ap@gmail.com',
        subject: 'Contact from kasur.rusak404@gmail.com',
        //plain text
        text:'kamu dapet pesan dari - User' + req.body.name + '@baktiputranusantara.com\n' + 'Email : ' + req.body.email + 'Message' + req.body.message,
        html: '<h3> You Have a New Message!</h3><br/><ul><li>From : '+ req.body.name + '@baktiputranusantara</li><li>' + 'Email : '+ req.body.email + '</li><li><p>' + req.body.message + '</p></li></ul>'
    };
    transport.sendMail(mailOp, function (error, info) {
        if(error) {
            console.log("Email Tidak terkirim !\n" + error);
            res.redirect('/');
        } else {
            console.log('Pesan Sukses Terkirim !\n' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;

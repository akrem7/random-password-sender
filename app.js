function sendNewPassword(userEmail)
{
    const generateRandomPassword = require('./randomPasswordGenerator');
    const sender = require('./sender');
    const newRandomPassword = generateRandomPassword(16);
    const emailText = "Your new password is : "+newRandomPassword;
    const nodemailer = require('nodemailer');
    const myEmail = sender.email;
    const myPassword = sender.password;
    let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:
        {
            user: myEmail,
            pass: myPassword
        }
    })
    let message = 
    {
        from : myEmail,
        to : userEmail,
        subject : 'New Password',
        text : emailText
    };
    transporter.sendMail(message,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent : ',info);
        }
    });}
sendNewPassword("akremezzewi@gmail.com")
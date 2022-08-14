const sgMail=require('@sendgrid/mail')
const sendgridAPIkkey="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"
sgMail.setApiKey(sendgridAPIkkey);


function sendGridFunc2(email,name){
    sgMail.send({
        to:email,
        from:'atul012001@gmail.com',
        subject:'sendGripEmail is sending mail perfectly..',
        text:`hope you are doing well in your life ${name}`
    })
}

module.exports={
    sendGridFunc2,
}
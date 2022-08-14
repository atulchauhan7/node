var sgMail=require('@sendgrid/mail')
const sendgridAPIkkey="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"
sgMail.setApiKey(sendgridAPIkkey);


const sendGridFunc2= (email,name)=>{
    console.log('sendGrid is running')
    sgMail.send({
        to:'chauhanatul6140@gmail.com',
        from:'atul012001@gmail.com',
        subject:'sendGridEmail is sending mail perfectly..',
        text:`hope you are doing well in your life `
    })
}

module.exports={
    sendGridFunc2,
}
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event,context,callback){
    try {
        
        const name = event.queryStringParameters.name
        const email = event.queryStringParameters.email
        const mood = event.queryStringParameters.mood
        const message = event.queryStringParameters.message

        const payload = {
            to: `${name} <${email}>`,
            from: `noreply@darkmeowproductions.com`,
            dynamicTemplateData: {
                greeting: `Hello ${name}`,
                email: `${email}`,
                mood: `${mood}`,
                message: `${message}`
                // date: `${date}`,
                // time: `${time}`,
            }
        }

        await mail.send({
            from: 'Darkskittlz <noreply@darkmeowproductions.com>',
            replyTo: "noreply@darkmeowproductions.com",
            templateId: 'd-66a2252e28cd4ad19d087b4568bd54f9 ',
            personalizations: [payload] 
        }); 

        return {
            statusCode: 200,
            body: JSON.stringify({message: 'Email Sent!' }),
        };
    } catch (error) {
        console.log(error.response.body);
        return {
            statusCode: 500,
            body: JSON.stringify({message: 'ERROR SENDING EMAIL'}),
        };
    }
}



// module.exports = (req, res) => {
//   let msg = "hello there, how are you Tristan!!";

//   // msg = "Boo!";
//   res.json({
//     msg,
//   });
// };
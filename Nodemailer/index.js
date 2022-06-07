import nodemailer from "nodemailer"

// const transporter = nodemailer.createTransport({
//   host: process.env.HOST_MAIL,
//   port: process.env.HOST_PORT,
//   auth: {
//     user: process.env.HOST_USER,
//     pass: process.env.HOST_PASS
//   }
// })

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'your.user@email.com',
        pass: 'yourPassword'
  }
})

const sender = {
  name: "Usuário sender",
  email: "sender@teste.com"
}

const receiver = {
  email: "bar@exemplo.com"
}

const mailContent = {
  subject: "Hello email",
  text: "funcionou",
  html: "<strong>Funcionou</strong>"
}

async function sendMail(transporter, sender, receiver, mailContent){

  const mail = await transporter.sendMail({
    from:   `"${sender.name}" ${sender.email}`,
    to:      `${receiver.email}`,
    subject: `${mailContent.subject}`,
    text:    `${mailContent.text}`,
    html:    `${mailContent.html}`,
  })

  console.log("email enviado: ", mail.messageId);
  console.log("URL do Ethereal: ", nodemailer.getTestMessageUrl(mail));

}

async function mail(){
  try{
    await sendMail(transporter, sender, receiver, mailContent)
  } catch(error){
    console.log(error);
  }
}

mail();
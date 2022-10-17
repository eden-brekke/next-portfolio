const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);


export default async function contactApi(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'eden.lorrai@gmail.com',
    from: 'eden.brekke@gmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  console.log(body);
  res.status(200).json({ status: 'OK' });
};
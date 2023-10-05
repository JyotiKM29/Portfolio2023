import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.pass,
    },
  });

  // Prepare email data
  const mailOptions = {
    from: process.env.email,
    to: email,
    subject: `I recieved YOUR email regarding ${subject}`,
    text: `Dear ${name} \n Thank you for visiting my portfolio and for this email. \n I just want to inform you that I have received your messege with your Email: ${email}\n In which you said: ${message} \n\n I am grateful for this, Let me know if anything else i can do for you. \n if your email finds me well then I will respond your messege as soon as possible \n Regards, \n Jyoti Km \n Front-End Developer`,
  };

  const mailOption1 = {
    from: email,
    to: process.env.email,
    subject: `Regarding ${subject}`,
    text: `You have received a message from ${name} with this email ${email} \n ${message} \n \n Respond him/her quickly`,
  };

  const mailOption2 = {
    from: process.env.email,
    to: "pandeyyysuraj@gmail.com",
    subject: `Regarding ${subject}`,
    text: `You have received a message from ${name} with this email ${email} \n ${message} \n \n Respond him/her quickly`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOption1);
    await transporter.sendMail(mailOption2);
    console.log("email sent");
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}

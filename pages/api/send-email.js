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
    subject: `New Contact Form Submission: ${subject}`,
    text: `I have received your messege.\n\n Dear ${name} \n with your Email: ${email}\n your Message: ${message} \n i will respond you quickly \nRegards, \n Jyoti Km`,
  };

  const mailOption1 = {
    from: email,
    to: process.env.email,
    subject: `Regarding ${subject}`,
    text: `You have received a message from ${name} with this email ${email} \n ${message} \n \n Respond him/her quickly`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOption1);
    console.log("email sent");
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}

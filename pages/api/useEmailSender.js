import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
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
    text: `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  const mailOption1 = {
    from : email,
    to : process.env.email,
    subject: `regarding ${subject}`,
    text: `you have recieved a messege: \n ${message}`
  }




  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOption1);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}

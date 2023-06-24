import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const client = await MongoClient.connect(URI);
      const db = client.db('your-database-name'); // Replace with your database name
      const collection = db.collection('contacts'); // Replace with your collection name

      const contact = { name, email, subject, message };
      await collection.insertOne(contact);

      client.close();

      res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while submitting the contact form.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

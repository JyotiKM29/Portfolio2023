import Visitor from '../../Models/counterModel';
import connectDB from '../../Middleware/conn';

// Connect to the database if necessary
connectDB();

// Define the API route handler
const incrementVisitorsCount = async (req, res) => {
  if (req.method === 'GET') {
    try {
      let visitor = await Visitor.findOne();

      if (!visitor) {
        visitor = new Visitor();
        await visitor.save();
      }

      visitor.count++;
      await visitor.save();

      res.status(200).json({ count: visitor.count });
    } catch (error) {
      console.error('Error retrieving visitors count:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(404).json({ error: 'Not found' });
  }
};

export default incrementVisitorsCount;

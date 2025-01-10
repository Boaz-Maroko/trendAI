export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { campaignId } = req.query;
      const { submissionLink } = req.body;
  
      // Example mock logic, replace with a real database operation
      const submission = { campaignId, submissionLink, timestamp: new Date() };
  
      res.status(201).json({ message: 'Submission successful', submission });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json([
        { id: 1, name: 'Campaign A', status: 'Active', deadline: '2025-01-31' },
        { id: 2, name: 'Campaign B', status: 'Completed', deadline: '2024-12-31' },
      ]);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  
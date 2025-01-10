export default function handler(req, res) {
    const { campaignId } = req.query;
  
    // Mock data (Replace with your real data fetching logic)
    const campaigns = [
      { id: '1', name: 'Campaign 1', status: 'Ongoing', deadline: '2025-01-20' },
      { id: '2', name: 'Campaign 2', status: 'Completed', deadline: '2025-01-10' },
    ];
  
    // Find the campaign by id
    const campaign = campaigns.find((c) => c.id === campaignId);
  
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
  
    // Return the campaign data
    return res.status(200).json(campaign);
  }
  
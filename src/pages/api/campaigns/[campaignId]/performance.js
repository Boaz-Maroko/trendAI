export default async function handler(req, res) {
    const { campaignId } = req.query;
  
    // Simulating fetching performance data from a database or external API
    const performanceData = {
      totalPosts: 10, // Example value
      postDates: ['2024-12-15', '2024-12-16'], // Example dates
      engagement: '500 likes, 200 shares', // Example engagement
    };
  
    // Send the performance data as a JSON response
    res.status(200).json(performanceData);
  }
  
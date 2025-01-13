import { useEffect, useState } from "react";
import { getCampaignById } from "../services/api";

export default function CampaignDetails({ id }) {
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    async function fetchCampaignDetails() {
      try {
        const data = await getCampaignById(id); // Fetch campaign details
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    }
    fetchCampaignDetails();
  }, [id]);

  if (!campaign) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">{campaign.name}</h1>
      <p>Status: {campaign.status}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
      <h2 className="text-2xl mt-6">Influencers</h2>
      <ul>
        {campaign.influencers.map((influencer) => (
          <li key={influencer._id}>
            {influencer.name} - {influencer.postsCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

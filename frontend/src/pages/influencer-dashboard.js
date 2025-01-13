import { useState, useEffect } from "react";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { getAllCampaigns } from "@/services/api";
import { useRouter } from "next/router"; // Import useRouter for navigation

export default function InfluencerDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter hook

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getAllCampaigns();
        setCampaigns(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching campaigns.");
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleCampaignClick = (id) => {
    router.push(`/influencers/${id}`); // Navigate to the details page with campaign id
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Influencer Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            onClick={() => handleCampaignClick(campaign._id)} // Pass id when clicked
            className="cursor-pointer" // Adding cursor style for better UX
          >
            <CampaignCard campaign={campaign} />
          </div>
        ))}
      </div>
    </div>
  );
}

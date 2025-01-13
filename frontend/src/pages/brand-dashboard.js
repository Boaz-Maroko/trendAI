import { useRouter } from "next/router";
import CampaignList from "../components/campaigns/CampaignList";
import { getAllCampaigns } from "../services/api";
import { useEffect, useState } from "react";

export default function BrandDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const data = await getAllCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    }
    fetchCampaigns();
  }, []);

  const handleNewCampaign = () => {
    router.push("/campaigns/new"); // Navigate to the campaign creation page
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Brand Dashboard</h1>
      <button
        onClick={handleNewCampaign}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Create New Campaign
      </button>
      <CampaignList campaigns={campaigns} />
    </div>
  );
}

import { useState } from "react";
import CampaignCard from "@/components/campaigns/CampaignCard";

export default function BrandDashboard() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Campaign A", status: "Active", deadline: "2025-01-31" },
    { id: 2, name: "Campaign B", status: "Completed", deadline: "2024-12-15" },
    { id: 3, name: "Campaign C", status: "Pending", deadline: "2025-02-10" },
  ]);

  return (
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">Brand Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
  );
}

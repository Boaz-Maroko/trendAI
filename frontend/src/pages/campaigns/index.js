import CampaignList from "@/components/campaigns/CampaignList";
import Layout from "@/components/layout/layout";

export default function CampaignsPage() {
  const campaigns = [
    { id: 1, name: "Campaign A", status: "Active", deadline: "2025-01-31" },
    { id: 2, name: "Campaign B", status: "Completed", deadline: "2024-12-15" },
    { id: 3, name: "Campaign C", status: "Pending", deadline: "2025-02-10" },
  ];

  return (
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">Campaigns</h1>
        <CampaignList campaigns={campaigns} />
      </div>
  );
}

import InfluencerCard from "./InfluencerCard";

export default function InfluencerList({ campaigns }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <InfluencerCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}

import Link from "next/link";

export default function CampaignCard({ campaign }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{campaign.name}</h2>
      <p>Status: {campaign.status}</p>
      <p>Deadline: {campaign.deadline}</p>
      <Link href={`/campaigns/${campaign._id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
}

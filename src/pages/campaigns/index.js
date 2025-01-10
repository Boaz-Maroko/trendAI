import Link from 'next/link';

export default function CampaignList({ campaigns, error }) {
  if (error) {
    return (
      <div className="p-6 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
        <p className="text-red-600">Failed to load campaigns: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      <ul>
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <li key={campaign.id} className="mb-4 p-4 border-b border-gray-200">
              <Link href={`/campaigns/${campaign.id}`} className="text-blue-600 hover:underline">
                <div className="font-semibold">{campaign.name}</div>
                <div className="text-sm text-gray-600">
                  Status: {campaign.status} | Deadline: {campaign.deadline}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No campaigns available at the moment.</p>
        )}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/campaigns');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const campaigns = await res.json();
    return { props: { campaigns } };
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return { props: { campaigns: [], error: error.message } };
  }
}

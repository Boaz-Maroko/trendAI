import { useEffect, useState } from 'react';

export default function CampaignDetails({ campaign }) {
  const [performance, setPerformance] = useState(null);

  // Fetch performance data when the component mounts
  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const res = await fetch(`/api/campaigns/${campaign.id}/performance`);
        if (res.ok) {
          const data = await res.json();
          setPerformance(data);
        } else {
          console.error('Error fetching performance data');
        }
      } catch (error) {
        console.error('Error fetching performance data', error);
      }
    };

    fetchPerformance();
  }, [campaign.id]);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{campaign.name}</h1>
      <p className="text-gray-600">Status: {campaign.status}</p>
      <p className="text-gray-600">Deadline: {campaign.deadline}</p>

      {/* Performance Snapshot */}
      {performance ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Performance Snapshot</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Total Posts: {performance.totalPosts}</li>
            <li>Posting Dates: {performance.postDates.join(', ')}</li>
            <li>Estimated Engagement: {performance.engagement}</li>
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">Loading performance data...</p>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { campaignId } = params;
  const res = await fetch(`http://localhost:3000/api/campaigns/${campaignId}`);
  const campaign = await res.json();

  return { props: { campaign } };
}

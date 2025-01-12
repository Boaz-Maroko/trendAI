import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCampaignById, submitContent, getInfluencerIdByEmail } from "@/services/api";
import { getEmailFromToken } from "@/services/api";

export default function CampaignDetails() {
  const router = useRouter();
  const { id } = router.query; 
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submissionLink, setSubmissionLink] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Hidden fields
  const [influencerId, setInfluencerId] = useState(null); // Influencer ID fetched from the backend
  const submissionDate = new Date().toISOString(); // Auto-fill with the current date

  // Fetch campaign details and influencer ID
  useEffect(() => {
    if (id) { // Only fetch if id is available
      const fetchCampaign = async () => {
        try {
          const data = await getCampaignById(id); // Fetch campaign by ID
          setCampaign(data);
          setLoading(false);
        } catch (err) {
          setError("Error fetching campaign details.");
          setLoading(false);
        }
      };
      fetchCampaign();
    }
  }, [id]); // Depend on id, so this effect runs when id changes

  useEffect(() => {
    const fetchInfluencerId = async () => {
      const email = await getEmailFromToken(); // Get email from JWT token
      if (email) {
        console.log(email);
        try {
          const id = await getInfluencerIdByEmail(email);
          setInfluencerId(id);
        } catch (err) {
          setError("Error fetching influencer ID.");
        }
      } else {
        setError("Email not found in token.");
      }
    };

    fetchInfluencerId();
  }, []); // Empty dependency array ensures this runs only once

  // Handle content submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submissionLink) {
      setSubmissionStatus("Please provide a submission link.");
      return;
    }

    if (!influencerId) {
      setSubmissionStatus("Error: Influencer ID is not available.");
      return;
    }

    const formData = {
      campaign_id: id,
      influencer_id: influencerId,
      submission_link: submissionLink,
      submission_date: submissionDate,
      status: "pending", // Default status is 'pending'
    };

    try {
      await submitContent(formData); // Submit the content using the API
      setSubmissionStatus("Submission successful!");
    } catch (err) {
      setSubmissionStatus("Error submitting content.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-4">{campaign.name}</h1>
      <p>Status: {campaign.status}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleString()}</p>
      <p className="mt-4">{campaign.instructions}</p>

      {/* Submission Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Hidden Fields */}
        <input
          type="hidden"
          value={id}
          name="campaign_id"
        />
        <input
          type="hidden"
          value={influencerId}
          name="influencer_id"
        />
        <input
          type="hidden"
          value={submissionDate}
          name="submission_date"
        />
        <input
          type="hidden"
          value="pending"
          name="status"
        />

        <label className="block mb-2">
          <span className="text-gray-700">Submission Link:</span>
          <input
            type="text"
            className="block w-full mt-1"
            placeholder="Enter your submission link"
            value={submissionLink}
            onChange={(e) => setSubmissionLink(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {submissionStatus && <p className="mt-4">{submissionStatus}</p>}
    </div>
  );
}

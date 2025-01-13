import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCampaignById, submitContent, getSubmissionsByCampaign, updateSubmissionStatus } from "@/services/api";

export default function CampaignDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState("influencerList"); // Tabs: "influencerList", "submissionApproval"

  useEffect(() => {
    if (id) {
      const fetchCampaign = async () => {
        try {
          const data = await getCampaignById(id);
          setCampaign(data);
        } catch (err) {
          setError("Error fetching campaign details.");
        } finally {
          setLoading(false);
        }
      };

      const fetchSubmissions = async () => {
        try {
          const data = await getSubmissionsByCampaign(id);
          setSubmissions(data);
        } catch (err) {
          setError("Error fetching submissions.");
        }
      };

      fetchCampaign();
      fetchSubmissions();
    }
  }, [id]);

  const handleApproveReject = async (submissionId, status) => {
    try {
      // Assuming you have an endpoint to update submission status
      await updateSubmissionStatus(submissionId, { status });
      setSubmissions((prevSubmissions) =>
        prevSubmissions.map((sub) =>
          sub._id === submissionId ? { ...sub, status } : sub
        )
      );
    } catch (err) {
      console.error("Error updating submission status", err);
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

      {/* Tabs */}
      <div className="mt-6 border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "influencerList" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("influencerList")}
        >
          Influencer List
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "submissionApproval" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("submissionApproval")}
        >
          Submission Approval
        </button>
      </div>

      {/* Influencer List */}
      {activeTab === "influencerList" && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Influencers</h2>
          {submissions.length > 0 ? (
            <ul>
              {submissions.map((submission) => (
                <li
                  key={submission._id}
                  className="mb-4 p-4 border rounded-lg bg-gray-100"
                >
                  <p>
                    <strong>Influencer ID:</strong> {submission.influencer_id}
                  </p>
                  <p>
                    <strong>Submission Date:</strong>{" "}
                    {new Date(submission.submission_date).toLocaleString()}
                  </p>
                  <p>
                    <strong>Post Count:</strong> {submission.post_count || 0}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No influencers have joined this campaign yet.</p>
          )}
        </div>
      )}

      {/* Submission Approval */}
      {activeTab === "submissionApproval" && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Submissions</h2>
          {submissions.length > 0 ? (
            <ul>
              {submissions.map((submission) => (
                <li
                  key={submission._id}
                  className="mb-4 p-4 border rounded-lg bg-gray-100"
                >
                  <p>
                    <strong>Influencer ID:</strong> {submission.influencer_id}
                  </p>
                  <p>
                    <strong>Submission Link:</strong>{" "}
                    <a
                      href={submission.submission_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {submission.submission_link}
                    </a>
                  </p>
                  <p>
                    <strong>Status:</strong> {submission.status}
                  </p>
                  <div className="mt-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                      onClick={() =>
                        handleApproveReject(submission._id, "approved")
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      onClick={() =>
                        handleApproveReject(submission._id, "rejected")
                      }
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No submissions available for approval.</p>
          )}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { createCampaign } from "../../services/api";
import { useRouter } from "next/router";

export default function NewCampaign() {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
    deadline: "",
    status: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert deadline to ISO string
      const payload = { ...formData, deadline: new Date(formData.deadline).toISOString() };
      await createCampaign(payload);
      router.push("/"); // Redirect to the dashboard after successful creation
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Campaign</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Campaign Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option value="">Select Status</option>
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
}

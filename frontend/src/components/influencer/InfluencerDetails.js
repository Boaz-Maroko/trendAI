import { useState } from "react";
import Button from "@/components/common/Button";

export default function InfluencerDetails({ campaign }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file submission logic here
    console.log("Submitted file:", file);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{campaign.name}</h1>
      <p className="text-gray-400 mb-6">{campaign.instructions}</p>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-300">
          Upload your submission:
        </label>
        <input
          type="file"
          className="block w-full text-gray-300 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer focus:outline-none"
          onChange={handleFileChange}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
}

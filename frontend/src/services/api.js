import axios from "axios";

const API_URL = 'http://localhost:3001'; // Update to match the API URL of your backend

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token"); // Assuming token is stored with the key 'token'
  }
  return null;
};

// Fetch the email from the JWT token by calling the server-side endpoint
export const getEmailFromToken = async () => {
  const token = getToken(); // Get token from localStorage

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.get(`${API_URL}/campaigns/verify-token`, {
      headers: {
        Authorization: `Bearer ${token}` // Send token in Authorization header
      }
    });
    console.log(response.data.email)
    return response.data.email; // Assuming the server sends back the email
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error('Invalid token or token expired');
  }
};

export const getAllCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/campaigns`);
    return response.data;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
};

export const getCampaignById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/campaigns/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching campaign with ID ${id}:`, error);
    throw error;
  }
};

export const submitContent = async (formData) => {
  try {
    // Ensure you're sending the correct content type (JSON in this case)
    const response = await axios.post(`${API_URL}/submissions`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting content:", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/influencers/create`, userData);
    return response.data; // This will return { email, token }
  } catch (error) {
    console.error("Error creating account:", error.response);
    throw new Error(error.response?.data?.message || 'Something went wrong!');
  }
};

// Get Influencer ID by email
export const getInfluencerIdByEmail = async (email) => {
  try {

    const response = await axios.get(`${API_URL}/influencers/id/${email}`);
    return response.data.id; // Returns the influencer ID
  } catch (error) {
    console.error("Error fetching influencer ID by email:", error);
    throw error; // Throw error to be handled in the component
  }
};

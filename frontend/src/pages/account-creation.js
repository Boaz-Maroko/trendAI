import { useState } from 'react';
import { createUser } from '../services/api'; // Import the function to make API requests

export default function AccountCreation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email) {
      setStatus('Please fill in all the fields.');
      return;
    }

    try {
      // Call the API to create the user and get the token
      const response = await createUser({ name, email });

      console.log("Response received:", response); // Log the response for debugging

      if (response && response.token) {
        // Store the token in localStorage
        localStorage.setItem('token', response.token);

        // Optionally, set user data in state or context for the logged-in user
        setStatus('Account created successfully! You are now logged in.');
      } else {
        setStatus('Account created, but no token received. Please try again.');
      }
    } catch (error) {
      console.error("Account creation failed:", error); // Log the error for debugging
      setStatus('Error creating account. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-4">Create an Account</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            className="block w-full mt-1 border-gray-300 rounded-lg p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-2 mt-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            className="block w-full mt-1 border-gray-300 rounded-lg p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>

      {status && <p className="mt-4 text-green-500">{status}</p>}
    </div>
  );
}

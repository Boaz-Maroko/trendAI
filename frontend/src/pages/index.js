import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Import Link component
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
      
      <div className="mt-6">
        <Link
          href="/account-creation" // Link to the account creation page
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
}

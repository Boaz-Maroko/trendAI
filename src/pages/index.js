import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TrendAI Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/campaigns"><span className="hover:text-blue-300">Campaigns</span></Link></li>
              <li><Link href="/performance"><span className="hover:text-blue-300">Performance</span></Link></li>
              <li><Link href="/profile"><span className="hover:text-blue-300">Profile</span></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex p-6 flex-col space-y-6">
        {/* Campaigns Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Total Campaigns</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Active Campaigns</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Completed Campaigns</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
          <p className="text-lg">Total Posts: 120</p>
          <p className="text-lg">Total Engagement: 5000 Likes, 2000 Shares</p>
        </div>
      </div>
    </div>
  );
}

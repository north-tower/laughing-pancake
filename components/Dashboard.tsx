"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Dashboard() {

  const [ads, setAds] = useState([]);

  // useEffect to fetch data from the API
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/ads"); // Replace with your API URL
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []); // 

  console.log(ads)
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-6 text-center text-2xl font-semibold">AERES</div>
        <nav className="mt-10">
          <a href="#" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
            Home
          </a>
          <a href="/ad" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
            Ads
          </a>
          <a href="#" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
            Reports
          </a>
        </nav>
        <div className="mt-auto px-4 py-6">
          <a href="#" className="block text-gray-300 py-2.5 px-4 hover:bg-gray-700 hover:text-white">
            Settings
          </a>
          <a href="#" className="block text-gray-300 py-2.5 px-4 hover:bg-gray-700 hover:text-white">
            Account
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Dashboard Header */}
        <header className="grid grid-cols-5 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-500">Total Reach</div>
            <div className="text-3xl font-bold">50,000</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-500">Total Engagement</div>
            <div className="text-3xl font-bold">15,000</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-500">Total Clicks</div>
            <div className="text-3xl font-bold">6,800</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-500">Total Cost</div>
            <div className="text-3xl font-bold">$2860.00</div>
          </div>
          <div className="flex items-center justify-end">
            <Link href={"/ad"} className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600">
              + Create New Ad
            </Link>
          </div>
        </header>

        {/* Ad Performance Chart Placeholder */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Ad Performance</h2>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            {/* Chart placeholder */}
            <span className="text-gray-500">Chart Component</span>
          </div>
        </div>

        {/* Active Ads Table */}
        
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Active Ads</h2>
          <table className="w-full mt-4 text-left table-auto">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Title</th>
                <th className="py-2">Type</th>
                <th className="py-2">Category</th>
                <th className="py-2">Duration</th>
                <th className="py-2">Cost/View</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
            {ads.map((ad) => (
              <tr>
                <td className="py-2">{ad.title}</td>
                <td className="py-2">{ad.category}</td>
                <td className="py-2">{ad.duration}</td>
                <td className="py-2">0</td>
                <td className="py-2">0</td>
                <td className="py-2 text-green-600">{ad.status}</td>
              </tr>

            ))}
             
             
            
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

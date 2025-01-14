import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">

      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800">Newsletter</h2>
        <p className="text-lg text-gray-600 mt-4">
          Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let,s stay updated!
        </p>
        <div className="mt-6 flex justify-center items-center">
          <input
            type="email"
            placeholder="Email..."
            className="border border-gray-300 rounded-l-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-black text-white py-2 px-6 rounded-r-lg hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="bg-black text-white py-10">
        <div className="flex justify-center space-x-6 text-lg mb-6">
      
        </div>
        <div className="text-center text-gray-400">
          <p>© The World Travel Guy 2025</p>
          <p className="mt-4">
            <a href="#" className="text-orange-400 hover:underline">
              Affiliate Disclosures
            </a>{" "}
            •{" "}
            <a href="#" className="text-orange-400 hover:underline">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="text-orange-400 hover:underline">
              Terms Of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

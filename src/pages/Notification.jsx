import React from 'react';

const Notification = () => {
  return (
    <div className="min-h-screen flex items-start justify-center pt-10">
      <div className="container max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1>Link Activity Notifications</h1>

        <div className="space-y-6">
          {/* Notification 1 */}
          <div className="bg-gray-100 border-l-4 border-orange-400 p-5 rounded-lg hover:bg-orange-50 hover:-translate-y-1 transition-all duration-300">
            <p className="text-maroon-600 font-semibold text-lg mb-2">
              Client <strong>Mr.Desai</strong> viewed <strong>Project</strong> portfolio.
            </p>
            <time className="block text-black text-sm">Viewed on April 24, 2025 at 11:32 AM</time>
          </div>

          {/* Notification 2 */}
          <div className="bg-gray-100 border-l-4 border-orange-400 p-5 rounded-lg hover:bg-orange-50 hover:-translate-y-1 transition-all duration-300">
            <p className="text-maroon-600 font-semibold text-lg mb-2">
              Client <strong>Mr.Rahul</strong> opened shared link for <strong>FinTech Redesign</strong>.
            </p>
            <time className="block text-black text-sm">Viewed on April 23, 2025 at 3:48 PM</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

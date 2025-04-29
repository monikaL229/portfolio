import React from 'react';

const Dashboard = () => {
  return (
<>
{/* Header */}
        <header className="w-full bg-black rounded-2xl px-5 py-4 flex flex-wrap items-center justify-between mb-8 border border-gray-200 shadow-sm bg-white/60 backdrop-blur-md">
          <div className="p-1">
            <img
              src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/ninjatech-logo.svg"
              alt="ninjatech-logo"
              className="w-24 sm:w-28"
            />
          </div>
          <nav className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center text-sm sm:text-base text-white">
            {['Dashboard', 'Portfolio', 'Notifications', 'Profile'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative text-white font-medium hover:text-orange-500 transition"
              >
                {item}
                {item === 'Notifications' && (
                  <>
                    <i className="fas fa-bell text-lg ml-1"></i>
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] rounded-full px-1.5">3</span>
                  </>
                )}
              </a>
            ))}
          </nav>
        </header>

        {/* Main Dashboard */}
        <main className="w-full p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl">Welcome back, Alex!</h1>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cards */}
            {[
              { icon: 'link', value: 25, label: 'Files shared via Link PDF' },
              { icon: 'file-pdf', value: 15, label: 'Files shared via PDF Upload' },
              { icon: 'hourglass-end', value: 3, label: 'Links expiring soon' },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition transform hover:-translate-y-1"
              >
                <i className={`fas fa-${card.icon} text-xl sm:text-2xl text-orange-500 mb-3`}></i>
                <h2 className="text-2xl font-bold text-gray-800">{card.value}</h2>
                <p className="text-sm text-gray-600 mt-1">{card.label}</p>
              </div>
            ))}
          </div>
        </main>
   
    </>
  );
};

export default Dashboard;

import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-300 flex justify-center items-start pt-10 font-[Poppins]">
    <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl max-w-[1400px] w-[90%] p-10 animate-fadeIn transition-all">
      
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-white shadow-md rounded-xl mb-10">
        <div className="bg-black p-2 rounded-lg">
          <img
            src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/ninjatech-logo.svg"
            alt="ninjatech-logo"
            className="w-28"
          />
        </div>

        <nav className="flex gap-8">
          <a href="#" className="relative text-lg font-medium text-gray-700 hover:after:w-6 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all">
            Dashboard
          </a>
          <a href="#" className="relative text-lg font-medium text-gray-700 hover:after:w-6 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all">
            Portfolio
          </a>
          <a href="#" className="relative text-lg font-medium text-gray-700 hover:after:w-6 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all flex items-center gap-1">
            Notifications
            <i className="fas fa-bell text-2xl"></i>
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5">
            3</span>
          </a>
          <a href="#" className="relative text-lg font-medium text-gray-700 hover:after:w-6 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all">
            Profile
          </a>
        </nav>
      </header>

      {/* Dashboard */}
      <main className="text-center">
        <h1>
          Welcome back, Alex!
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-orange-400 hover:-translate-y-1 transition">
            <i className="fas fa-link text-3xl text-orange-400 mb-4"></i>
            <h2 className="text-3xl font-bold text-gray-800">25</h2>
            <p className="text-gray-500 mt-2 text-sm">Files shared via Link PDF</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-orange-400 hover:-translate-y-1 transition">
            <i className="fas fa-file-pdf text-3xl text-orange-400 mb-4"></i>
            <h2 className="text-3xl font-bold text-gray-800">15</h2>
            <p className="text-gray-500 mt-2 text-sm">Files shared via PDF Upload</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-orange-400 hover:-translate-y-1 transition">
            <i className="fas fa-hourglass-end text-3xl text-orange-400 mb-4"></i>
            <h2 className="text-3xl font-bold text-gray-800">3</h2>
            <p className="text-gray-500 mt-2 text-sm">Links expiring soon</p>
          </div>

        </div>
      </main>

    </div>
  </div>
  )
}

export default Dashboard
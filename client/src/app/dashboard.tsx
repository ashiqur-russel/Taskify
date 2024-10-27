import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-gray-90 flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}
      >
        {/* nav */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Dashboard;

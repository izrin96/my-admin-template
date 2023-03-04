import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 antialiased dark:bg-[#0c0c0c] dark:text-gray-300">
      <Header />
      <Sidebar />
      <main className="ml-[240px]">{children}</main>
    </div>
  );
}

export default Layout;

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 antialiased dark:bg-[#0c0c0c] dark:text-gray-300">
      <Header toggleOpen={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar opened={sidebarOpen} />
      <main
        className={cn("md:ml-[240px]", sidebarOpen ? "hidden md:block" : "")}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;

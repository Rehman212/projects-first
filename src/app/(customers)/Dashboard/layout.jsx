"use client";
import Sidebar from "@/components/Sidebar";
import ProfileMenu from "../../../components/profilemenu";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false); // track client mount

  useEffect(() => {
    setMounted(true); // mounted = true on client
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-white shadow-sm rounded-xl px-6 py-4 mb-6">
          <div>
            <h2 className="text-black text-3xl font-bold pb-1">Dashboard</h2>
            <h1 className="text-[15px] font-semibold text-[#A91B1A]">
              {mounted ? formattedTime : "--:--:--"} {/* placeholder until client */}
            </h1>
          </div>

          {/* Profile Avatar on Right */}
          <ProfileMenu />
        </div>

        {/* Main Dashboard Section */}
        <div className="bg-white shadow-md rounded-xl p-6">{children}</div>
      </main>
    </div>
  );
}

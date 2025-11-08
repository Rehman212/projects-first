"use client";
import { useState, useEffect } from "react";
import { Home, User, Settings, LogOut, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsOpen(false);
            } else {
                setIsMobile(false);
                setIsOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Mobile toggle button */}
            {isMobile && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-5 left-5 z-50 bg-[#A31D1D] text-white px-3 py-2 rounded-md shadow-md"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-black to-[#A31D1D] text-white transition-all duration-300 ease-in-out z-40
          ${isOpen ? "w-64 p-6" : "w-0 p-0 overflow-hidden"}
          md:w-45 md:p-7 md:relative
        `}
            >
                <img src="/assests/images/blogo.Png" alt="Logo Image" className="pb-10" />
                <div className="space-y-6 mt-10 md:mt-0">
                    <Link href="/Dashboard" className="flex items-center gap-3 hover:text-yellow-300">
                        <Home size={22} />
                        {isOpen && <span>Dashboard</span>}
                    </Link>

                    <Link href="/Dashboard/userprofile" className="flex items-center gap-3 hover:text-yellow-300">
                        <User size={22} />
                        {isOpen && <span>Profile</span>}
                    </Link>

                    <Link href="/Dashboard/Map" className="flex items-center gap-3 hover:text-yellow-300">
                        <BarChart2 size={22} />
                        {isOpen && <span>Map</span>}
                    </Link>

                    <Link href="/Dashboard/Datatable" className="flex items-center gap-3 hover:text-yellow-300">
                        <Settings size={22} />
                        {isOpen && <span>DataTable</span>}
                    </Link>

                    <button>
                        <Link href="/logout" className="flex items-center gap-3 hover:text-red-300 mt-10">
                            <LogOut size={22} />
                            {isOpen && <span>Logout</span>}
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

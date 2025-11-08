"use client";
import React, { useState } from "react";
import { User, Settings, LogOut } from "lucide-react";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative inline-block text-left">
      {/* Profile Image */}
      <div
        className="cursor-pointer flex ustify-end"
        onClick={toggleMenu}
      >
        <img
          src="/assests/images/favicon.Webp"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-slate-600 hover:border-blue-500 transition-all duration-200"
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn"
          onMouseLeave={closeMenu}
        >
          <div className="py-1">
            {/* Profile Option */}
            <button className="w-full px-4 py-3 text-left flex  gap-3 hover:bg-slate-100 transition-colors duration-150">
              <User className="w-5 h-5 text-slate-600" />
             <a href="/Dashboard/userprofile"> <span className="text-slate-800 font-medium">Profile</span> </a>
            </button>

            {/* Settings Option */}
            <button className="w-full px-4 py-3 text-left flex  gap-3 hover:bg-slate-100 transition-colors duration-150">
              <Settings className="w-5 h-5 text-slate-600" />
           <a href="/Dashboard/Settings">   <span className="text-slate-800 font-medium">Settings</span> </a>
            </button>

            {/* Divider */}
            <div className="border-t border-slate-200 my-1"></div>

            {/* Logout Option */}
            <button className="w-full px-4 py-3 text-left flex  gap-3 hover:bg-red-50 transition-colors duration-150">
              <LogOut className="w-5 h-5 text-red-600" />
           <a href="/logout">   <span className="text-red-600 font-medium">Logout</span></a>
            </button>
          </div>
        </div>
      )}

      {/* Smooth Fade Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

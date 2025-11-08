"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user"); // if you store user info
      router.replace("/login");
    } else {
      router.back(); // go back if user cancels
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg">Processing logout...</p>
    </div>
  );
}

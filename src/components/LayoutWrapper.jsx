"use client";
import { usePathname } from "next/navigation";
import Navbar from "./header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // ✅ List of routes where Navbar & Footer should be hidden
  const hideOnRoutes = ["/Dashboard",];

  // ✅ Check if pathname starts with any of these routes
  const hideLayout = hideOnRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

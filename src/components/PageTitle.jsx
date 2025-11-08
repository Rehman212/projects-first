// app/components/PageTitle.tsx
"use client";

import { usePathname } from "next/navigation";
// import { useTransition } from "react-18next";
import { useTranslation } from "react-i18next";
export default function PageTitle() {
  const { t } = useTranslation ();
  const pathname = usePathname();

  // Extract last part of path and capitalize it
  const raw = pathname.split("/").filter(Boolean).pop() || "Home";
  const title = raw.charAt(0).toUpperCase() + raw.slice(1);

  return (
    <div className="bg-[url('/assests/images/agency.jpg')] bg-cover bg-center py-16 text-white text-center ">
      <h1 className="text-4xl font-bold drop-shadow-md font-serif"> {title}</h1>
    </div>
  );
}

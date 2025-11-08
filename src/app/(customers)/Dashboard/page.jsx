"use client"
import Link from "next/link";
import SimpleCol from "../../../components/simplecol"
import DonutChart from "../../../components/basicdonut"
export default function DashboardPage() {
  return (

    

    <div className="grid md:grid-cols-2 gap-4">
      {/* <div className="p-6 bg-indigo-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h2 className=" colorclass text-lg font-semibold mb-2  ">Total User</h2>
        <p className="colorclass text-2xl font-bold ">200</p>
      </div> */}
       <div className="p-4 bg-indigo-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h2 className=" colorclass text-lg font-semibold mb-2  ">Total User</h2>
        <SimpleCol />
      </div>
      <div className="p-4 bg-indigo-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h2 className=" colorclass text-lg font-semibold mb-2  ">Total User</h2>
        <DonutChart />
      </div>

      <div className="p-6 bg-yellow-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h2 className="colorclass text-lg font-semibold mb-2">Complaints </h2>
        <p className="text-2xl font-bold text-yellow-700">8 Requests</p>
      </div>
    </div>
  );
}

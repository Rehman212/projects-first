"use client"
import Image from "next/image"
import Link from "next/link"
export default function Jumbotron(){
    return(
        <div className="max-w-screen-xl mx-auto mt-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden w-full">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <h2 className="sm:text-4xl text-2xl font-semibold text-white leading-tight">
                Get The Best <span className="text-orange-400">Jumbotron Design</span>
              </h2>
              <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                Create stunning hero sections in minutes with our pre-built Jumbotron layouts.
                Designed with Tailwind CSS, these templates are fully responsive, customizable,
                and ready to use in any modern project.
              </p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Perfect for startups, portfolios, SaaS products, and landing pages —
                so you can focus on building features while we handle the design.
              </p>
              <button type="button"
                className="px-6 py-3 mt-10 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600 cursor-pointer">
                Get started
              </button>
            </div>
            <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover shrink-0" />
          </div>
        </div>
      </div>
    )
}
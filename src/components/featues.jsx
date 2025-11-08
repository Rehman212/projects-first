"use client";
import Image from "next/image";

export default function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h1 className="text-black text-4xl pt-10 pb-15 text-center">
              Benefits of Our Services
          </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {/* 1 */}
        <div>
          <svg
            className="shrink-0 size-9 text-[#A31D1D]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect width="10" height="14" x="3" y="8" rx="2" />
            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
            <path d="M8 18h.01" />
          </svg>

          <div className="bg-gradient-to-r from-[#A31D1D]/30 via-gray-100 to-transparent h-0.5 mt-6">
            <div className="bg-[#A31D1D] w-9 h-0.5"></div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Responsive
            </h3>
            <p className="mt-1 text-gray-600">
              Responsive, and mobile-first project on the web
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <svg
            className="shrink-0 size-9 text-[#A31D1D]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx="17" cy="17" r="3" />
            <circle cx="7" cy="7" r="3" />
          </svg>

          <div className="bg-gradient-to-r from-[#A31D1D]/30 via-gray-100 to-transparent h-0.5 mt-6">
            <div className="bg-[#A31D1D] w-9 h-0.5"></div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Customizable
            </h3>
            <p className="mt-1 text-gray-600">
              Components are easily customized and extendable
            </p>
          </div>
        </div>

        {/* 3 */}
        <div>
          <svg
            className="shrink-0 size-9 text-[#A31D1D]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>

          <div className="bg-gradient-to-r from-[#A31D1D]/30 via-gray-100 to-transparent h-0.5 mt-6">
            <div className="bg-[#A31D1D] w-9 h-0.5"></div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Documentation
            </h3>
            <p className="mt-1 text-gray-600">
              Every component and plugin is well documented
            </p>
          </div>
        </div>

        {/* 4 */}
        <div>
          <svg
            className="shrink-0 size-9 text-[#A31D1D]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>

          <div className="bg-gradient-to-r from-[#A31D1D]/30 via-gray-100 to-transparent h-0.5 mt-6">
            <div className="bg-[#A31D1D] w-9 h-0.5"></div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="mt-1 text-gray-600">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

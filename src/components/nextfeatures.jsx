"use client"
import Image from "next/image"
import Link from "next/link"
export default function Nextfeatures(){
    return(
        <div className="max-w-screen-xl max-lg:max-w-3xl mx-auto py-4">
      <div className="grid lg:grid-cols-2 items-center gap-x-8 gap-y-12 max-lg:text-center">
        <div>
          <div>
            <span className="inline-block text-sm font-semibold text-[#A31D1D] mb-3">
            • ABOUT OUR COMPANY •
          </span>
            <h2 className="text-slate-900 text-2xl md:text-3xl font-bold leading-11">Grow Your Business With Our Agency
            </h2>
            <p className="text-black text-[15px] mt-6 leading-relaxed">We connect you with top influencers to boost your content, expand your reach,
              and drive engagement. Get started today!We connect you with top influencers to boost your content, expand your reach, and drive engagement. Get started today!

</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-12">
            <div className="flex items-center max-lg:flex-col gap-4">
              <div className="flex items-center justify-center bg-purple-100 w-12 h-12 rounded-full">
                <svg className="w-[22px] h-[22px] text-[#A31D1D]" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round"  strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                  </path>
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 text-base font-semibold mb-1">Trustworthy</h4>
                <p className="text-[14px] text-black">100% transparency</p>
              </div>
            </div>
            <div className="flex items-center max-lg:flex-col gap-4">
              <div className="flex items-center justify-center bg-purple-100 w-12 h-12 rounded-full">
                <svg className="w-[22px] h-[22px] text-[#A31D1D]" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 text-base font-semibold mb-1">Fast Results</h4>
                <p className="text-[14px] text-black">Quick implementation</p>
              </div>
            </div>
            <div className="flex items-center max-lg:flex-col gap-4">
              <div className="flex items-center justify-center bg-purple-100 w-12 h-12 rounded-full">
                <svg className="w-[22px] h-[22px] text-[#A31D1D]" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 text-base font-semibold mb-1">Expert Team</h4>
                <p className="text-[14px] text-black">Industry specialists</p>
              </div>
            </div>
            <div className="flex items-center max-lg:flex-col gap-4">
              <div className="flex items-center justify-center bg-purple-100 w-12 h-12 rounded-full">
                <svg className="w-[22px] h-[22px] text-[#A31D1D]" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                  </path>
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 text-base font-semibold mb-1">Innovative</h4>
                <p className="text-[14px] text-black">Cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src="/assests/images/bg-image.jpg" alt="social-img"
            className="w-full rounded-2xl" />
        </div>
      </div>
    </div>
    )
}

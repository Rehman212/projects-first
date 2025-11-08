"use client"
import Image from "next/image"
export default function Testimonial(){
    return(
        <div className="px- mt-20 mb-15">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <h2 className="text-slate-900 text-4xl font-bold">What our happy client say</h2>
            <p className="text-[15px] text-black mt-4 leading-relaxed">See what our happy clients have to say. They’ve shared how our templates helped them launch quickly, look professional, and grow with ease.</p>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <div className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 inline" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
              </svg>
            </div>
            <div className="bg-[#A31D1D] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-auto px-10 pr-2 py-2 mt-6">
          <div className="min-w-[1052px] grid grid-cols-3 gap-14">
            <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 border-gray-200 rounded-3xl relative">
              <img src="/assests/images/favicon.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

              <div>
                <h6 className="text-[#A31D1D] text-[15px] font-semibold">John Doe</h6>
                <p className="mt-1 text-xs text-slate-600">Founder of ABC</p>
              </div>

              <div className="mt-4">
                <p className="text-slate-700 text-[15px] font-normal leading-relaxed">We connect you with top influencers to boost your content, expand your reach, and drive engagement. Get started today!We connect you with top influencers</p>
              </div>

              <div className="flex space-x-1 mt-4">
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>

            <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 border-gray-200 rounded-3xl relative">
              <img src="/assests/images/favicon.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

              <div>
                <h6 className="text-[#A31D1D] text-[15px] font-semibold">Mark Adair</h6>
                <p className="mt-1 text-xs text-slate-600">Founder of ABC</p>
              </div>

              <div className="mt-4">
                <p className="text-slate-700 text-[15px] font-normal leading-relaxed">We connect you with top influencers to boost your content, expand your reach, and drive engagement. Get started today!We connect you with top influencers</p>
              </div>

              <div className="flex space-x-1 mt-4">
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>

            <div className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 border-gray-200 rounded-3xl relative">
              <img src="/assests/images/favicon.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

              <div>
                <h6 className="text-[#A31D1D] text-[15px] font-semibold">Simon Konecki</h6>
                <p className="mt-1 text-xs text-slate-600">Founder of ABC</p>
              </div>

              <div className="mt-4">
                <p className="text-slate-700 text-[15px] font-normal leading-relaxed">We connect you with top influencers to boost your content, expand your reach, and drive engagement. Get started today!We connect you with top influencers</p>
              </div>

              <div className="flex space-x-1 mt-4">
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#A31D1D]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
